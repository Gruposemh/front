import React from "react";
import Title from "../../Title"
import CardEventos  from "../../Cards/CardEventos";
import "../../../styles/Eventos/section-eventos/style.css";
import teste from "../../../assets/Eventos/natal.png";

export default function SectionEventos(){
    return (
        <>
        <section className="section-eventos">
            <Title title={"Eventos"} />
            <CardEventos img={teste} titulo={"Evento de Natal"} local={"São Mateus, Zona Leste, SP"} data={"20/12/2025"} />
            <CardEventos img={teste} titulo={"Evento de Natal"} local={"São Mateus, Zona Leste, SP"} data={"20/12/2025"} />
        </section>
        </>
    )
}