import { useState } from "react";
import "../../styles/Button/style.css";

const Button = ({ text, primary = true, onClick, className = "" }) => {
  const [hover, setHover] = useState(false);

  const buttonClass = primary
    ? hover
      ? "btn-secondary"
      : "btn-primary"
    : hover
    ? "btn-primary"
    : "btn-secondary";

  return (
    <button
      className={`${buttonClass} ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
