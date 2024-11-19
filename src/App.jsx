import FooterSection from "./components/FooterSection"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

import { AuthProvider } from "./context/authProvider"
import Recomendations from "./pages/Recomendations"
import Registrar from "./pages/Registrar"
import OlvidePassword from "./pages/OlvidePassword"
import ConfirmarCuenta from "./pages/ConfirmarCuenta"
import NuevoPassword from "./pages/NuevoPassword"




export default function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>Not Found</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/olvide-password" element={< OlvidePassword />} />
            <Route path="/olvide-password/:token" element={<NuevoPassword />} />
            <Route path="/confirmar/:id" element={<ConfirmarCuenta />} />

            <Route path="/categories" element={<Recomendations />} />
            <Route path="/saved" element={<Recomendations />} />

            <Route path="/admin" element={<div>Admin Dashboard</div>}>
              <Route path="dashboard" element={<div>Dashboard</div>} />
            </Route>
          </Routes>

          <FooterSection />
        </AuthProvider>
      </Router>



    </div>
  )
}
