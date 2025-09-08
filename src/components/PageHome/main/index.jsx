import integrantes from "../../../assets/Home/integrantes.png"
import "../../../styles/Home/main/style.css"

const Main = () => {
    return(
        <>
            <main>
                  <div className="conteudo-inicial">
                    <article className='voluntario'>
                        <h1>Fazer o bem <br /> faz muito <br /> bem!</h1>
                        <p>A ONG Voluntários Torcendo para o Bem atua há anos fazendo o bem para a comunidade local, promovendo eventos e campanhas em prol da população. Venha fazer parte desse movimento!</p>
                        <button className="btn-primary">Quero ser um voluntário</button>
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