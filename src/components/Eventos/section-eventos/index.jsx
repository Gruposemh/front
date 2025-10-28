import React, { useState } from "react";
import Title from "../../Title"
import CardEventos  from "../../Cards/CardEventos";
import ModalEventoInscricao from "../../Modais/ModalEventoInscricao";
import { UseModalEventoInscricao } from "../../Modais/ModalEventoInscricao/UseModalEventoInscricao";
import "../../../styles/Eventos/section-eventos/style.css";
import natal from "../../../assets/Eventos/evento-natal.svg";
import pascoa from "../../../assets/Eventos/evento-pascoa.png";
import arrecadacao from "../../../assets/Eventos/evento-arrecadacao.svg";


export default function SectionEventos(){
    const modalInscricao = UseModalEventoInscricao();
    const [eventoSelecionado, setEventoSelecionado] = useState(null);

    const handleInscrever = (nomeEvento) => {
        setEventoSelecionado(nomeEvento);
        modalInscricao.open();
    };

    return (
        <>
        <section className="section-eventos">
            <Title title={"Eventos"} />
            <CardEventos 
                img={natal} 
                titulo={"Evento de Natal"} 
                local={"São Mateus, Zona Leste, SP"} 
                data={"20/12/2025"} 
                onInscrever={() => handleInscrever("Evento de Natal")}
            />
            <CardEventos 
                img={pascoa} 
                titulo={"Evento de Páscoa"} 
                local={"São Mateus, Zona Leste, SP"} 
                data={"10/02/2025"} 
                onInscrever={() => handleInscrever("Evento de Páscoa")}
            />
            <CardEventos 
                img={arrecadacao} 
                titulo={"Evento de Arrecadação"} 
                local={"São Mateus, Zona Leste, SP"} 
                data={"19/08/2025"} 
                onInscrever={() => handleInscrever("Evento de Arrecadação")}
            />
        </section>

        {/* Modal de Inscrição */}
        <ModalEventoInscricao
            isOpen={modalInscricao.isOpen}
            onClose={modalInscricao.close}
            evento={eventoSelecionado}
        />
        </>
    )
}