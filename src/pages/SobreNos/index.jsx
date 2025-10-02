import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main/";
import SectionLinhaTempo from "../../components/SobreNos/section-linha-tempo";
import SectionPilares from "../../components/SobreNos/section-pilares";
import SectionEquipe from "../../components/SobreNos/section-equipe";
import img_sobreNos from "../../assets/SobreNos/sobreNos.png"
import SectionHistoria from "../../components/SobreNos/section-historia";

export default function SobreNos() {
    return (
        <>
            <Header />
            <Main img={img_sobreNos} text={"Sobre nós"}/>
            <SectionHistoria/>
            <SectionLinhaTempo />
            <SectionPilares />
            <SectionEquipe />
            <Footer />
        </>
    )
};