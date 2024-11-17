import Alerta from "../components/Alerta"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import clienteAxios from "../config/axios"


export default function ConfirmarCuenta() {

    const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
    const [alerta, setAlerta] = useState({})
    const [cargando, setCargando] = useState(true)

    const params = useParams()
    const { id } = params

    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const url = `/api/usuarios/confirmar/${id}`
                const { data } = await clienteAxios(url)
                setCuentaConfirmada(true)
                setAlerta({ tipo: 'success', msg: data.msg }); // Usando 'msg'

            } catch (error) {
                console.log(error.response.data)
                setAlerta({ tipo: 'error', msg: error.response.data?.msg || "Error desconocido" });
            }
            setCargando(false)
        }
        confirmarCuenta()
    }, [])


    return (

        <>
            <div> 
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-4 border-x-4 p-6 border-blue-300">Confirma tu Cuenta</h1>
            </div>

            <div className="flex items-center justify-center p-6 bg-gray-100">
                <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6">
                    {cargando && <p className="text-center">Cargando...</p>}
                    <Alerta alerta={alerta} />
                    {cuentaConfirmada && <Link to="/login" className="text-blue-600 hover:underline font-bold">Inicia Sesión</Link>}
                </div>
                
                
            </div>

        </>

    )
}
