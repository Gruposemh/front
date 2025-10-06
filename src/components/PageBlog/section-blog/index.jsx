import CardBlog from "../../Cards/CardsBlog";
import Title from "../../Title";
import "../../../styles/Blog/section-blog/style.css"
import Dentista from "../../../assets/Blog/image-blog.svg"
import { Link } from "react-router-dom";

const SectionBlog = () => {
    return(
        <>
        <section className="section-blog">
            <Title title="Notícias"/>
            <div className="blog-container">
                <Link to="/adicionar-noticia" id="btn-blog" className="btn-link">
                + Adicionar notícia ao blog
                 </Link>
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