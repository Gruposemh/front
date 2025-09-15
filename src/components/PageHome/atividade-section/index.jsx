import "../../../styles/Home/Atividades-section/style.css"
import CardAtividades from "../../Cards/CardAtividades";
import Title from "../../Title";
import ballet from "../../../assets/Home/icon-ballet.png"
import box from "../../../assets/Home/icon-box.png"
import capoeira from "../../../assets/Home/icon-capoeira.png"
import danca from "../../../assets/Home/icon-danca.png"
import muayThai from "../../../assets/Home/icon-muay.png"



const AtividadeSection = () => {
    
    return(
        <>
        <section className="atividades">
            <Title title= "Conheça nossas atividades "/>
            <div className="atividades-container">
                <CardAtividades
                image = {ballet}
                name= "Ballet"
                />
                <CardAtividades
                image = {box}
                name= "Box"
                />
                <CardAtividades
                image = {capoeira}
                name= "Capoeira"
                />
                <CardAtividades
                image = {muayThai}
                name= "Muay Thai"
                />
                <CardAtividades
                image = {danca}
                name= "Dança"
                />
            </div>
        </section>

        </>
      
    )
}

export default AtividadeSection;
