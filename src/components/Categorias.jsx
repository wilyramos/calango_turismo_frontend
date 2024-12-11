import { useState } from "react";
import { FaMapMarkerAlt, FaStar, FaLeaf, FaTree, FaLandmark, FaRoute, FaGlobe } from "react-icons/fa";
import usePlaces from "../hooks/usePlaces";

export default function Categorias() {
	const { places } = usePlaces();

	// Estado para manejar la categoría seleccionada
	const [selectedCategory, setSelectedCategory] = useState("todos");
	const [currentPage, setCurrentPage] = useState(1);
	const placesPerPage = 3;

	// Categorías disponibles
	const categories = [
		{ id: "Nature", label: "Naturaleza", icon: <FaTree /> },
		{ id: "Culture", label: "Cultura", icon: <FaLandmark /> },
		{ id: "Historical", label: "Historia", icon: <FaRoute /> },
		{ id: "Aventura", label: "Aventuras", icon: <FaGlobe /> },
	];

	// Filtrar lugares por categoría seleccionada
	const filteredPlaces = selectedCategory === "todos"
		? places
		: places.filter((place) => place.category === selectedCategory);

	// Calcular lugares a mostrar según la página actual
	const startIndex = (currentPage - 1) * placesPerPage;
	const endIndex = startIndex + placesPerPage;
	const paginatedPlaces = filteredPlaces.slice(startIndex, endIndex);

	// Calcular el número total de páginas
	const totalPages = Math.ceil(filteredPlaces.length / placesPerPage);

	return (
		<div className="p-6 max-w-screen-lg mx-auto">
			<h2 className="text-2xl font-bold mb-4 text-center">Categorías</h2>
			<div className="flex flex-wrap justify-center gap-4 mb-6">
				<button
					className={`px-4 py-2 rounded-full flex items-center gap-2 ${selectedCategory === "todos" ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-800"}`}
					onClick={() => setSelectedCategory("todos")}
				>
					<FaGlobe /> Todos
				</button>
				{categories.map((cat) => (
					<button
						key={cat.id}
						className={`px-4 py-2 rounded-full flex items-center gap-2 ${selectedCategory === cat.id ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"}`}
						onClick={() => {
							setSelectedCategory(cat.id);
							setCurrentPage(1);
						}}
					>
						{cat.icon} {cat.label}
					</button>
				))}
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
				{paginatedPlaces.map((place) => (
					<div key={place._id} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
						{place.images && place.images.length > 0 && (
							<img
								src={place.images[0]}
								alt={place.name}
								className="w-full h-40 object-cover"
							/>
						)}
						<div className="p-4">
							<h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
								<FaLeaf className="text-green-500" /> {place.name}
							</h3>
							<p className="text-gray-600 text-sm flex items-center gap-2 mb-2">
								<FaMapMarkerAlt className="text-red-500" /> {place.location?.address || "Ubicación no disponible"}
							</p>
							<p className="text-gray-500 text-sm flex items-center gap-2">
								<FaStar className="text-yellow-500" /> {place.rating || "Sin calificación"}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="flex justify-center items-center mt-6 gap-4">
				<button
					className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
					disabled={currentPage === 1}
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
				>
					Anterior
				</button>
				<span className="text-gray-700">Página {currentPage} de {totalPages}</span>
				<button
					className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
					disabled={currentPage === totalPages}
					onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
				>
					Siguiente
				</button>
			</div>
		</div>
	);
}
