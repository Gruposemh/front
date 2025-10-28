import React, { createContext, useState, useContext, useEffect } from 'react';

const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [noticias, setNoticias] = useState(() => {
    // Carregar notícias do localStorage
    const saved = localStorage.getItem('blog_noticias');
    return saved ? JSON.parse(saved) : [];
  });

  // Salvar notícias no localStorage sempre que mudarem
  useEffect(() => {
    localStorage.setItem('blog_noticias', JSON.stringify(noticias));
  }, [noticias]);

  const adicionarNoticia = (noticia) => {
    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    const horaFormatada = agora.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
    
    const novaNoticia = {
      ...noticia,
      id: Date.now().toString(),
      dataHora: `${dataFormatada} às ${horaFormatada}`,
      comentarios: [],
    };
    setNoticias([novaNoticia, ...noticias]);
    return novaNoticia.id;
  };

  const buscarNoticiaPorId = (id) => {
    return noticias.find((noticia) => noticia.id === id);
  };

  const removerNoticia = (id) => {
    setNoticias(noticias.filter((noticia) => noticia.id !== id));
  };

  const adicionarComentario = (noticiaId, comentario) => {
    setNoticias(noticias.map((noticia) => {
      if (noticia.id === noticiaId) {
        const agora = new Date();
        const dataFormatada = agora.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        });
        const horaFormatada = agora.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        });
        
        const novoComentario = {
          id: Date.now().toString(),
          autor: comentario.autor || 'Usuário logado',
          texto: comentario.texto,
          dataHora: `${dataFormatada} às ${horaFormatada}`,
        };
        return {
          ...noticia,
          comentarios: [...(noticia.comentarios || []), novoComentario],
        };
      }
      return noticia;
    }));
  };

  return (
    <BlogContext.Provider
      value={{
        noticias,
        adicionarNoticia,
        buscarNoticiaPorId,
        removerNoticia,
        adicionarComentario,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
