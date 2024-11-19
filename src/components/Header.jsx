import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HeaderCalango() {
  const sliderContent = [
    {
      title: "Naturaleza",
      description: "Explora los paisajes verdes y la biodiversidad única de Calango.",
      image: "../public/images/5.svg",
      buttonLabel: "Descubre Naturaleza",
      buttonLink: "/naturaleza",
    },
    {
      title: "Historia",
      description: "Conoce las tradiciones y el legado cultural del distrito.",
      image: "../public/images/fondoPantalla.svg",
      buttonLabel: "Aprende Más",
      buttonLink: "/historia",
    },
    {
      title: "Gastronomía",
      description: "Deléitate con los sabores únicos de la región y su comida típica.",
      image: "../public/images/9.svg",
      buttonLabel: "Prueba Ahora",
      buttonLink: "/gastronomia",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
    }, 5000); // Cambio automático cada 5 segundos

    return () => clearInterval(interval);
  }, [sliderContent.length]);

  return (
    <header className="h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Fondos del Slider */}
      {sliderContent.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Gradiente Oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/20 z-10"></div>

      {/* Contenido Principal */}
      <div className="relative z-20 flex w-full max-w-6xl mx-auto">
        {/* Lado Izquierdo */}
        <div className="w-1/2 flex flex-col justify-center items-start text-white px-8 space-y-6">
          <h1 className="text-5xl font-bold">
            Descubre <span className="text-green-400">Calango</span>
          </h1>
          <p className="text-lg">
            Naturaleza, historia y gastronomía en la provincia de Cañete.
          </p>
          <Link
            to="/explorar"
            className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
          >
            Explorar
          </Link>
        </div>

        {/* Lado Derecho */}
        <div className="w-1/2 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4">{sliderContent[currentIndex].title}</h2>
          <p className="text-lg mb-6">{sliderContent[currentIndex].description}</p>
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
