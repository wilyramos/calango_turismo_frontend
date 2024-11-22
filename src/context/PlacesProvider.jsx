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

        const token = localStorage.getItem("token_visit_calango");
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        // edicion

        if (place.id) {
            try {
                const { data } = await clienteAxios.put(`/api/lugares/${place.id}`, place, config);

                // actualizar el lugar en el state

                const placesActualizados = places.map((placeState) => placeState.id === place.id ? data : placeState);

                setPlaces(placesActualizados);

            } catch (error) {
                console.log(error);
            }
        } else {
            // nuevo lugar
            try {
                const { data } = await clienteAxios.post("/api/lugares", place, config);

                // agregar el nuevo lugar al state
                setPlaces([...places, data]);
                console.log(data);

            } catch (error) {
                console.log(error);

            }

        }
    }

    const setEdicionPlace = async (place) => {
        setPlace(place);
    }

    const eliminarPlace = async (id) => {

        const confirmar = confirm("¿Estás seguro de eliminar este lugar?");
        if(confirmar){
            try {
                const token = localStorage.getItem("token_visit_calango");
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };

                const { data } = await clienteAxios.delete(`/api/lugares/${id}`, config);

                const placesFiltrados = places.filter((place) => place.id !== id);
                setPlaces(placesFiltrados);
            } catch (error) {
                console.log(error);
            }
        }        
    }


    return (
        <PlacesContext.Provider value={{ 
            places,
            place, 
            guardarPlace, 
            setEdicionPlace,
            eliminarPlace
        }}>
            {children}
        </PlacesContext.Provider>
    );
}

export default PlacesContext;
