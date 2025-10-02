import React from "react";
import "../../../../styles/Cards/Card-SobreNos/Card-tempo/style.css"

const Card = ({ ano, img, acontecimento, texto, invertido }) => {
    return (
        <>
            {
                invertido == false ? (
                    <div className="card-sobre-nos">
                        <div className="ano">
                            <p>{ano}</p>
                        </div>
                        <div className="info-card">
                            <div>
                                <img src={img} />
                            </div>
                            <div className="linha-card"></div>
                            <div className="titulo-acontecimento">
                                <h3>{acontecimento}</h3>
                                <p>{texto}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="card-sobre-nos">
                        <div className="ano">
                            <p>{ano}</p>
                        </div>
                        <div className="info-card">
                            <div className="titulo-acontecimento">
                                <h3>{acontecimento}</h3>
                                <p>{texto}</p>
                            </div>
                            <div className="linha-card"></div>
                            <div>
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
};

export default Card;