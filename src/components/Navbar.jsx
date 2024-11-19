import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  FaSearch, 
  FaUserAlt, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaBed, 
  FaUtensils, 
  FaBicycle 
} from "react-icons/fa"; // Importar íconos

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true); // Controla si el usuario está en la parte superior
  const [search, setSearch] = useState("");

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsAtTop(currentScrollY === 0); // Si el scroll es 0, estamos en la parte superior
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Oculta el navbar al bajar
    } else {
      setIsVisible(true); // Muestra el navbar al subir
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleChanges = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscando...", search);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } ${isAtTop ? "bg-transparent" : "bg-white shadow-lg"}`}
    >
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className={`h-6 w-6 ${isAtTop ? "text-white" : "text-green-500"}`} />
          <Link
            to="/"
            className={`text-lg font-bold ${
              isAtTop ? "text-white" : "text-green-500"
            }`}
          >
            Descubre Calango
          </Link>
        </div>

        {/* Menú Hamburguesa */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`focus:outline-none ${
              isAtTop ? "text-white" : "text-gray-700"
            }`}
          >
            <FaBicycle className="w-6 h-6" />
          </button>
        </div>

        {/* Links de Navegación */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="/donde-ir"
            className={`font-medium flex items-center space-x-2 ${
              isAtTop ? "text-white" : "text-gray-600"
            } hover:text-green-800`}
          >
            <FaMapMarkerAlt />
            <span>Dónde ir</span>
          </Link>
          <Link
            to="/eventos"
            className={`font-medium flex items-center space-x-2 ${
              isAtTop ? "text-white" : "text-gray-600"
            } hover:text-green-800`}
          >
            <FaCalendarAlt />
            <span>Eventos</span>
          </Link>
          <Link
            to="/hospedajes"
            className={`font-medium flex items-center space-x-2 ${
              isAtTop ? "text-white" : "text-gray-600"
            } hover:text-green-800`}
          >
            <FaBed />
            <span>Hospedajes</span>
          </Link>
          <Link
            to="/restaurantes"
            className={`font-medium flex items-center space-x-2 ${
              isAtTop ? "text-white" : "text-gray-600"
            } hover:text-green-800`}
          >
            <FaUtensils />
            <span>Restaurantes</span>
          </Link>
          <Link
            to="/actividades"
            className={`font-medium flex items-center space-x-2 ${
              isAtTop ? "text-white" : "text-gray-600"
            } hover:text-green-800`}
          >
            <FaBicycle />
            <span>Actividades</span>
          </Link>
        </div>

        {/* Búsqueda e Iniciar Sesión */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Búsqueda */}
          <div className="relative flex items-center space-x-2">
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              value={search}
              onChange={handleChanges}
            />
            <button
              onClick={handleSearch}
              className={`${
                isAtTop ? "text-white" : "text-gray-600"
              } hover:text-green-500`}
            >
              <FaSearch className="w-5 h-5" />
            </button>
          </div>

          {/* Iniciar Sesión */}
          <Link
            to="/login"
            className={`flex items-center space-x-2 font-medium ${
              isAtTop ? "text-white" : "text-gray-700"
            } hover:text-green-800`}
          >
            <FaUserAlt className="w-6 h-6" />
            <span>Iniciar Sesión</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
