import Header from "../components/Header";
import Categorias from "../components/Categorias";



export default function Home() {
    return (
        <>
          <Header />
            <div className="mx-auto px-2 p-16">
                <h2 className="text-3xl font-bold text-center text-green-600">Encuentra tu siguiente aventura</h2>
                <p className="mt-4 text-gray-700 text-center">Descubre un turismo personalizado recomendado para ti.</p>
                <Categorias />
            </div>
        </>
    );
};


