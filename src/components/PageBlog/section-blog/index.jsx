import CardBlog from "../../Cards/CardsBlog";
import Title from "../../Title";
import "../../../styles/Blog/section-blog/style.css"
import Dentista from "../../../assets/Blog/image-blog.svg"

const SectionBlog = () => {
    return(
        <>
        <section className="section-blog">
            <Title title="Notícias"/>
            <div className="blog-container">
                <button id="btn-blog">+ Adicionar notícia ao blog</button>
                <div className="cards-blog">
                    <CardBlog 
                    img={Dentista}
                    dateTime={"28 de julho de 2025 - 11:45"}
                    titulo={"Parceria nova"}
                    noticia={"A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial..."}
                    />
                    <CardBlog 
                    img={Dentista}
                    dateTime={"28 de julho de 2025 - 11:45"}
                    titulo={"Parceria nova"}
                    noticia={"A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial..."}
                    />
                    <CardBlog 
                    img={Dentista}
                    dateTime={"28 de julho de 2025 - 11:45"}
                    titulo={"Parceria nova"}
                    noticia={"A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial..."}
                    />
                    <CardBlog 
                    img={Dentista}
                    dateTime={"28 de julho de 2025 - 11:45"}
                    titulo={"Parceria nova"}
                    noticia={"A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial..."}
                    />
                    <CardBlog 
                    img={Dentista}
                    dateTime={"28 de julho de 2025 - 11:45"}
                    titulo={"Parceria nova"}
                    noticia={"A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial..."}
                    />
                    <CardBlog 
                    img={Dentista}
                    dateTime={"28 de julho de 2025 - 11:45"}
                    titulo={"Parceria nova"}
                    noticia={"A ONG Voluntário conseguiu recentemente uma parceria com a colgate, ficamos muito felizes e entusiasmados com a oportunidade. Um agradecimento especial..."}
                    />
                </div>
            </div>
        </section>
        </>
    )
}
export default SectionBlog;