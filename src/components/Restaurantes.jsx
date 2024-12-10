import { FaMapMarkerAlt, FaClock, FaUtensils } from 'react-icons/fa';

export default function Restaurantes() {
    const restaurantes = [
        {
            nombre: 'Restaurante El Mar',
            descripcion: 'Cocina de mariscos frescos con una vista espectacular al océano.',
            imagen: '/images/restaurante_mar.jpg',
            tipo: ['Mariscos', 'Pescados', 'Comida Peruana'],
            horario: ['Lunes a Domingo: 12:00 pm - 10:00 pm']
        },
        {
            nombre: 'La Cocina de Mi Abuela',
            descripcion: 'Comida tradicional local con recetas caseras y un ambiente acogedor.',
            imagen: '/images/comida.jpg',
            tipo: ['Comida Criolla', 'Menú del Día', 'Postres'],
            horario: ['Lunes a Sábado: 8:00 am - 8:00 pm']
        },
        {
            nombre: 'Bistro Gourmet',
            descripcion: 'Restaurante de alta cocina con un menú exclusivo y elegante.',
            imagen: '/images/bistro_gourmet.jpg',
            tipo: ['Café', 'Pastelería', 'Comida Gourmet'],
            horario: ['Martes a Domingo: 10:00 am - 9:00 pm']
        }
    ];

    return (
        <section className="py-8 px-4 bg-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Restaurantes</h2>

            {/* Listado de Restaurantes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurantes.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden">
                        <img
                            src={item.imagen}
                            alt={item.nombre}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900">{item.nombre}</h3>
                            <p className="text-sm text-gray-600">{item.descripcion}</p>
                            <div className="mt-2 flex items-center text-xs text-gray-500 space-x-2">
                                <FaUtensils className="text-red-500" />
                                <span>{item.tipo.join(', ')}</span>
                            </div>
                            <div className="mt-2 flex items-center text-xs text-gray-500 space-x-2">
                                <FaClock className="text-blue-500" />
                                <span>{item.horario.join(', ')}</span>
                            </div>
                            <div className="mt-2 flex items-center text-xs text-gray-500 space-x-2">
                                <FaMapMarkerAlt className="text-green-500" />
                                <span>{item.nombre}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
