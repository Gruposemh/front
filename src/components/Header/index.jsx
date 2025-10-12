import React, { useState, useEffect } from "react";
import "../../styles/Header/style.css";
import Logo from "../../assets/Logos/Logo.svg";
import Button from "../Button";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [aberto, setAberto] = useState(false);
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  // Checa se o usuário está logado
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await fetch("http://localhost:8080/auth/check", {
          method: "GET",
          credentials: "include"
        });
        
        console.log("✅ Status da verificação de login:", response.status);
        
        if (response.ok) {
          console.log("✅ Usuário está logado");
          setLogado(true);
        } else {
          console.log("❌ Usuário não está logado");
          setLogado(false);
        }
      } catch (error) {
        console.error("❌ Erro ao verificar login:", error);
        setLogado(false);
      }
    };

    checkLogin();

    // Escuta evento customizado para atualizar o estado após login
    window.addEventListener('loginSuccess', checkLogin);
    
    return () => {
      window.removeEventListener('loginSuccess', checkLogin);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8080/auth/logout", {
        method: "POST",
        credentials: "include"
      });
      setLogado(false);
      navigate("/login");
    } catch (error) {
      console.error("Erro no logout:", error);
    }
  };

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

              <div className={`sobre-dropdown ${aberto ? "ativo" : "inativo"}`}>
                <ul className="lista-dropdown">
                  <li><Link to="/sobre#nossa_historia" className="drop-item" onClick={() => setAberto(false)}>Nossa História</Link></li>
                  <li><Link to="/sobre#linha-do-tempo" className="drop-item" onClick={() => setAberto(false)}>Linha do Tempo</Link></li>
                  <li><Link to="/sobre#equipe" className="drop-item" onClick={() => setAberto(false)}>Equipe</Link></li>
                  <li><Link to="/sobre#projetos" className="drop-item" onClick={() => setAberto(false)}>Projetos</Link></li>
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

          {logado ? (
            <Button text="Sair →" primary={false} onClick={handleLogout} />
          ) : (
            <Link to="/login">
              <Button text="Login →" primary={false} />
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;