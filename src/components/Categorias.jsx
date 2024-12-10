import React, { useState } from 'react';
import { FaMountain, FaChurch, FaHistory, FaHiking } from 'react-icons/fa';

export default function Categorias() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('naturaleza');

  const categorias = {
    naturaleza: {
      descripcion: 'Explora paisajes naturales únicos como la Gruta Milagrosa y el Río de Calango, perfectos para los amantes de la naturaleza.',
      imagenes: [
        { nombre: 'La Gruta Milagrosa', imagen: '/images/gruta_milagrosa.jpg' },
        { nombre: 'Petroglifos de Cochineros', imagen: '/images/petroglifos_cochineros.jpg' },
        { nombre: 'Río y Paisajes de Calango', imagen: '/images/rio_paisajes_calango.jpg' },
      ]
    },
    cultura: {
      descripcion: 'Sumérgete en la cultura local visitando lugares como la Iglesia de Calango y el Museo Comunal de la Piedra Coyllur Sayana.',
      imagenes: [
        { nombre: 'Iglesia de Calango', imagen: '/images/iglesia_calango.jpg' },
        { nombre: 'Museo Comunal de la Piedra Coyllur Sayana', imagen: '/images/museo_comunal.jpg' },
        { nombre: 'Casona de Tutumo', imagen: '/images/casona_tutumo.jpg' },
      ]
    },
    historia: {
      descripcion: 'Descubre la historia antigua de la región con visitas a lugares arqueológicos como las Zonas Arqueológicas de Aymará y Cochahuasi.',
      imagenes: [
        { nombre: 'Aymará', imagen: '/images/aymara.jpg' },
        { nombre: 'Checas Alto', imagen: '/images/checas_alto.jpg' },
        { nombre: 'Hualina', imagen: '/images/hualina.jpg' },
        { nombre: 'Minay', imagen: '/images/minay.jpg' },
        { nombre: 'Cochahuasi', imagen: '/images/cochahuasi.jpg' },
      ]
    },
    aventuras: {
      descripcion: 'Vive una aventura inolvidable con rutas como la Ruta San Juan de Correviento o la Ruta Minay-San Juan de Checas.',
      imagenes: [
        { nombre: 'Ruta San Juan de Correviento', imagen: '/images/ruta_san_juan.jpg' },
        { nombre: 'Ruta Minay - San Juan de Checas', imagen: '/images/ruta_minay_checas.jpg' },
        { nombre: 'Ruta Calango - La Vuelta Yuncavirí', imagen: '/images/ruta_calango_yuncaviri.jpg' },
      ]
    },
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Categorías</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={() => setCategoriaSeleccionada('naturaleza')}
          className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition duration-200"
        >
          <FaMountain className="text-xl" /><span className='text-sm'>naturaleza</span>
        </button>
        <button
          onClick={() => setCategoriaSeleccionada('cultura')}
          className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 transition duration-200"
        >
          <FaChurch className="text-xl" /><span className='text-sm'>cultura</span>
        </button>
        <button
          onClick={() => setCategoriaSeleccionada('historia')}
          className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition duration-200"
        >
          <FaHistory className="text-xl" /><span className='text-sm'>historia</span>
        </button>
        <button
          onClick={() => setCategoriaSeleccionada('aventuras')}
          className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple-600 transition duration-200"
        >
          <FaHiking className="text-xl" /><span className='text-sm'>aventuras</span>
        </button>
      </div>

      {categoriaSeleccionada && (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3 p-4">
            <h2 className="text-2xl font-semibold mb-4">{categoriaSeleccionada.charAt(0).toUpperCase() + categoriaSeleccionada.slice(1)}</h2>
            <p className="text-gray-600">{categorias[categoriaSeleccionada].descripcion}</p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias[categoriaSeleccionada].imagenes.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium">{item.nombre}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
