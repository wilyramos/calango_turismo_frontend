import Hospedajes from '../components/Hospedajes';
import Restaurantes from '../components/Restaurantes';

export default function Hospedajesygastronomia() {


  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-light text-center mb-6 text-gray-800">Hospedajes y Restaurantes</h1>

      <div className="space-y-12">
        {/* Sección de Hospedajes */}
        <Hospedajes />

        {/* Sección de Restaurantes */}

        <Restaurantes />
        
      </div>
    </div>
  );
}
