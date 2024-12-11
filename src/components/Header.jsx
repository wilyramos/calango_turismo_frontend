import React from "react";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header
            className="h-[60vh] flex items-center justify-center relative"
            style={{
                backgroundImage: `url(../images/fondoPantalla.webp)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative z-10 flex flex-col sm:flex-row w-full max-w-6xl mx-auto">
                <div className="flex-1 flex flex-col justify-center items-start text-white px-6 sm:px-8 space-y-4 sm:space-y-6">
                    <h1 className="text-3xl sm:text-5xl font-bold">
                        Descubre <span className="text-green-400">Calango</span>
                    </h1>
                    <p className="text-base sm:text-lg">
                        Naturaleza, historia y gastronomía ubicado en la provincia de Cañete.
                    </p>
                    <Link
                        to="/explora"
                        className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
                    >
                        Explorar
                    </Link>
                </div>            
            </div>
        </header>
    );
}
