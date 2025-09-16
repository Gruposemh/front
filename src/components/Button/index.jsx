import { useState } from "react";
import "../../styles/Button/style.css"

const Button = ({ text, primary = true, onClick }) => {
  const [hover, setHover] = useState(false);

  // Se for primary, começa como btn-primary e no hover vira btn-secondary
  // Se for secondary, começa como btn-secondary e no hover vira btn-primary
  const buttonClass = primary
    ? hover
      ? "btn-secondary"
      : "btn-primary"
    : hover
    ? "btn-primary"
    : "btn-secondary";

  return (
    <button
      className={buttonClass}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
