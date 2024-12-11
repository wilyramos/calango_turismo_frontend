import Categorias from '../components/Categorias';
import DestinosPrincipales from '../components/DestinosPrincipales';

export default function Explora() {
    return (
        <section className="py-16 bg-gray-50 mt-10">
            <div className="container mx-auto text-center">

                {/* Destinos principales */}

                <DestinosPrincipales />
                

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
