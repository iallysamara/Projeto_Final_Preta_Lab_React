import Menu from "./components/Menu/Menu.jsx";
import Home from "./pages/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
    
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home /> }/>
      </Routes>
</div>
  
  )
}

export default App
