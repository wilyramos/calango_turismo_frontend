import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
   FaSearch,
   FaUserAlt,
   FaMapMarkerAlt,
   FaCalendarAlt,
   FaBed,
   FaUtensils,
   FaBicycle,
   FaBars,
   FaTimes,
} from "react-icons/fa";

export default function Navbar() {
   const [isVisible, setIsVisible] = useState(true);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [isAtTop, setIsAtTop] = useState(true);
   const [search, setSearch] = useState("");
   const location = useLocation();

   const isHomePage = location.pathname === "/";
   const navbarClasses = isHomePage && isAtTop ? "bg-transparent" : "bg-white shadow-lg";
   const textColorClasses = isHomePage && isAtTop ? "text-white" : "text-gray-600";
   const iconColorClasses = isHomePage && isAtTop ? "text-white" : "text-green-500";

   const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY === 0);
      if (currentScrollY > lastScrollY) {
         setIsVisible(false);
      } else {
         setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
   };

   useEffect(() => {
      if (isHomePage) {
         window.addEventListener("scroll", handleScroll);
         return () => window.removeEventListener("scroll", handleScroll);
      }
   }, [lastScrollY, isHomePage]);

   const handleChanges = (e) => setSearch(e.target.value);

   const handleSearch = (e) => {
      e.preventDefault();
      console.log("Buscando...", search);
   };

   return (
      <nav
         className={`fixed top-0 left-0 w-full z-20 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
         } ${navbarClasses}`}
      >
         <div className="flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
               <FaMapMarkerAlt className={iconColorClasses} />
               <Link to="/" className={`text-lg font-bold ${iconColorClasses}`}>
                  Descubre Calango
               </Link>
            </div>

            {/* Menú Hamburguesa */}
            <div className="lg:hidden">
               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={textColorClasses}>
                  {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
               </button>
            </div>

            {/* Links de Navegación */}
            <div className="hidden lg:flex space-x-4">
               <Link to="/donde-ir" className={`flex items-center ${textColorClasses}`}>
                  <FaMapMarkerAlt />
                  Dónde ir
               </Link>
               <Link to="/eventos" className={`flex items-center ${textColorClasses}`}>
                  <FaCalendarAlt /> 
                  Eventos
               </Link>
               <Link to="/hospedajes" className={`flex items-center ${textColorClasses}`}>
                  <FaBed />
                  Hospedajes
               </Link>
               <Link to="/restaurantes" className={`flex items-center ${textColorClasses}`}>
                  <FaUtensils />
                  Restaurantes
               </Link>
               <Link to="/actividades" className={`flex items-center ${textColorClasses}`}>
                  <FaBicycle />
                  Actividades
               </Link>

               {/* Búsqueda */}
               <div className="relative flex items-center">
                  <input
                     type="text"
                     placeholder="Buscar..."
                     className="bg-gray-100 px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                     value={search}
                     onChange={handleChanges}
                  />
                  <button onClick={handleSearch} className={textColorClasses}>
                     <FaSearch className="w-5 h-5" />
                  </button>
               </div>

               <Link to="/login" className={`flex items-center  ${textColorClasses}`}>
                  <FaUserAlt />
                  Iniciar Sesión
               </Link>
            </div>
         </div>

         {/* Menú Desplegable para Móviles */}
         {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 z-10">
               <Link
                  to="/donde-ir"
                  className="block text-gray-700 hover:text-green-800 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Dónde ir
               </Link>
               <Link
                  to="/eventos"
                  className="block text-gray-700 hover:text-green-800 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Eventos
               </Link>
               <Link
                  to="/hospedajes"
                  className="block text-gray-700 hover:text-green-800 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Hospedajes
               </Link>
               <Link
                  to="/restaurantes"
                  className="block text-gray-700 hover:text-green-800 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Restaurantes
               </Link>
               <Link
                  to="/actividades"
                  className="block text-gray-700 hover:text-green-800 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Actividades
               </Link>
               <Link
                  to="/login"
                  className="block text-gray-700 hover:text-green-800 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Iniciar Sesión
               </Link>

               {/* Búsqueda en el Menú Móvil */}
               <div className="flex items-center mt-4">
                  <input
                     type="text"
                     placeholder="Buscar..."
                     className="w-full bg-gray-100 px-3 py-1 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                     value={search}
                     onChange={handleChanges}
                  />
                  <button onClick={handleSearch} className="text-gray-600">
                     <FaSearch className="w-5 h-5" />
                  </button>
               </div>
            </div>
         )}
      </nav>
   );
}
