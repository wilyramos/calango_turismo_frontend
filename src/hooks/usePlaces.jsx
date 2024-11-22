import { useContext } from "react";
import PlacesContex from '../context/PlacesProvider'

export default function usePlaces() {
    return (
        useContext(PlacesContex)
    )
}