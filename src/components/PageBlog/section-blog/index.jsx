import CardBlog from "../../Cards/CardsBlog";
import Title from "../../Title";
import "../../../styles/Blog/section-blog/style.css"

const SectionBlog = () => {
    return(
        <>
        <section className="section-blog">
            <Title titulo="Blog"/>
            <div className="blog-container">
                <h3>+ Adicionar notícia ao blog</h3>
                <div className="cards-blog">
                    <CardBlog/>
                /</div>
            </div>
        </section>
        </>
    )
}
export default SectionBlog;