import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const PlacesContext = createContext();

export const PlacesProvider = ({ children }) => {

    const [places, setPlaces] = useState([]);
    const [place, setPlace] = useState();

    // obtener los lugares de la base de datos

    useEffect(() => {

        const obtenerPlaces = async () => {
            try {
                const { data } = await clienteAxios.get("/api/lugares");
                setPlaces(data);
            } catch (error) {
                console.log(error);
            }
        };

        obtenerPlaces();

    }, []);

    // guardar un lugar en la base de datos

    const guardarPlace = async (place) => {
        console.log("Guardando place:", place); // Confirma el objeto enviado
    
        const token = localStorage.getItem("token_visit_calango");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
    
        if (place._id) {
            // Caso: Edición
            try {
                const { data } = await clienteAxios.put(`/api/lugares/${place._id}`, place, config);
                
                // Actualizar el lugar en el estado
                const placesActualizados = places.map((placeState) =>
                    placeState._id === place._id ? data : placeState
                );
                setPlaces(placesActualizados);
    
                console.log("Lugar editado correctamente:", data);
            } catch (error) {
                console.error("Error al editar el lugar:", error);
            }
        } else {
            // Caso: Nuevo lugar
            try {
                const { data } = await clienteAxios.post("/api/lugares", place, config);

                
                // Agregar el nuevo lugar al estado
                setPlaces([...places, data]);
    
                console.log("Lugar creado correctamente:", data);
                return data;
            } catch (error) {
                console.error("Error al crear el lugar:", error);
            }
        }
    };

    const setEdicionPlace = async (place) => {
        console.log(place); // Verifica si el objeto incluye `_id`
        setPlace(place);
    }

    const eliminarPlace = async (id) => {
        const confirmar = confirm("¿Estás seguro de eliminar este lugar?");
        if (confirmar) {
            try {
                const token = localStorage.getItem("token_visit_calango");
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
    
                // Llama al backend para eliminar el lugar
                await clienteAxios.delete(`/api/lugares/${id}`, config);
    
                // Actualiza el estado eliminando el lugar por su _id
                const placesFiltrados = places.filter((place) => place._id !== id);
                setPlaces(placesFiltrados);
    
                console.log("Lugar eliminado correctamente");
            } catch (error) {
                console.error("Error al eliminar el lugar:", error);
            }
        }
    };

    // subir imágenes al servidor

    const uploadImages = async (idPlace, images) => {
        try {
            const token = localStorage.getItem("token_visit_calango");
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            };

            const formData = new FormData();
            images.forEach((image) => {
                formData.append("images", image);
            });

            // peticion
            const { data } = await clienteAxios.post(`/api/lugares/${idPlace}/images`, formData, config);
            console.log(data);
            return data.images;

        } catch (error) {
            console.error("Error al subir las imágenes:", error);
            throw error; // Lanza el error para ser manejado en el frontend
        }
    }

    


    return (
        <PlacesContext.Provider value={{ 
            places,
            place, 
            guardarPlace, 
            setEdicionPlace,
            eliminarPlace,
            uploadImages
        }}>
            {children}
        </PlacesContext.Provider>
    );
}

export default PlacesContext;
