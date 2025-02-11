import Header from "../components/Header";
import Categorias from "../components/Categorias";
import DestinosPrincipales from "../components/DestinosPrincipales";



export default function Home() {
    return (
        <>
          <Header />
          <DestinosPrincipales />
            <div className="p-6 max-w-screen-lg mx-auto">
                <h2 className="text-3xl font-bold text-center text-green-600">Encuentra tu siguiente parada</h2>
                <p className="mt-4 text-gray-700 text-center">Descubre el turismo en calango recomendado para ti.</p>
                <Categorias />
            </div>
            
        </>
    );
};


