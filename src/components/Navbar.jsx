import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const location = useLocation();

    // Lógica para cambiar el fondo y color de texto dependiendo de la página
    const isHomePage = location.pathname === "/";
    const navbarClasses = isHomePage && isAtTop ? "bg-transparent" : "bg-white shadow-lg";
    const textColorClasses = isHomePage && isAtTop ? "text-white" : "text-gray-600";
    
    // Manejo del scroll
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsAtTop(currentScrollY === 0);  // Detectar si estamos en la parte superior de la página
        setIsVisible(currentScrollY <= lastScrollY);  // Ocultar navbar al bajar y mostrar al subir
        setLastScrollY(currentScrollY);  // Actualizar la última posición del scroll
    };

    // Añadir el event listener para el scroll
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

    // Clases comunes para los enlaces
    const linkClasses = `relative flex items-center uppercase ${textColorClasses} 
        hover:after:w-full after:absolute after:left-1/2 after:bottom-0 after:w-0 
        after:h-[2px] after:bg-gray-400 after:transition-all hover:after:left-0`;

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-20 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"} ${navbarClasses}`}
        >
            <div className="flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">
                    <img src="/images/logo.svg" alt="Descubre Calango" className="w-40" />
                </Link>

                {/* Menú Hamburguesa */}
                <div className="lg:hidden">
                    <button
                        onClick={handleMenuToggle}
                        className={`focus:outline-none ${textColorClasses}`}
                    >
                        {isMenuOpen ? "✖" : "☰"}
                    </button>
                </div>

                {/* Links de Navegación */}
                <div className="hidden lg:flex space-x-4">
                    <Link to="/explora" className={linkClasses}>Explora</Link>
                    <Link to="/experiencias" className={linkClasses}>Experiencias</Link>
                    <Link to="/hospedajesygastronomia" className={linkClasses}>Hospedaje y Gastronomía</Link>
                    <Link to="/planifica" className={linkClasses}>Planifica tu viaje</Link>
                    <Link to="/contacto" className={linkClasses}>Contacto</Link>
                    <Link to="/login" className={`flex items-center gap-2 ${textColorClasses}`}>
                        <FaUser />
                    </Link>
                </div>
            </div>

            {/* Menú Desplegable para Móviles */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 z-10">
                    <Link to="/explora" className="block py-2 text-lg font-semibold text-gray-600">Explora</Link>
                    <Link to="/experiencias" className="block py-2 text-lg font-semibold text-gray-600">Experiencias</Link>
                    <Link to="/hospedajesygastronomia" className="block py-2 text-lg font-semibold text-gray-600">Hospedaje y Gastronomía</Link>
                    <Link to="/planifica" className="block py-2 text-lg font-semibold text-gray-600">Planifica tu viaje</Link>
                    <Link to="/contacto" className="block py-2 text-lg font-semibold text-gray-600">Contacto</Link>
                </div>
            )}
        </nav>
    );
}
