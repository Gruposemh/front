import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBlog } from '../../../contexts/BlogContext';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import '../../../styles/Blog/noticia-completa/style.css';

const PageNoticiaCompleta = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { buscarNoticiaPorId, adicionarComentario } = useBlog();
  const [novoComentario, setNovoComentario] = useState('');
  const [mostrarFormComentario, setMostrarFormComentario] = useState(false);
  
  const noticia = buscarNoticiaPorId(id);

  if (!noticia) {
    return (
      <div className="noticia-nao-encontrada">
        <h2>Notícia não encontrada</h2>
        <button onClick={() => navigate('/blog')} className="btn-voltar">
          Voltar ao Blog
        </button>
      </div>
    );
  }

  // Extrair data e hora
  const partes = noticia.dataHora.split(' às ');
  const dataCompleta = partes[0] || noticia.dataHora;
  const horaCompleta = partes[1] || '';

  const handleAdicionarComentario = (e) => {
    e.preventDefault();
    
    if (!novoComentario.trim()) {
      alert('Por favor, escreva um comentário!');
      return;
    }

    adicionarComentario(id, {
      texto: novoComentario,
    });

    setNovoComentario('');
    setMostrarFormComentario(false);
    alert('Comentário adicionado com sucesso!');
  };

  const comentarios = noticia.comentarios || [];

  return (
    <div className="page-noticia-completa">
      <div className="noticia-header">
        <button onClick={() => navigate('/blog')} className="btn-voltar-header">
          <ArrowLeft size={20} />
          Voltar
        </button>
      </div>

      <div className="noticia-container">
        <h1 className="noticia-titulo">{noticia.titulo}</h1>
        
        <div className="noticia-meta">
          <span className="meta-item">
            <Calendar size={18} />
            {dataCompleta}
          </span>
          <span className="meta-item">
            <Clock size={18} />
            {horaCompleta}
          </span>
        </div>

        <div className="noticia-imagem-wrapper">
          <img 
            src={noticia.imagem} 
            alt={noticia.titulo} 
            className="noticia-imagem-principal"
          />
        </div>

        <div className="noticia-conteudo">
          <p>{noticia.conteudo}</p>
        </div>

        <div className="noticia-comentarios">
          <h3>Comentários ({comentarios.length})</h3>
          
          {comentarios.length === 0 ? (
            <p className="sem-comentarios">Seja o primeiro a comentar!</p>
          ) : (
            comentarios.map((comentario) => (
              <div key={comentario.id} className="comentario">
                <div className="comentario-avatar">
                  <span>{comentario.autor.charAt(0).toUpperCase()}</span>
                </div>
                <div className="comentario-conteudo">
                  <p className="comentario-autor">{comentario.autor}</p>
                  <p className="comentario-data">{comentario.dataHora}</p>
                  <p className="comentario-texto">{comentario.texto}</p>
                </div>
              </div>
            ))
          )}

          {!mostrarFormComentario ? (
            <button 
              className="btn-adicionar-comentario" 
              onClick={() => setMostrarFormComentario(true)}
            >
              Adicionar comentário
            </button>
          ) : (
            <form className="form-comentario" onSubmit={handleAdicionarComentario}>
              <textarea
                placeholder="Escreva seu comentário aqui..."
                value={novoComentario}
                onChange={(e) => setNovoComentario(e.target.value)}
                rows={4}
                required
              />
              <div className="form-comentario-actions">
                <button 
                  type="button" 
                  className="btn-cancelar-comentario"
                  onClick={() => {
                    setMostrarFormComentario(false);
                    setNovoComentario('');
                  }}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-enviar-comentario">
                  Enviar comentário
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageNoticiaCompleta;
