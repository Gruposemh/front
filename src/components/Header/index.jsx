import "./style.css"
import '../../../src/global.css'
import { useState } from "react"
import Logo from "../../assets/Logo.svg";

const Header = () => {

    const [botaoClicado, setBotaoClicado] = useState(false);

    const handleMouseEnter = () => setBotaoClicado(true);
    const handleMouseLeave = () => setBotaoClicado(false); 

   
    return(
        <>
        <header>
            <img src={Logo} alt="Logo dos Voluntarios Pro Bem, três bonequinhos, preto cinza e vermelho" className="logo" />

            <nav className="nav-header">

                <ul>
                    <li><a>Eventos</a></li>
                    <li><a>Sobre Nós</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Como ajudar</a></li>
                    
                </ul>
                
            </nav>
            <div className="header-buttons">
                <button className={`btn-primary ${botaoClicado ? 'btn-secondary' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} 
                >Doe agora</button>
                <button className='btn-secondary' >Cadastrar-se →</button>
            </div>
        </header>
        
        </>

    )
}
export default Header;