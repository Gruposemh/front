import "../../../styles/Home/Carrossel-section/style.css"
import Title from "../../Title"
import Button from "../../Button"
import Carrosel from "../../../assets/Home/carrossel.svg"

const CarrosselSection = () =>{
    return(
        <>
        <section className="carrosel-section">

            <div className="carrossel-container">
                <Title title="Transformando vidas"/>
                <div className="carrossel-content">
                     <img src={Carrosel}/>
                </div>
               <Button 
                text= "Conheça nossa história"
                primary={true}/>
                
            </div>
            
        </section>
        </>
    )
}
export default CarrosselSection