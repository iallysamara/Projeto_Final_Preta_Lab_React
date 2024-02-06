import Footer from "./components/Footer/Footer.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Home from "./pages/Home/Home.jsx";
import Contato from "./pages/Contato/Contato.jsx";
import Comentarios from "./pages/Comentarios/Comentarios.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
    
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/sobre" element={<Sobre /> }/>
        <Route path="/comentarios" element={<Comentarios /> } />
        <Route path="/contato" element={<Contato /> } />
      </Routes>
      <Footer />
</div>
  
  )
}

export default App
