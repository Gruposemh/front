import { useEffect, useRef } from "react";
import Button from "../../Button";
import "../../../styles/Modais/modalAtividades/style.css";

const ModalAtividades = ({ aula, data, horario, isOpen, onClose, position }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !position) return null;

  const style = {
    position: "absolute",
    top: position.top + "px",
    left: position.left + "px",
    width: position.width + "px",
    padding: "34px 32px",
    background: "#fff",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    zIndex: 1000,
  };

  return (
    <div ref={modalRef} className="ativCard-container" style={style}>
      <h3>{aula}</h3>
      <p>{data}</p>
      <p>{horario}</p>
      <Button text="Inscrever-se" />
    </div>
  );
};

export default ModalAtividades;
