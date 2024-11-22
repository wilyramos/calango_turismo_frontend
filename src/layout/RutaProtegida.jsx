import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


import HeaderAdmin from "../layout/HeaderAdmin";
import AdminDashboard from "../pages/admin/AdminDashboard";



export default function RutaProtegidaAdmin() {

    // console.log("RutaProtegidaAdmin: Renderizando el componente");

    const { auth, cargando } = useAuth()

    // console.log(auth)

    // Mostrar un mensaje o spinner mientras se carga el estado de autenticación
    if (cargando) {
        // console.log("Cargando autenticación...");

        return <div>Cargando...</div>;
    }
    // Si no hay usuario autenticado, redirigir al login
    if (!auth || !auth._id) {
        // console.log("Usuario no autenticado, redirigiendo al login...");
        return <Navigate to="/login" />;
    }

    // Si el rol no es admin, redirigir al inicio
    if (auth.role !== "admin") {
        // console.log("Usuario sin rol de admin, redirigiendo al inicio...");
        return <Navigate to="/" />;
    }

    // console.log("Usuario autenticado como admin:", auth);

    return (
        <>  
            <HeaderAdmin /> 
            <AdminDashboard />      
            <Outlet />
        </>
    )  
}