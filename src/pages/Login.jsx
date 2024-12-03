import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({});
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const { msg } = alerta;

  const handleSubmit = async e => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setAlerta({ tipo: 'error', msg: 'Todos los campos son obligatorios' });
      return;
    }

    if (password.length < 6) {
      setAlerta({ tipo: 'error', msg: 'La contraseña debe tener al menos 6 caracteres' });
      return;
    }

    try {
      const { data } = await clienteAxios.post('/api/usuarios/login', { email, password });

      localStorage.setItem('token_visit_calango', data.token);
      setAuth(data);

      if (data.role === 'admin') {
        navigate('/admin/lugares');
        return;
      } else {
        navigate('/');
      }

      setAlerta({ tipo: 'success', msg: 'Inicio de sesión exitoso' });
    } catch (error) {
      setAlerta({ tipo: 'error', msg: error.response.data.msg });
    }
  };

  return (
    <div className="flex items-center justify-center bg-green-100 min-h-screen">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Iniciar sesión</h2>
        {msg && <Alerta alerta={alerta} />}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              required
              className="block w-full border border-green-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 p-3"
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
              className="block w-full border border-green-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 p-3"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            ¿No tienes una cuenta?{' '}
            <Link to="/registrar" className="text-green-600 hover:underline font-bold">
              Regístrate.
            </Link>
          </p>
          <p className="text-sm text-gray-700 mt-2">
            <Link to="/olvide-password" className="text-green-600 hover:underline font-bold">
              ¿Olvidaste tu contraseña?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
