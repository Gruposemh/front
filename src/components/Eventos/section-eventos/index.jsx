import React from "react";
import Title from "../../Title"
import Card  from "../../Cards/CardEventos";
import "../../../styles/Eventos/section-eventos/style.css"

export default function SectionEventos(){
    return (
        <>
        <section className="section-eventos">
            <Title title={"Eventos"} />
            <Card />
            <Card />
        </section>
        </>
    )
}