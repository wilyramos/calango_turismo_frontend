import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [cargando, setCargando] = useState(true);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token_visit_calango');

            if (!token) {
                setCargando(false);
                setAuth({}); // Si no hay token, limpiar el state de auth
                return;
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }

            // console.log("Token enviado:", token); // Enviar el token al backend para verificar la autenticación

            try {
                // console.log("Enviando petición al backend para autenticar...");
                const { data } = await clienteAxios('/api/usuarios/perfil', config);
                // console.log("Respuesta del backend:", data); // Log de la respuesta

                setAuth(data); // Poner el usuario en el state de auth
            } catch (error) {
                console.error("Error al autenticar:", error.response?.data?.msg || error.message);
                setAuth({}); // Si hay un error, limpiar el state de auth
            } finally {
                setCargando(false);
            }
        }
        autenticarUsuario();
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem('token_visit_calango');
        setAuth({});
    }

    const actualizarPerfil = async datos => {
        const token = localStorage.getItem('token_visit_calango');
        if (!token) {
            setCargando(false);
            return;
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const url = `/api/usuarios/perfil/${datos._id}`;
            const { data } = await clienteAxios.put(url, datos, config);

            setAuth(data); // Poner el usuario actualizado en el state de auth

            console.log(data);
        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesion,
                actualizarPerfil
            }}
        >
            {children}
        </AuthContext.Provider>
    )

};

export { AuthProvider }
export default AuthContext;