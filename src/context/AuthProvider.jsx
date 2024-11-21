import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [ cargando, setCargando ] = useState(true);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token_visit_calango');

            if(!token) {
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
                const { data } = await clienteAxios('/api/usuarios/perfil', config);

                setAuth(data); // Poner el usuario en el state de auth
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({}); // Si hay un error, limpiar el state de auth
            }
            setCargando(false); 
        }
        autenticarUsuario();
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem('token_visit_calango');
        setAuth({});
    }

    const actualizarPerfil = async datos => {
        const token = localStorage.getItem('token_visit_calango');
        if(!token){
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

    const esAdmin = () => {
        return auth.role === 'admin';
    }


    
    return(
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

export { AuthProvider}
export default AuthContext;