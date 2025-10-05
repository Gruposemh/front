import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";

import Eventos from "./pages/Eventos";
import Cadastro from "./pages/Cadastro";
import ComoAjudar from "./pages/ComoAjudar"
import Login from "./pages/Login"
import Tarefas from './pages/Tarefas'
import TornarVoluntario from "./pages/TornarVoluntario";
import SobreNos from "./pages/SobreNos";
import Blog from "./pages/Blog";



const App = () => {
  return (
    <>

    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/eventos" element={<Eventos/>}/>
        <Route path="/cadastrar-se" element={<Cadastro/>}/>
        <Route path="/como-ajudar" element={<ComoAjudar/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sobre" element={<SobreNos/>}/>
        <Route path="/tarefas" element={<Tarefas/>}/>
        <Route path="/voluntario" element={<TornarVoluntario/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/login" element={<Login />} />  
        <Route path="/quero-ser-voluntario" element={<TornarVoluntario />} />  
       {/*  <Route path='/*'element={ <NotFound/> }/>  */}
        </Routes>
      

    </>
  )
}
export default App;