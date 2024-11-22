import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AdminDashboard() {

  const location = useLocation(); // Hook para obtener la ruta actual

  const links = [
    { path: "/admin/actividades-eventos", label: "Actividades y Eventos" },
    { path: "/admin/hospedajes", label: "Hospedajes" },
    { path: "/admin/lugares", label: "Lugares" },
    { path: "/admin/restaurantes", label: "Restaurantes" },
    { path: "/admin/usuarios", label: "Usuarios" },
  ];


  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center pt-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 uppercase">Admin Dashboard</h1>
      <p className="text-gray-600 mb-2 text-center text-sm px-4">
        Bienvenido al panel de administración. Selecciona una sección para gestionar:
      </p>
      <div className="flex flex-wrap justify-center space-x-2 mb-6">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-3 py-2 rounded-2xl transition duration-300 m-1 ${
              location.pathname === link.path
                ? "bg-green-500 text-white transform scale-105" // Estilo activo
                : "bg-gray-200 hover:bg-gray-300" // Estilo inactivo
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};


