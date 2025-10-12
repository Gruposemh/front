import React, { useState } from "react";
import "../../../styles/Blog/adicionar-noticia/style.css";
import IconUpload from "../../../assets/Blog/upload.svg";
import { X, Check } from "lucide-react";
import Button from "../../Button";

const AdicionarNoticia = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  const confirmImage = () => {
    // aqui você poderia enviar a imagem para o backend ou apenas confirmar a seleção
    alert("Imagem confirmada!");
  };

  return (
    <div className="container-form-noticia">
      <div className="content-form-noticia">
        <h2>Escreva uma notícia para agregar na nossa comunidade</h2>

        <form className="form-noticia">
          <label htmlFor="uploadImage" className="upload-label">
            {imagePreview ? (
              <div className="preview-wrapper">
                <img src={imagePreview} alt="Prévia da imagem" className="preview-image" />
                <div className="image-actions">
                  <button type="button" className="action-btn" onClick={removeImage}>
                    <X size={24} color="#fff" />
                  </button>
                  <button type="button" className="action-btn" onClick={confirmImage}>
                    <Check size={24} color="#fff" />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img id="iconUpload"src={IconUpload} alt="Upload" />
                <span>Faça o upload da capa ou arraste o arquivo</span>
              </>
            )}
          </label>

          <input
            type="file"
            id="uploadImage"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />

          <label htmlFor="titulo" className="label-noticia">Título</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            className="input-noticia"
            placeholder="Insira o título da sua notícia aqui"
          />

          <label htmlFor="noticia" className="label-noticia">Notícia</label>
          <textarea
            id="noticia"
            name="noticia"
            className="input-noticia"
            placeholder="Escreva sua notícia aqui"
          />

          <Button type="submit" text="Enviar notícia" />
        </form>
      </div>
    </div>
  );
};

export default AdicionarNoticia;
