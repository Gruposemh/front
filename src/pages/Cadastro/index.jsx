import React from "react";
import CapaCadastro from "../../components/Cadastro/Capa-cadastro"
import capa from "../../assets/Cadastro/capa-cadastro.png"

export default function Cadastro(){
    return(
        <>
            <CapaCadastro title={"Quem ajuda transforma vidas"} img={capa}/>
        </>
    )
}