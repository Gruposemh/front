import React from "react";
import "../../../styles/Tarefa/section-agenda/style.css"
import Title from "../../Title";
import SectionAulas from "../../../components/Tarefas/section-aulas"

export default function Agenda(){
    return (
        <>
            <section className="section-agenda">
                <Title title={"Agenda"} />
                <div className="agenda-tarefas">
                    <p>minhas aulas</p>
                    <p>minhas tarefas</p>
                </div>
                <SectionAulas />
            </section>
        </>
    )
}