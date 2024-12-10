import Categorias from '../components/Categorias';

export default function Explora() {
    return (
        <section className="py-16 bg-gray-50 mt-10">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Explora</h2>

                {/* Destinos principales */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="destino1.jpg" alt="Destino 1" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Destino 1</h3>
                            <p className="text-gray-600">Descripción corta del destino.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="destino2.jpg" alt="Destino 2" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Destino 2</h3>
                            <p className="text-gray-600">Descripción corta del destino.</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src="destino3.jpg" alt="Destino 3" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Destino 3</h3>
                            <p className="text-gray-600">Descripción corta del destino.</p>
                        </div>
                    </div>
                </div>

                {/* Categorías */}
                <Categorias />

                {/* Mapa interactivo */}
                <div className="relative">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mapa Interactivo</h3>
                    <div className="w-full h-64 bg-gray-300 rounded-lg shadow-lg">
                        {/* Aquí se integraría el mapa interactivo (puedes usar una librería como Leaflet o Google Maps) */}
                        <p className="text-center text-gray-700 mt-20">Mapa interactivo aquí</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
