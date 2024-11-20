import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';


export default function Login() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ alerta, setAlerta ] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const { msg } = alerta;

  const handleSubmit = async e => {
    e.preventDefault()

    if(email.trim() === '' || password.trim() === '') {
      setAlerta({ tipo: 'error', msg: 'Todos los campos son obligatorios' })
      return
    }

    if(password.length < 6) {
      setAlerta({ tipo: 'error', msg: 'La contraseña debe tener al menos 6 caracteres' })
      return
    }

    try {
      const { data } = await clienteAxios.post('/api/usuarios/login', { email, password});

      localStorage.setItem('token_visit_calango', data.token);
      setAuth(data);
      
      navigate('/saved'); // Redirect to saved page
      setAlerta({ tipo: 'success', msg: 'Inicio de sesión exitoso' }) // Show success message
    } catch (error) {

      setAlerta({ tipo: 'error', msg: error.response.data.msg })
    }

  }

  return (
    <div className="flex items-center justify-center bg-gray-100 p-16">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Login</h2>
        {
          msg && <Alerta alerta={alerta}/>
        }
        <form 
          onSubmit={handleSubmit}        
          className="space-y-4"
        >
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
          <div>
            <input
              type="password"
              id="password"
              required
              className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
          ¿No tiene una cuenta? {' '}
            <Link to="/registrar" className="text-blue-600 hover:underline font-bold">
              Crea una.
            </Link>
          </p>

          <p className="text-sm text-gray-600 mt-2">
            <Link to="/olvide-password" className="text-blue-600 hover:underline font-bold">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
