import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";


export default function NuevoPassword() {

    const [ password, setPassword ] = useState('');
    const [ alerta, setAlerta ] = useState({});
    const [ tokenValido, setTokenValido ] = useState(false);

    const params = useParams();
    const { token } = params;
    const { msg } = alerta;

    useEffect(() => {
        const comprobarToken = async () => {
            try {
                await clienteAxios(`/api/usuarios/olvide-password/${token}`);
                setAlerta({ tipo: 'success', msg: 'Token valido' });
                setTokenValido(true);
            } catch (error) {
                setAlerta({ tipo: 'error', msg: error.response.data.msg });
            }
        }
        comprobarToken();
    }, []);

    return (
        <>
            <div className="flex items-center justify-center p-6 bg-gray-100">
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-4 border-x-4 p-6 border-blue-300">Reestablece tu Contraseña</h1>
            </div>
    
            <div className="flex items-center justify-center bg-gray-100">
                {/* Contenedor común para la alerta y el formulario */}
                <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6 space-y-4">
                    {/* Mostrar la alerta si hay mensaje */}
                    {msg && <Alerta alerta={alerta} />}
    
                    {/* Mostrar el formulario solo si el token es válido */}
                    {tokenValido && (
                        <form className="space-y-4">
                            <div className="my-5">
                                <label className="block text-sm font-medium text-gray-700 p-2">Nueva Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    required
                                    className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                    placeholder="Nueva Contraseña"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />   

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200 mt-4"
                                >
                                    Cambiar Contraseña
                                </button>
                            </div>
                            
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}
    
    