import "../../styles/Header/style.css"
import { useState } from "react"
import Logo from "../../assets/Logos/Logo.svg";

const Header = () => {

    const [aberto, setAberto] = useState(false); 
   

    const [botaoClicado, setBotaoClicado] = useState(false);

    const handleMouseEnter = () => setBotaoClicado(true);
    const handleMouseLeave = () => setBotaoClicado(false); 

    function DropdownItem(props){
        return(
            <nav className="nav-dropdown">
                <li><a >{props.titulo}</a></li> {/*  href={props.caminho} */ }
            </nav>
        
        )
    }

   
    return(
        <>
        <header>
            <img src={Logo} alt="Logo dos Voluntarios Pro Bem, três bonequinhos, preto cinza e vermelho" className="logo" />

            <nav className="nav-header">

                <ul className="lista-header">
                    <li><a>Eventos</a></li>

                     
                        <li onMouseEnter={()=>{setAberto(true)}}
                         onMouseLeave={()=>{setAberto(false)}}
                         className="menu-item-com-dropdown">
                            <a >Sobre Nós</a>
                            {aberto && (
                                <div className="sobre-dropdown">
                                    <ul className="lista-dropdown">
                                        <DropdownItem titulo={"Nossa História"}/>
                                        <DropdownItem titulo={"Linha do Tempo"}/>
                                        <DropdownItem titulo={"Equipe"}/>
                                        <DropdownItem titulo={"Projetos"}/>
                                    </ul>
                                </div>
                            )}
                        </li>

                            

                   

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