import usePlaces from "../../hooks/usePlaces"
import Place from "./Place"

export default function ListadoPlaces() {

    const { places } = usePlaces()

    return (
       <>
            <h2 className="text-2xl text-center font-bold text-gray-600 my-5">
                Listado de lugares
            </h2>
           {places.map((place) => (
            
            <Place key={place._id} place={place} />
            
           ))}

       </>
    
   )
}
