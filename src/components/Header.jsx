import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HeaderCalango() {
    const sliderContent = [
        {
            title: "Naturaleza",
            description: "Explora los paisajes verdes y la biodiversidad única de Calango.",
            image: "../images/fondoPantalla.svg",
            buttonLabel: "Descubre Naturaleza",
            buttonLink: "/naturaleza",
        },
        {
            title: "Historia",
            description: "Conoce las tradiciones y el legado cultural del distrito.",
            image: "../images/fondoPantalla.svg",
            buttonLabel: "Aprende Más",
            buttonLink: "/historia",
        },
        {
            title: "Gastronomía",
            description: "Deléitate con los sabores únicos de la región y su comida típica.",
            image: "../images/fondoPantalla.svg",
            buttonLabel: "Prueba Ahora",
            buttonLink: "/gastronomia",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [sliderContent.length]);

    return (
        <header className="h-[80vh] flex items-center justify-center relative overflow-hidden">
            {sliderContent.map((item, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === currentIndex ? "opacity-100 z-0 scale-100" : "opacity-0 scale-105"
                    }`}
                    style={{
                        backgroundImage: `url(../images/fondoPantalla.svg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 1s ease-in-out",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
            ))}

            <div className="relative z-10 flex flex-col sm:flex-row w-full max-w-6xl mx-auto">
                <div className="flex-1 flex flex-col justify-center items-start text-white px-6 sm:px-8 space-y-4 sm:space-y-6">
                    <h1 className="text-3xl sm:text-5xl font-bold">
                        Descubre <span className="text-green-400">Calango</span>
                    </h1>
                    <p className="text-base sm:text-lg">
                        Naturaleza, historia y gastronomía en la provincia de Cañete.
                    </p>
                    <Link
                        to="/explorar"
                        className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
                    >
                        Explorar
                    </Link>
                </div>

                <div className="flex-1 flex flex-col justify-center items-end text-center text-white px-6 sm:px-4 space-y-4">
                    <h2 className="text-2xl sm:text-4xl font-bold">{sliderContent[currentIndex].title}</h2>
                    <p className="text-base sm:text-lg">{sliderContent[currentIndex].description}</p>
                    <Link
                        to={sliderContent[currentIndex].buttonLink}
                        className="bg-white text-green-500 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
                    >
                        {sliderContent[currentIndex].buttonLabel}
                    </Link>
                </div>
            </div>
        </header>
    );
}
