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

// Páginas de usuario logeado
import Perfil from "./pages/Perfil";
// import Preferencias from "./pages/Preferencias";

// Páginas de administrador

import RutaProtegidaAdmin from "./layout/RutaProtegida";
import AdminLugares from "./pages/admin/AdminLugares";
import AdminUsuarios from "./pages/admin/AdminUsuarios";



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
                     
                     {/* Rutas de usuario */}
                     <Route path="/perfil" element={<Perfil />} />
                     {/* <Route path="/preferencias" element={<Preferencias />} /> */}


                     {/* Rutas de administrador */}
                     <Route path="/admin" element={<RutaProtegidaAdmin />}>
                        
                        <Route path="lugares" element={<AdminLugares />} />
                        <Route path="usuarios" element={<AdminUsuarios />} />

                     </Route>

                  </Routes>
                  <FooterSection />
               </PlacesProvider> {/* Cerramos PlacesProvider */}
            </AuthProvider>
         </Router>
      </div>
   );
}
