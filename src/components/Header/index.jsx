import "../../styles/Header/style.css"
import { useState } from "react";
import Logo from "../../assets/Logos/Logo.svg";
import Button from "../Button";

const Header = () => {

     const [aberto, setAberto] = useState(false);
    return(
        <>
        <header>
            <img src={Logo} alt="Logo dos Voluntarios Pro Bem, três bonequinhos, preto cinza e vermelho" className="logo" />

           





    <nav className="nav-header">
      <ul className="lista-header">
        <li><a href="#">Eventos</a></li>

        <li
          className="menu-item-com-dropdown"
          onMouseEnter={() => setAberto(true)}
          onMouseLeave={() => setAberto(false)}
        >
          <a href="#">Sobre Nós ▾</a>

          {/* dropdown controlado */}
          <div className={`sobre-dropdown ${aberto ? "ativo" : "inativo"}`}>
            <ul className="lista-dropdown">
              <li><a href="#" className="drop-item">Nossa História</a></li>
              <li><a href="#" className="drop-item">Linha do Tempo</a></li>
              <li><a href="#" className="drop-item">Equipe</a></li>
              <li><a href="#" className="drop-item">Projetos</a></li>
            </ul>
          </div>
        </li>

        <li><a href="#">Blog</a></li>
        <li><a href="#">Como Ajudar</a></li>
      </ul>
    </nav>
  




             
            <div className="header-buttons">
                <Button text= "Doe Agora" primary={true}/>
                <Button text= "Cadastrar-se →" primary={false}/>
                
            </div>
        </header>
        
        </>

    )
}
export default Header;