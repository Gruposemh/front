import React from "react";
import "../../../styles/Blog/adicionar-noticia/style.css"
import IconUpload from "../../../assets/Blog/upload.svg"
import Button from "../../Button";
const AdicionarNoticia = () => {
    return(
        <>
        <div className="container-form-noticia">
            <div className="content-form-noticia">
                <h2>Escreva uma notícia para agregar na nossa comunidade</h2>
                
                <form className="form-noticia">
                    
                    <input type="file" id="uploadImage" name="image" accept="image/*" placeholder={`${IconUpload} Faça o upload da capa ou arraste o arquivo`}/>

                    <label htmlFor="titulo" className="label-noticia">Título</label> 
                    <input type="text" id="titulo" name="titulo" className="input-noticia" placeholder="Insira o título da sua notícia aqui"/>

                    <label htmlFor="noticia" className="label-noticia">Notícia</label> 
                    <textarea
  id="noticia"
  name="noticia"
  className="input-noticia"
  placeholder="Escreva sua notícia aqui"
  
/>

                    <Button type="submit" text="Enviar notícia"/>
                </form>
            </div>
            
        </div>
        </>
    )
}
export default AdicionarNoticia;