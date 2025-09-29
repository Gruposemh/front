import React from "react";
import CardTarefa from "../../Cards/CardTarefa"
import "../../../styles/Tarefa/section-tarefas/style.css"

const ListaTarefa = ({ }) => {
    return(
        <>
            <section className="lista-tarefas">
                <CardTarefa nome={"Limpeza da sede"} data={"Segunda à Sexta"}/>
                <CardTarefa nome={"Zeladoria na praça"} data={"Sábado"}/>
                <CardTarefa nome={"Ajuda em evento"} data={"23/09/2025"}/>
            </section>
        </>
    )
}

export default ListaTarefa;