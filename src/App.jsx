import NavBar from "./componets/NavBar"
import { Routes,Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Contacto from "./pages/Contacto"
import UseState from "./pages/proyectos/UseState"
import UseEffect from "./pages/proyectos/UseEffect"
const App = () => {
  return (
  <>
    <NavBar />
    <div className="container mt-3 bg-light ">
    <Routes>
     <Route path="/" element={<Inicio/>}/>
     <Route path="/Contacto" element={<Contacto/>}/>
     <Route path="/useState" element={<UseState/>}/>
     <Route path="/useEffect" element={<UseEffect/>}/>
    </Routes>
    </div>
  </>
  )
}

export default App