import { useEffect, useRef, useState } from "react";
import Button from "../../Button";
import { FiX } from "react-icons/fi";
import "../../../styles/Modais/modalEventoInscricao/style.css";

const ModalEventoInscricao = ({ isOpen, onClose, evento }) => {
  const modalRef = useRef(null);
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      const timer = setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 150);
      
      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !telefone) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Aqui você pode adicionar a lógica de envio da inscrição
    console.log("Inscrição enviada:", { evento, email, telefone });
    
    // Limpar campos e fechar modal
    setEmail("");
    setTelefone("");
    onClose();
    
    alert(`Inscrição realizada com sucesso no evento: ${evento}!`);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-evento-inscricao-overlay">
      <div ref={modalRef} className="modal-evento-inscricao-container">
        {/* Botão Fechar (X) */}
        <button className="close-button-evento" onClick={onClose}>
          <FiX size={24} />
        </button>
        
        <h3>Inscreva-se no evento</h3>
        <p className="evento-nome">{evento}</p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="tel" 
            placeholder="Telefone" 
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
          <Button text="Confirmar inscrição" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default ModalEventoInscricao;
