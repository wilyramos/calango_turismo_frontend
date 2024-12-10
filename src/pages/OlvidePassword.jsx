import { Link } from 'react-router-dom';
import { useState } from 'react';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

export default function OlvidePassword() {

  const [ email, setEmail ] = useState('');
  const [ alerta, setAlerta ] = useState({});

  const {msg} = alerta;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email.trim() === '') {
      setAlerta({ tipo: 'error', msg: 'El email es obligatorio' });
      return;
    }

    try {
          await clienteAxios.post('/api/usuarios/olvide-password', { email });
          setAlerta({ tipo: 'success', msg: "Hemos enviado las intrucciones a tu email" });
      } catch (error) {
          setAlerta({ tipo: 'error', msg: error.response.data.msg });
    }
  }

  return (

    <>
    <div className="flex items-center justify-center p-6 bg-gray-100">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Ingresa tu email</h2>
        <form 
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          {msg && <Alerta alerta={alerta} />}
          <div>
            <input
              type="email"
              id="email"
              required
              className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Enviar
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
          ¿Recuerdas tu contraseña? {' '}
            <Link to="/login" className="text-blue-600 hover:underline font-bold">
              Inicia sesión.
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>    
  )
}
