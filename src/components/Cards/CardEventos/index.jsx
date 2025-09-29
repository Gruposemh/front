import React from "react";
import "../../../styles/Cards/CardEventos/style.css"
import Button from "../../Button"

import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const CardEventos = ({img, titulo, local, data}) => {
    return (
        <>
        <div className="card-container">
            <img src={img} />
            <div className="card-info">
                <h2>{titulo}</h2>
                    <div className="endereco">
                        <p>
                            <FaMapMarkerAlt style={{ marginRight: "8px" }} />{local}</p>
                        <p> 
                            <FaCalendarAlt style={{ marginRight: "8px" }} />
                            {data}</p>
                    </div>
                <Button text={"Saiba mais"}/>
            </div>
        </div>
        </>
    )
}

export default CardEventos;