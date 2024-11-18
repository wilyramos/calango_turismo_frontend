import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token_visit_calango');

            if(!token) return;
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
        }
        autenticarUsuario();
    }, []);

    
    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )

};

export { AuthProvider}
export default AuthContext;