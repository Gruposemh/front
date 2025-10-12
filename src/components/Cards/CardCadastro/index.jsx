import React, { useState } from "react";
import "../../../styles/Cards/CardFormulario/style.css";
import Button from "../../../components/Button";
import facebook from "../../../assets/CardCadastro/facebook.png";
import google from "../../../assets/CardCadastro/google.png";
import apple from "../../../assets/CardCadastro/apple.png";
import { useNavigate } from "react-router-dom";

const CardCadastro = ({ title, action }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            const url =
                title === "Login"
                    ? "http://localhost:8080/auth/login"
                    : "http://localhost:8080/auth/register";

            const body =
                title === "Login"
                    ? { email: formData.email, senha: formData.senha }
                    : formData;

            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(body)
            });

            if (response.ok) {
                if (title === "Login") {
                    // Redireciona e força reload para atualizar o Header
                    window.location.href = "/";
                } else {
                    navigate("/login");
                }
            } else if (response.status === 401) {
                alert("E-mail ou senha incorretos.");
            } else {
                alert("Erro ao processar requisição.");
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    // Novo handler para login com Google
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    };

    return (
        <div className="background-card">
            <div className="card-formulario">
                <h1>{title}</h1>
                <div className="inputs">
                    {title !== "Login" && (
                        <div className="input">
                            <label htmlFor="nome">Nome completo</label>
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    <div className="input">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <Button text={action} onClick={handleSubmit} />

                <div className="opcoes-login">
                    {title !== "Login" ? (
                        <p className="criar-conta">
                            já tem uma conta?
                            <span onClick={() => navigate("/login")}> Faça login </span>
                        </p>
                    ) : (
                        <p className="criar-conta">
                            não tem uma conta?
                            <span onClick={() => navigate("/cadastrar-se")}> Cadastre-se aqui </span>
                        </p>
                    )}

                    <div className="social-buttons">
                        <button className="social-btn facebook">
                            <img src={facebook} alt="Facebook" />
                        </button>

                        <button
                            className="social-btn google"
                            onClick={handleGoogleLogin}
                        >
                            <img src={google} alt="Google" />
                        </button>

                        <button className="social-btn apple">
                            <img src={apple} alt="Apple" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCadastro;