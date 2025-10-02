import "../../../styles/Cards/CardBlog/style.css"

const CardBlog = ({ img, dateTime, titulo, noticia}) => {
    return(
        <>
        <article className="card-blog">
            <img src={img} alt="Imagem da noticia" />
            <p className="dateTime">{dateTime}</p>
            <h4>{titulo}</h4>
            <p>{noticia}</p>

        </article>
        </>
    )
}
export default CardBlog;