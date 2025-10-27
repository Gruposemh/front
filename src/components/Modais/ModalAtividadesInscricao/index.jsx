import { useEffect, useRef } from "react";
import Button from "../../Button";
import "../../../styles/Modais/modalAtividadeInscricao/style.css";

const ModalAtividadeInscricao = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-inscricao-overlay">
      <div ref={modalRef} className="modal-inscricao-container">
        <h3>Inscreva-se na atividade</h3>
        <input type="email" placeholder="E-mail" />
        <input type="tel" placeholder="Telefone" />
        <Button text="Enviar inscrição" onClick={onClose} />
      </div>
    </div>
  );
};

export default ModalAtividadeInscricao;
