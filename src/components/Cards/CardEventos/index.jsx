import React from "react";
import "../../../styles/Cards/CardEventos/style.css"
import Button from "../../Button"
import teste from "../../../assets/Eventos/teste.png"
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Card = ({img, titulo, local, data}) => {
    return (
        <>
        <div className="card-container">
            <img src={teste} />
            <div className="card-info">
                <h1>Evento de Natal</h1>
                    <div className="endereco">
                        <p>
                            <FaMapMarkerAlt style={{ marginRight: "8px" }} />
                            São Mateus, Zona Leste, SP</p>
                        <p> 
                            <FaCalendarAlt style={{ marginRight: "8px" }} />
                            20/12/2025</p>
                    </div>
                <Button text={"Saiba mais"}/>
            </div>
        </div>
        </>
    )
}

export default Card;