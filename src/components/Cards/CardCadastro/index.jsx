import React from "react";
import "../../../styles/Cards/CardFormulario/style.css"
import Button from "../../../components/Button"
import facebook from "../../../assets/CardCadastro/facebook.png"
import google from "../../../assets/CardCadastro/google.png"
import apple from "../../../assets/CardCadastro/apple.png"


import { useNavigate } from "react-router-dom";

const CardCadastro = ({ title, action}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="background-card">
                <div className="card-formulario">
                    <h1>{title}</h1>
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="nome">Nome completo</label>
                            <input type="text" name="nome"   required/>
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
                    <Button text={action}/>
                    
                    {title !== "Login" ? (
                        <div className="opcoes-login">
                            <p className="criar-conta">
  já tem uma conta?
  <span onClick={() => navigate("/login")}> Faça login </span>
</p>
                        <div className="social-buttons">
                             <button className="social-btn facebook">
                                <img src={facebook} />
                            </button>
                            <button className="social-btn google">
                                <img src={google} />
                            </button>
                            <button className="social-btn apple">
                                <img src={apple} />
                            </button>
                        </div>
                           
                        </div>
                    ) : (
                         <p className="criar-conta">
                      não tem uma conta?
                      <span onClick={() => navigate("/cadastrar-se")}> Cadastre-se aqui </span>
                    </p>
                    )}
                </div>
            </div>
        </>
    )
}

export default CardCadastro;