import React from "react";
import "../../../styles/Cards/CardFormulario/style.css"
import Button from "../../../components/Button"

const CardCadastro = ({ title, }) => {
    return (
        <>
            <div className="background-card">
                <div className="card-formulario">
                    <h1>Cadastrar-se</h1>
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="nome">Nome completo</label>
                            <input type="text" name="nome" />
                        </div>
                        <div className="input">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" />
                        </div>
                        <div className="input">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" />
                        </div>
                    </div>
                    <Button text={"Cadastrar-se"}/>
                    <p>ou faça login com</p>
                    <div className="opcoes-login">

                    </div>
                </div>
            </div>
        </>
    )
}

export default CardCadastro;