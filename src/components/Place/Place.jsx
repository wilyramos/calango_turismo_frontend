import usePlaces from "../../hooks/usePlaces";
import { FaEdit, FaTrash } from "react-icons/fa";



export default function Place({place}) {

    const { name, location, category, priceRange, rating, reviews, imageUrls, activities, popularityScore } = place
    const { eliminarPlace, setEdicionPlace } = usePlaces()

    const formatLocation = (location) => {
        return `${location.address}, ${location.coordinates.lat}, ${location.coordinates.lon}`
    }



  return (
    
    <>
        <div className="rounded-2xl p-4 m-2 border shadow-lg">
            <h2 className="text-xl font-bold text-gray-600">{name}</h2>
            <p className="text-gray-500 text-xs">{formatLocation(location)}</p>
            <p className="text-gray-500 text-xs">{category}</p>
            <p className="text-gray-500 text-xs">{priceRange}</p>
            <p className="text-gray-500 text-xs">{rating}</p>
            <p className="text-gray-500 text-xs">{reviews}</p>
            <div className="flex justify-end">
                <button 
                  onClick={() => setEdicionPlace(place)} 
                  className="mr-2"
                >
                    <FaEdit className="text-blue-500" 
                />
                </button>
                <button onClick={() => eliminarPlace(place._id)}>
                    <FaTrash className="text-red-500" />
                </button>
            </div>
        </div>
    </>
    
  )
}
