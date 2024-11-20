// Componentes comunes
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";

// Context
import { AuthProvider } from "./context/authProvider";

// React Router
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Páginas principales (públicas)
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import OlvidePassword from "./pages/OlvidePassword";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import NuevoPassword from "./pages/NuevoPassword";

// Páginas principales de contenido
import DondeIr from "./pages/DondeIr";
import Hospedajes from "./pages/Hospedajes";
import Restaurantes from "./pages/Restaurantes";
import ActividadesEventos from "./pages/ActividadesEventos";

// Páginas de usuario logeado
import Perfil from "./pages/Perfil";
import Preferencias from "./pages/Preferencias";
import Recomendations from "./pages/Recomendations";

// Páginas de administrador
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminHospedajes from "./pages/admin/AdminHospedajes";
import AdminActividadesEventos from "./pages/admin/AdminActividadesEventos";
import AdminRestaurantes from "./pages/admin/AdminRestaurantes";

export default function App() {
   return (
      <div className="App">
         <Router>
            <AuthProvider>
               <Navbar />
               <Routes>

                  {/* Rutas públicas */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<div className="p-20">Not Found</div>} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registrar" element={<Registrar />} />
                  <Route path="/olvide-password" element={<OlvidePassword />} />
                  <Route path="/olvide-password/:token" element={<NuevoPassword />} />
                  <Route path="/confirmar/:id" element={<ConfirmarCuenta />} />

                  {/* Rutas de contenido principal */}
                  <Route path="/donde-ir" element={<DondeIr />} />
                  <Route path="/hospedajes" element={<Hospedajes />} />
                  <Route path="/hospedajes/:id" element={<div>Detalle Hospedaje</div>} />
                  <Route path="/restaurantes" element={<Restaurantes />} />
                  <Route path="/restaurantes/:id" element={<div>Detalle Restaurante</div>} />
                  <Route path="/actividades-eventos" element={<ActividadesEventos />} />
                  <Route path="/actividades-eventos/:id" element={<div>Detalle Actividad/Evento</div>} />

                  {/* Rutas de usuario */}
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path="/preferencias" element={<Preferencias />} />
                  <Route path="/recomendaciones" element={<Recomendations />} />
                  <Route path="/guardadas" element={<Recomendations />} />

                  {/* Rutas de administrador */}
                  <Route path="/admin" element={<AdminDashboard />}>
                     <Route path="hospedajes" element={<AdminHospedajes />} />
                     <Route path="actividades-eventos" element={<AdminActividadesEventos />} />
                     <Route path="restaurantes" element={<AdminRestaurantes />} />
                  </Route>

               </Routes>
               <FooterSection />
            </AuthProvider>
         </Router>
      </div>
   );
}
