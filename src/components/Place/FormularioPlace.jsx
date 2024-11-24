import { useState, useEffect } from "react";
import Alerta from "../Alerta";
import usePlaces from "../../hooks/usePlaces";
import formatLocation from "../../utils/formatLocation";


export default function FormularioPlace() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState({
        address: '',
        coordinates: {
            lat: '',
            lon: ''
        }
    });
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const [activities, setActivities] = useState([]);
    const [popularityScore, setPopularityScore] = useState(0);

    const { place, guardarPlace } = usePlaces();

    const [alerta, setAlerta] = useState({});

    // manejo de location

    const handleLocationChange = (e) => {
        const { name, value } = e.target;
        if (name === 'address') {
            setLocation((prevState) => ({
                ...prevState,
                address: value
            }));
        } else {
            setLocation((prevState) => ({
                ...prevState,
                coordinates: {
                    ...prevState.coordinates,
                    [name]: value
                }
            }));
        }
    };

    useEffect(() => {

        if (place?.name) {
            setName(place.name);
            setDescription(place.description);
            setLocation(place.location);
            setCategory(place.category);
            setPriceRange(place.priceRange);
            setRating(place.rating);
            setReviews(place.reviews);
            setImageUrls(place.imageUrls);
            setActivities(place.activities);
            setPopularityScore(place.popularityScore);
        }

    }, [place]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Enviando el formulario...");

        // Validar campos obligatorios
        if (name.trim() === '' || description.trim() === '') {
            setAlerta({
                msg: 'Los campos nombre y descripción son obligatorios',
                tipo: 'error',
            });
            return;
        }

        // Crear el JSON con los datos estructurados
        const dataToSend = {
            name,
            description,
            location: {
                address: location.address,
                coordinates: {
                    lat: parseFloat(location.coordinates.lat) || 0,
                    lon: parseFloat(location.coordinates.lon) || 0,
                },
            },
            category,
            priceRange,
            rating: parseFloat(rating) || 0,
            // reviews,
            imageUrls,
            // activities,
            popularityScore: parseFloat(popularityScore) || 0,
        };

        console.log("Datos enviados al backend:", dataToSend);

        // Enviar los datos al backend usando la función guardarPlace
        guardarPlace(dataToSend);

        setAlerta({
            msg: 'El lugar se ha guardado correctamente',
            tipo: 'success',
        });

        // Reiniciar el formulario
        setName('');
        setDescription('');
        setLocation({ address: '', coordinates: { lat: '', lon: '' } });
        setCategory('');
        setPriceRange('');
        setRating(0);
        setPopularityScore(0);
    };

    return (
        <>
            <div className="mx-auto p-4 shadow-lg rounded-xl">
                <p className="text-2xl text-center font-bold text-gray-600 p-4">Formulario <span className="text-green-500">de lugar</span> </p>

                {alerta.msg && <Alerta alerta={alerta} />}

                <form
                    className="flex flex-col"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <label htmlFor="name" className=" text-gray-500  md:mb-0 pr-4 text-sm">
                            Nombre del lugar:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border-2 rounded-xl border-gray-200   py-1 text-gray-700 p-2"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className=" text-gray-500  md:mb-0 pr-4 text-sm">
                            Descripción:
                        </label>
                        <input
                            type="text"
                            id="description"
                            className="border-2 rounded-xl border-gray-200   py-1 text-gray-700 p-2"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col">
                            <label htmlFor="address" className="text-gray-500 text-sm">Dirección:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="border-2 rounded-xl border-gray-200 py-1 px-2 text-gray-700"
                                value={location.address}
                                onChange={handleLocationChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lat" className="text-gray-500 text-sm">Latitud:</label>
                            <input
                                type="number"
                                id="lat"
                                name="lat"
                                className="border-2 rounded-xl border-gray-200 py-1 px-2 text-gray-700"
                                value={location.coordinates.lat}
                                onChange={handleLocationChange}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lon" className="text-gray-500 text-sm">Longitud:</label>
                            <input
                                type="number"
                                id="lon"
                                name="lon"
                                className="border-2 rounded-xl border-gray-200 py-1 px-2 text-gray-700"
                                value={location.coordinates.lon}
                                onChange={handleLocationChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">

                        <div className="flex flex-col">
                            <label htmlFor="category" className=" text-gray-500  md:mb-0 pr-4 text-sm ">
                                Categoría:
                            </label>
                            <select
                                id="category"
                                className="border-2 rounded-xl border-gray-200   py-1 text-gray-700 p-2"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            >
                                <option value="">-- Seleccione --</option>
                                <option value="Nature">Naturaleza</option>
                                <option value="Culture">Cultural</option>
                                <option value="Recreational">Recreacional</option>
                                <option value="Historical">Historico</option>
                                <option value="Urban">Urbano</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="priceRange" className=" text-gray-500  md:mb-0 pr-4 text-sm">
                                Rango de precios:
                            </label>
                            <select
                                id="priceRange"
                                className="border-2 rounded-xl border-gray-200   py-1 text-gray-700 p-2"
                                value={priceRange}
                                onChange={e => setPriceRange(e.target.value)}
                            >
                                <option value="">-- Seleccione --</option>
                                <option value="Free">Gratis</option>
                                <option value="Low">Bajo</option>
                                <option value="Medium">Medio</option>
                                <option value="High">Alto</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="rating" className=" text-gray-500  md:mb-0 pr-4 text-sm">
                                Rating:
                            </label>
                            <input
                                type="number"
                                id="rating"
                                className="border-2 rounded-xl border-gray-200   py-1 text-gray-700 p-2"
                                value={rating}
                                onChange={e => setRating(e.target.value)}
                            />
                        </div>

                    </div>



                    <div className="flex flex-col">
                        <label htmlFor="reviews" className=" text-gray-500  md:mb-0 pr-4 text-sm">
                            Reviews:
                        </label>
                        <input
                            type="text"
                            id="reviews"
                            className="border-2 rounded-xl border-gray-200 py-1 text-gray-700 p-2 cursor-not-allowed"
                            // INPUT DESCATIVADO
                            disabled
                            value={reviews}
                            onChange={e => setReviews(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="imageUrls" className=" text-gray-500  md:mb-0 pr-4 text-sm">
                            Image Urls:
                        </label>
                        <input
                            type="text"
                            id="imageUrls"
                            className="border-2 rounded-xl border-gray-200   py-1 text-gray-700 p-2"
                            value={imageUrls}
                            onChange={e => setImageUrls(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="activities" className=" text-gray-500  md:mb-0 pr-4 text-sm">
                            Activities:
                        </label>
                        <input
                            type="text"
                            id="activities"
                            className="border-2 rounded-xl border-gray-200 py-1 text-gray-700 p-2 cursor-not-allowed"
                            disabled
                            value={activities}
                            onChange={e => setActivities(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="popularityScore" className=" text-gray-500  md:mb-0 pr-4 text-sm">
                            Popularity Score:
                        </label>
                        <input
                            type="number"
                            id="popularityScore"
                            className="border-2 rounded-xl border-gray-200   py-1 text-gray-700 p-2"
                            value={popularityScore}
                            onChange={e => setPopularityScore(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="w-max bg-green-500 text-white font-bold uppercase text-sm rounded-xl py-2 mt-4 p-4 hover:bg-green-600"
                        >
                            Guardar lugar
                        </button>

                    </div>
                </form>
            </div>
        </>
    )
}
