import "../../../styles/Cards/CardAtividades/style.css"
const CardAtividades = ({ image, name }) => {
    return (
        <>

        <div className="cardAtiv-container">
            <img className= "icon-card-atividade" src={image} alt={`foto da aula de ${name}`} />
            <h3>{name}</h3>
        </div>
        
        

        </>
    )
}
export default CardAtividades