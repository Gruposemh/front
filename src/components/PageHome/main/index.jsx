import integrantes from "../../../assets/Home/integrantes.png"
import "../../../styles/Home/main/style.css"
import Button from "../../Button";

const Main = () => {
    return(
        <>
            <main>
                  <div className="conteudo-inicial">
                    <article className='voluntario'>
                        <h1>Fazer o bem <br /> faz muito <br /> bem!</h1>
                        <p>A ONG Voluntários Torcendo para o Bem atua há anos fazendo o bem para a comunidade local, promovendo eventos e campanhas em prol da população. Venha fazer parte desse movimento!</p>
                        <Button text="Quero ser um voluntário" primary={true}/>
                      
                    </article>
                    <div className='img-integrantes'>
                        <img src={integrantes} alt="Integrantes da ONG" />
                    </div>
                </div>
            </main>
        </>
    )
        
}
export default Main;