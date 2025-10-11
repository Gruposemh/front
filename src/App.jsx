import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Cadastro from "./pages/Cadastro";
import ComoAjudar from "./pages/ComoAjudar";
import Login from "./pages/Login";
import Tarefas from './pages/Tarefas';
import TornarVoluntario from "./pages/TornarVoluntario";
import SobreNos from "./pages/SobreNos";
import Blog from "./pages/Blog";
import AdicionarNoticia from "./pages/AdicionarNoticia";

const App = () => {
  return (
    <Routes>
      {/* Sempre começa na tela de login */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar-se" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/como-ajudar" element={<ComoAjudar />} />
      <Route path="/sobre" element={<SobreNos />} />
      <Route path="/tarefas" element={<Tarefas />} />
      <Route path="/voluntario" element={<TornarVoluntario />} />
      <Route path="/quero-ser-voluntario" element={<TornarVoluntario />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/adicionar-noticia" element={<AdicionarNoticia />} />
    </Routes>
  );
}

export default App;
