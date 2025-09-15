import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Main from "../../components/PageHome/main"
import AtividadeSection from "../../components/PageHome/atividade-section"
import EstatisticaSection from "../../components/PageHome/estatisticas-section"


const Home =()=> {
    return(
        <>
        <Header/>
        <Main/>
        <AtividadeSection/>
        <EstatisticaSection/>
        <Footer/>
        </>

    )
}
export default Home