import Header from "../components/Header";
import Categorias from "../components/Categorias";



export default function Home() {
    return (
        <>
          <Header />
            <div className="p-6 max-w-screen-lg mx-auto">
                <h2 className="text-3xl font-bold text-center text-green-600">Encuentra tu siguiente parada</h2>
                <p className="mt-4 text-gray-700 text-center">Descubre un turismo personalizado recomendado para ti.</p>
                <Categorias />
            </div>
        </>
    );
};


