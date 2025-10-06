import React from "react";
import "../../styles/Header/style.css"
import { useState } from "react";
import Logo from "../../assets/Logos/Logo.svg";
import Button from "../Button";
import { Link } from 'react-router-dom'

const Header = () => {
  const [aberto, setAberto] = useState(false);
  return (
    <>
      <header>
        <Link to="/">
          <img src={Logo} alt="Logo dos Voluntarios Pro Bem, três bonequinhos, preto cinza e vermelho" className="logo" />
        </Link>

        <nav className="nav-header">
          <ul className="lista-header">
            <li><Link to="/eventos">Eventos</Link></li>

            <li
              className="menu-item-com-dropdown"
              onMouseEnter={() => setAberto(true)}
              onMouseLeave={() => setAberto(false)}
            >
              <li><Link to="/sobre">Sobre Nós ▾</Link></li>
 
              {/* dropdown controlado */}
              <div className={`sobre-dropdown ${aberto ? "ativo" : "inativo"}`}>
                <ul className="lista-dropdown">
                  <li>
                    <Link 
                      to="/sobre#nossa_historia" 
                      className="drop-item" 
                      onClick={() => setAberto(false)}
                    >
                      Nossa História
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/sobre#linha-do-tempo" 
                      className="drop-item" 
                      onClick={() => setAberto(false)}
                    >
                      Linha do Tempo
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/sobre#equipe" 
                      className="drop-item" 
                      onClick={() => setAberto(false)}
                    >
                      Equipe
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/sobre#projetos" 
                      className="drop-item" 
                      onClick={() => setAberto(false)}
                    >
                      Projetos
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/como-ajudar">Como Ajudar</Link></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <Link to="/como-ajudar">
            <Button text="Doe Agora" primary={true} />
          </Link>
          <Link to="/cadastrar-se">
            <Button text="Cadastrar-se →" primary={false} />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header;