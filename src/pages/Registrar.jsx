import { Link } from "react-router-dom"
import React, { useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"


export default function Registrar() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [interests, setInterests] = useState([]);
  const [budget, setBudget] = useState('')
  const [preferences, setPreferences] = useState({
    interests: [],
    budget: 0
  });
  const [alerta, setAlerta] = useState({})


  // interests array strings 
  // la funcion si funciona correctamente para añadir las preferencias del usuario
  // tanto para añadir categorias y presupuesto

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;

    const updatedInterests = checked
      ? [...interests, value]
      : interests.filter((interest) => interest !== value);

    setInterests(updatedInterests);

    // Actualizar las preferencias
    setPreferences({
      ...preferences,
      interests: updatedInterests
    });
  };

  const handleBudgetChange = (e) => {
    const updatedBudget = Number(e.target.value);
    setBudget(e.target.value);
    setPreferences({
      ...preferences,
      budget: updatedBudget
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if ([name, email, password, confirmPassword].includes('')) {
      setAlerta({ tipo: 'error', msg: 'Todos los campos son obligatorios' })
      return
    }

    console.log('validando campos')

    if ([name, email, password, confirmPassword].includes('')) {
      setAlerta({ tipo: 'error', msg: 'Todos los campos son obligatorios' })
      return
    }

    if (password !== confirmPassword) {
      setAlerta({ tipo: 'error', msg: 'Las contraseñas no coinciden' })
      return
    }

    if (password.length < 6) {
      setAlerta({ tipo: 'error', msg: 'La contraseña debe tener al menos 6 caracteres' })
      return
    }
    try {
      await clienteAxios.post('/api/usuarios', { name, email, password, preferences })
      setAlerta({ tipo: 'success', msg: 'Usuario exitoso, revisa tu email.' })
    } catch (error) {

      setAlerta({
        tipo: 'error',
        msg: error.response.data.error
      })

    }
  }
  return (
    <>
      <div className="flex items-center justify-center p-6 bg-gray-100 min-h-screen">
        <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-4 border-x-4 p-6 border-green-300">
            Crea tu cuenta
          </h2>
          <Alerta alerta={alerta} />
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-600 text-xs">Nombre:</label>
              <input
                type="text"
                id="name"
                required
                className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-gray-600 text-xs">Email:</label>
              <input
                type="email"
                id="email"
                required
                className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-600 text-xs">Contraseña:</label>
              <input
                type="password"
                id="password"
                required
                className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-600 focus:border-green-500 p-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="text-gray-600 text-xs">Confirmar contraseña:</label>
              <input
                type="password"
                id="confirmPassword"
                required
                className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 p-2"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Registrar"
              className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition duration-200"
            />
          </form>
            

            {/* Selección de intereses */}
            {/* <div className="border-x-4 p-6 border-blue-300">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Intereses</label>
                <div className="space-y-1 grid grid-cols-2">
                  <label className="block">
                    <input
                      type="checkbox"
                      value="Naturaleza"
                      checked={interests.includes('Naturaleza')}
                      onChange={handleInterestChange}
                      className="mr-2"

                    />
                    Naturaleza
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      value="Cultura"
                      checked={interests.includes('Cultura')}
                      onChange={handleInterestChange}
                      className="mr-2"
                    />
                    Cultura
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      value="Deportes"
                      checked={interests.includes('Deportes')}
                      onChange={handleInterestChange}
                      className="mr-2"
                    />
                    Deportes
                  </label>
                  <label className="block">
                    <input
                      type="checkbox"
                      value="Gastronomía"
                      checked={interests.includes('Gastronomía')}
                      onChange={handleInterestChange}
                      className="mr-2"
                    />
                    Gastronomía
                  </label>
                </div>
              </div>
              <div className="">
                <label className="block text-sm font-bold mb-2">Presupuesto</label>
                <input
                  type="number"
                  id="budget"
                  name="budget"

                  value={budget}
                  onChange={handleBudgetChange}
                  className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                  placeholder="Presupuesto"
                />

              </div>

            </div> */}


          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta? {' '}
              <Link to="/login" className="text-green-600 hover:underline font-bold">
                Inicia sesión.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
