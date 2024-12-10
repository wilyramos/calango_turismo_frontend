// Componentes comunes
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";

// Context

import { AuthProvider } from "./context/AuthProvider";
import { PlacesProvider } from "./context/PlacesProvider";

// React Router
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Páginas principales (públicas)
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import OlvidePassword from "./pages/OlvidePassword";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import NuevoPassword from "./pages/NuevoPassword";

// Páginas principales de contenido
import Explora from "./pages/Explora";
import Hospedajesygastronomia from "./pages/hospedajesygastronomia";
import Experiencias from "./pages/Experiencias";

import Restaurantes from "./pages/Restaurantes";
import ActividadesEventos from "./pages/ActividadesEventos";

// Páginas de usuario logeado
import Perfil from "./pages/Perfil";
// import Preferencias from "./pages/Preferencias";

// Páginas de administrador
import AdminDashboard from "./pages/admin/AdminDashboard";
import RutaProtegidaAdmin from "./layout/RutaProtegida";
import AdminHospedajes from "./pages/admin/AdminHospedajes";
import AdminActividadesEventos from "./pages/admin/AdminActividadesEventos";
import AdminRestaurantes from "./pages/admin/AdminRestaurantes";
import AdminLugares from "./pages/admin/AdminLugares";



export default function App() {
   return (
      <div className="App">
         <Router>
            <AuthProvider>
               <PlacesProvider> {/* Envolvemos con PlacesProvider */}
                  <Navbar />
                  <Routes>

                     {/* Rutas públicas */}
                     <Route path="/" element={<Home />} />
                     <Route path="*" element={<div className="p-20">Not Found</div>} />
                     <Route path="/login" element={<Login />} />
                     <Route path="/registrar" element={<Registrar />} />
                     <Route path="/olvide-password" element={<OlvidePassword />} />
                     <Route path="/olvide-password/:token" element={<NuevoPassword />} />
                     <Route path="/confirmar/:id" element={<ConfirmarCuenta />} />

                     {/* Rutas de contenido principal */}
                     <Route path="/explora" element={<Explora />} />
                     <Route path="/hospedajesygastronomia" element={<Hospedajesygastronomia />} />
                     <Route path="/experiencias" element={<Experiencias />} />
                     
                     <Route path="/hospedajes/:id" element={<div>Detalle Hospedaje</div>} />
                     <Route path="/restaurantes" element={<Restaurantes />} />
                     <Route path="/restaurantes/:id" element={<div>Detalle Restaurante</div>} />
                     <Route path="/actividades-eventos" element={<ActividadesEventos />} />
                     <Route path="/actividades-eventos/:id" element={<div>Detalle Actividad/Evento</div>} />

                     {/* Rutas de usuario */}
                     <Route path="/perfil" element={<Perfil />} />
                     {/* <Route path="/preferencias" element={<Preferencias />} /> */}

                     
                     {/* Rutas de administrador */}
                     <Route path="/admin" element={<RutaProtegidaAdmin />}>
                        <Route path="hospedajes" element={<AdminHospedajes />} />
                        <Route path="actividades-eventos" element={<AdminActividadesEventos />} />
                        <Route path="restaurantes" element={<AdminRestaurantes />} />
                        <Route path="lugares" element={<AdminLugares />} />

                     </Route>

                  </Routes>
                  <FooterSection />
               </PlacesProvider> {/* Cerramos PlacesProvider */}
            </AuthProvider>
         </Router>
      </div>
   );
}
