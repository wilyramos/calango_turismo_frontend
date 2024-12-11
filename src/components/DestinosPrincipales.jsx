import React from "react";
import usePlaces from "../hooks/usePlaces";

export default function DestinosPrincipales() {
    const { places } = usePlaces();

    // Seleccionar los primeros tres destinos de la base de datos
    const destinos = places.slice(0, 3).map((place) => ({
        id: place._id,
        titulo: place.name,
        descripcion: place.description,
        imagen: place.images && place.images.length > 0 ? place.images[0] : "https://via.placeholder.com/600x400",
    }));

    return (
        <div className="max-w-screen-lg mx-auto p-6">
            <h2 className="text-xl font-bold text-center text-gray-900 mb-2">Destinos Principales</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                {destinos.map((destino, index) => (
                    <div
                        key={destino.id}
                        className={`relative rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                    >
                        <img
                            src={destino.imagen}
                            alt={destino.titulo}
                            className="w-full h-60 object-cover sm:h-80 lg:h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-3">
                            <h3 className="text-2xl text-white mb-1">{destino.titulo}</h3>
                            <p className="text-sm text-gray-200 mb-4 hidden lg:block">{destino.descripcion}</p>
                            <button class=" text-white font-light rounded hover:text-gray-300 transition">
                                Ver más
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
