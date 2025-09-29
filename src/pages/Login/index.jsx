import React from "react";
import CapaCadastro from "../../components/Cadastro/Capa-cadastro"
import capa from "../../assets/Login/capa-login.png"

export default function Login(){
    return(
        <>
            <CapaCadastro title={"Você faz parte dese movimento"} img={capa}/>
        </>
    )
}