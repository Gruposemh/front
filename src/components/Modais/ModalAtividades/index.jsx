import { useEffect, useRef } from "react";
import Button from "../../Button";
import "../../../styles/Modais/modalAtividades/style.css";

const ModalAtividades = ({ aula, data, horario, isOpen, onClose, position, onInscrever}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let hasMoved = false;

    function handleClickOutside(event) {
      // Verifica se o clique foi fora do modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      hasMoved = false;
    }

    function handleTouchMove(event) {
      if (!hasMoved) {
        const deltaX = Math.abs(event.touches[0].clientX - startX);
        const deltaY = Math.abs(event.touches[0].clientY - startY);
        
        // Se moveu mais de 10px, fecha o modal
        if (deltaX > 10 || deltaY > 10) {
          hasMoved = true;
          onClose();
        }
      }
    }

    function handleMouseDown(event) {
      // Ignora se clicou no modal
      if (modalRef.current && modalRef.current.contains(event.target)) {
        return;
      }
      startX = event.clientX;
      startY = event.clientY;
      hasMoved = false;
    }

    function handleMouseMove(event) {
      if (!hasMoved && startX !== 0) {
        const deltaX = Math.abs(event.clientX - startX);
        const deltaY = Math.abs(event.clientY - startY);
        
        // Se moveu mais de 10px, fecha o modal
        if (deltaX > 10 || deltaY > 10) {
          hasMoved = true;
          onClose();
        }
      }
    }

    if (isOpen) {
      // Usa um pequeno delay para evitar fechar imediatamente após abrir
      const timer = setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("touchstart", handleTouchStart, { passive: true });
        document.addEventListener("touchmove", handleTouchMove, { passive: true });
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mousemove", handleMouseMove);
      }, 150);
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", handleClickOutside);
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !position) return null;

  // Estilo inline para posicionar o modal EXATAMENTE sobre o card clicado
  const modalStyle = {
    position: "fixed",
    top: `${position.top}px`,
    left: `${position.left}px`,
    width: `${position.width}px`,
    height: `${position.height}px`,
  };

  return (
    <div 
      ref={modalRef} 
      className="modal-atividade-container-positioned"
      style={modalStyle}
    >
      <h3>{aula}</h3>
      <p className="modal-atividade-data">{data}</p>
      <p className="modal-atividade-horario">{horario}</p>
      <Button text="Inscrever-se" onClick={onInscrever} />
    </div>
  );
};

export default ModalAtividades;
