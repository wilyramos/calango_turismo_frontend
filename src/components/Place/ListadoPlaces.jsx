import usePlaces from "../../hooks/usePlaces"
import Place from "./Place"



export default function ListadoPlaces() {

    const { places } = usePlaces()


    return (
       <>
           {places.map((place) => (
            
            <Place key={place._id} place={place} />
            
           ))}

       </>
    
   )
}
