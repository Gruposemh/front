import React from "react";
import "../../../styles/Cadastro/Capa/style.css"
import logo from "../../../assets/Logos/logo.svg"

const CapaCadastro = ({title, img}) => {
    return (
        <>
            <div className="capa-container">
                <img src={img} className="fundo" />
                <div className="overlay"></div>
                <div className="cabecalho">
                    <img src={logo} alt="logo" />
                    <p>Fazer o Bem <br /> Faz Muito Bem</p>
                </div>
                <h1>{title}</h1>
            </div>
        </>
    )
}

export default CapaCadastro
