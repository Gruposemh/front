import React from "react";
import "../../../styles/ComoAjudar/section-planos/style.css"
import Button from "../../../components/Button"

export default function SectionPlanos() {
    return (
        <>
            <div className="planos-container">
                <h1>Fazer o Bem Faz Muito Bem</h1>
                <div className="planos">
                    <div className="ser-voluntario">
                        <h4>Seja um voluntário e nos <br /> ajude em nossas <br /> atividades</h4>
                        <Button text={"Quero ser um voluntário"} />
                    </div>
                    <div className="mensal">
                        <p>Mensal</p>
                        <h3>Escolha um valor <br /> fixo para doar<br /> mensalmente</h3>
                        <Button text={"Continue"} />
                    </div>
                    <div className="doe-agora">
                        <p>Doe agora</p>
                        <h3>Escolha um valor <br /> fixo para doar<br /> mensalmente</h3>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}