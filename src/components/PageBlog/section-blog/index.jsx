import CardBlog from "../../Cards/CardsBlog";
import Title from "../../Title";
import { useBlog } from "../../../contexts/BlogContext";
import "../../../styles/Blog/section-blog/style.css"
import { Link } from "react-router-dom";

const SectionBlog = () => {
    const { noticias } = useBlog();

    return(
        <>
        <section className="section-blog">
            <Title title="Notícias"/>
            <div className="blog-container">
                <Link to="/adicionar-noticia" id="btn-blog" className="btn-link">
                + Adicionar notícia ao blog
                 </Link>
                <div className="cards-blog">
                    {noticias.length === 0 ? (
                        <p className="sem-noticias">Nenhuma notícia publicada ainda. Seja o primeiro a adicionar!</p>
                    ) : (
                        noticias.map((noticia) => {
                            // Limitar a 120 caracteres para preview
                            const previewTexto = noticia.conteudo.length > 120 
                                ? noticia.conteudo.substring(0, 120) + '...'
                                : noticia.conteudo;
                            
                            return (
                                <CardBlog 
                                    key={noticia.id}
                                    id={noticia.id}
                                    img={noticia.imagem}
                                    dateTime={noticia.dataHora}
                                    titulo={noticia.titulo}
                                    noticia={previewTexto}
                                />
                            );
                        })
                    )}
                </div>
            </div>
        </section>
        </>
    )
}
export default SectionBlog;