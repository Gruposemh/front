import React from "react";
import CardAula from "../../Cards/CardAulas";
import teste from "../../../assets/Tarefas/section-agenda/ballet.png"

export default function SectionAulas(){
    return (
        <>
            <CardAula img={teste} local={"São Mateus, Zona Leste, SP"} data={"Segunda e Terça"}/>
        </>
    )
}