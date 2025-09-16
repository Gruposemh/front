import "../../styles/Header/style.css"
import { useState } from "react"
import Logo from "../../assets/Logos/Logo.svg";
import Button from "../Button";

const Header = () => {

    const [aberto, setAberto] = useState(false); 



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
                <Button text= "Doe Agora" primary={true}/>
                <Button text= "Cadastrar-se →" primary={false}/>
                
            </div>
        </header>
        
        </>

    )
}
export default Header;