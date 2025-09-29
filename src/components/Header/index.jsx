import "../../styles/Header/style.css"
import { useState } from "react";
import Logo from "../../assets/Logos/Logo.svg";
import Button from "../Button";
import { Link } from 'react-router-dom'

const Header = () => {

     const [aberto, setAberto] = useState(false);
    return(
        <>
        <header>
            <img src={Logo} alt="Logo dos Voluntarios Pro Bem, três bonequinhos, preto cinza e vermelho" className="logo" />

           





    <nav className="nav-header">
      <ul className="lista-header">
        <li><Link to="/eventos">Eventos</Link></li>

        <li
          className="menu-item-com-dropdown"
          onMouseEnter={() => setAberto(true)}
          onMouseLeave={() => setAberto(false)}
        >
          <a href="#">Sobre Nós ▾</a>

          {/* dropdown controlado */}
          <div className={`sobre-dropdown ${aberto ? "ativo" : "inativo"}`}>
            <ul className="lista-dropdown">
              <li><Link to="/nossa-historia" className="drop-item">Nossa História</Link></li>
              <li><Link to="/linha-do-tempo" className="drop-item">Linha do Tempo</Link></li>
              <li><Link to="/equipe" className="drop-item">Equipe</Link></li>
              <li><Link to="/projetos" className="drop-item">Projetos</Link></li>
            </ul>
          </div>
        </li>

        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/como-ajudar">Como Ajudar</Link></li>
      </ul>
    </nav>
  




             
            <div className="header-buttons">
              <Link to="/doe-agora">
                <Button text= "Doe Agora" primary={true}/>
              </Link>
              <Link to="/cadastrar-se">
                <Button text= "Cadastrar-se →" primary={false}/>
              </Link>
            </div>
        </header>
        
        </>

    )
}
export default Header;