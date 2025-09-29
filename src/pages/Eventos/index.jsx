<<<<<<< HEAD
import React from "react";
import Header from "../../components/Header"
import Main from "../../components/Main";
import SectionEventos from "../../components/Eventos/section-eventos"
import SectionCampanhas from "../../components/Eventos/section-campanhas";
import Footer from "../../components/Footer"
import img_eventos from "../../assets/Eventos/img-eventos.png"

export default function Eventos() {
    return (
        <>
        <Header />
        <Main img={img_eventos} text={"Eventos"}/>
        <SectionEventos />
        <SectionCampanhas />
        <Footer />
        </>
    )
}
=======

const Eventos = () =>{
    return(
        <>
        <h1>Página de Eventos</h1>
        </>
    )
}
export default Eventos;
>>>>>>> ac6ae1932b04b6fcea2a955954b0cec4d88c1bd2
