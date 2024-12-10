import { useState } from 'react';
import { FaSwimmingPool, FaUtensils, FaBeer, FaWifi, FaCoffee, FaSun } from 'react-icons/fa';

export default function Hospedajes() {
    const hospedajes = [
        {
            nombre: 'Hotel Paraíso',
            descripcion: 'Un hotel de lujo con vista al mar, ideal para relajarse y disfrutar del paisaje.',
            precio: 'Desde 40 soles',
            servicios: ['Piscina', 'Restaurante', 'Bar'],
            imagen: '/images/comida.jpg'
        },
        {
            nombre: 'Posada La Luna',
            descripcion: 'Alojamiento rústico en el corazón de la ciudad, con un ambiente acogedor y familiar.',
            precio: 'Desde 20 soles',
            servicios: ['Wi-Fi', 'Desayuno incluido', 'Terraza'],
            imagen: '/images/comida.jpg'
        },
        {
            nombre: 'Hostal Sol y Mar',
            descripcion: 'Un hostal económico, perfecto para mochileros y viajeros que buscan comodidad y buen precio.',
            precio: 'Desde 10 soles',
            servicios: ['Cocina compartida', 'Lavandería', 'Recepción 24 horas'],
            imagen: '/images/comida.jpg'
        }
    ];

    // Estados para los filtros
    const [selectedServicios, setSelectedServicios] = useState([]);

    // Filtrar hospedajes según servicios seleccionados
    const filteredHospedajes = hospedajes.filter((hospedaje) => {
        if (selectedServicios.length === 0) return true; // Si no hay filtros seleccionados, mostrar todo
        return selectedServicios.every(servicio => hospedaje.servicios.includes(servicio));
    });

    // Función para manejar la selección de filtros
    const handleServicioFilter = (servicio) => {
        setSelectedServicios((prev) =>
            prev.includes(servicio) ? prev.filter(item => item !== servicio) : [...prev, servicio]
        );
    };

    return (
        <section className="py-8 px-4 bg-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Hospedajes</h2>

            {/* Filtros de Servicios */}
            <div className="mb-6 flex justify-center space-x-4">
                <button
                    onClick={() => handleServicioFilter('Piscina')}
                    className={`px-4 py-2 text-sm rounded-full border ${selectedServicios.includes('Piscina') ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
                >
                    <FaSwimmingPool className="mr-2" /> Piscina
                </button>
                <button
                    onClick={() => handleServicioFilter('Restaurante')}
                    className={`px-4 py-2 text-sm rounded-full border ${selectedServicios.includes('Restaurante') ? 'bg-green-500 text-white' : 'bg-white text-gray-800'}`}
                >
                    <FaUtensils className="mr-2" /> Restaurante
                </button>
                <button
                    onClick={() => handleServicioFilter('Wi-Fi')}
                    className={`px-4 py-2 text-sm rounded-full border ${selectedServicios.includes('Wi-Fi') ? 'bg-indigo-500 text-white' : 'bg-white text-gray-800'}`}
                >
                    <FaWifi className="mr-2" /> Wi-Fi
                </button>
                <button
                    onClick={() => handleServicioFilter('Desayuno incluido')}
                    className={`px-4 py-2 text-sm rounded-full border ${selectedServicios.includes('Desayuno incluido') ? 'bg-brown-500 text-white' : 'bg-white text-gray-800'}`}
                >
                    <FaCoffee className="mr-2" /> Desayuno
                </button>
                <button
                    onClick={() => handleServicioFilter('Terraza')}
                    className={`px-4 py-2 text-sm rounded-full border ${selectedServicios.includes('Terraza') ? 'bg-orange-500 text-white' : 'bg-white text-gray-800'}`}
                >
                    <FaSun className="mr-2" /> Terraza
                </button>
            </div>

            {/* Listado de Hospedajes Filtrados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHospedajes.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                        <img
                            src={item.imagen}
                            alt={item.nombre}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900">{item.nombre}</h3>
                            <p className="text-sm text-gray-600">{item.descripcion}</p>
                            <p className="text-sm font-semibold text-gray-800">{item.precio}</p>
                            <ul className="text-xs text-gray-600 mt-2 space-y-1">
                                {item.servicios.map((servicio, index) => (
                                    <li key={index} className="flex items-center">
                                        {/* Íconos de Servicios */}
                                        {servicio === 'Piscina' && <FaSwimmingPool className="text-blue-500 mr-2 text-sm" />}
                                        {servicio === 'Restaurante' && <FaUtensils className="text-green-500 mr-2 text-sm" />}
                                        {servicio === 'Bar' && <FaBeer className="text-yellow-500 mr-2 text-sm" />}
                                        {servicio === 'Wi-Fi' && <FaWifi className="text-indigo-500 mr-2 text-sm" />}
                                        {servicio === 'Desayuno incluido' && <FaCoffee className="text-brown-500 mr-2 text-sm" />}
                                        {servicio === 'Terraza' && <FaSun className="text-orange-500 mr-2 text-sm" />}
                                        <span className="text-xs">{servicio}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
