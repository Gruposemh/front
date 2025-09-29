import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Eventos/>}/>
       {/*  <Route path="/" element={<Cadastro/>}/>
        <Route path="/" element={<ComoAjudar/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<SobreNos/>}/>
        <Route path='/*'element={ <NotFound/> }/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;