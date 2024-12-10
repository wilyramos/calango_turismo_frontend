import { useState } from 'react';
import { FaMapMarkedAlt, FaCalendarAlt, FaRunning } from 'react-icons/fa';

export default function Experiencias() {
    const experiencias = {
        tours: [
            {
                titulo: 'Tour por el centro histórico',
                descripcion: 'Recorre el corazón de la ciudad con un guía experto y descubre su historia.',
                imagen: '/images/tour.jpg'
            },
            {
                titulo: 'Tour por las playas',
                descripcion: 'Disfruta de un día en las mejores playas de la región.',
                imagen: '/images/playa.jpg'
            }
        ],
        eventos: [
            {
                titulo: 'Festival de Música Local',
                descripcion: 'Disfruta de lo mejor de la música local en un evento lleno de energía y talento.',
                imagen: '/images/festival.jpg'
            },
            {
                titulo: 'Concierto Internacional',
                descripcion: 'Un evento musical con artistas internacionales en el mejor escenario.',
                imagen: '/images/concierto.jpg'
            }
        ],
        actividades: [
            {
                titulo: 'Clase de Cocina Tradicional',
                descripcion: 'Aprende a cocinar platos típicos de la región con chefs locales.',
                imagen: '/images/cocina.jpg'
            },
            {
                titulo: 'Trekking en las montañas',
                descripcion: 'Disfruta de un día de senderismo en los hermosos paisajes montañosos.',
                imagen: '/images/trekking.jpg'
            }
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('tours');

    return (
        <section className="py-16 px-4 bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 pt-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Experiencias Inolvidables</h2>

            {/* Barra de selección con iconos interactivos */}
            <div className="mb-12 flex justify-center space-x-8">
                <button
                    onClick={() => setSelectedCategory('tours')}
                    className={`flex items-center space-x-3 px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 rounded-full transform transition-all duration-300 ${selectedCategory === 'tours' ? 'bg-blue-500 text-white shadow-lg scale-105' : 'hover:bg-blue-500 hover:text-white'}`}
                >
                    <FaMapMarkedAlt className="text-xl" />
                    <span className="font-semibold">Tours</span>
                </button>
                <button
                    onClick={() => setSelectedCategory('eventos')}
                    className={`flex items-center space-x-3 px-6 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-full transform transition-all duration-300 ${selectedCategory === 'eventos' ? 'bg-green-500 text-white shadow-lg scale-105' : 'hover:bg-green-500 hover:text-white'}`}
                >
                    <FaCalendarAlt className="text-xl" />
                    <span className="font-semibold">Eventos</span>
                </button>
                <button
                    onClick={() => setSelectedCategory('actividades')}
                    className={`flex items-center space-x-3 px-6 py-3 bg-transparent border-2 border-red-500 text-red-500 rounded-full transform transition-all duration-300 ${selectedCategory === 'actividades' ? 'bg-red-500 text-white shadow-lg scale-105' : 'hover:bg-red-500 hover:text-white'}`}
                >
                    <FaRunning className="text-xl" />
                    <span className="font-semibold">Actividades</span>
                </button>
            </div>

            {/* Sección con 3 columnas para Tours, Eventos y Actividades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {experiencias[selectedCategory].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                        <img
                            src={item.imagen}
                            alt={item.titulo}
                            className="w-full h-64 object-cover rounded-t-xl"
                        />
                        <div className="p-6">
                            <h4 className="text-2xl font-semibold text-gray-800 mb-3">{item.titulo}</h4>
                            <p className="text-sm text-gray-600 mb-4">{item.descripcion}</p>
                            <button className="w-full py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg hover:from-blue-500 hover:to-blue-600 transition-colors">
                                Más información
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
