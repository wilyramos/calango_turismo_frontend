import FormularioPlace from "../../components/Place/FormularioPlace"
import ListadoPlaces from "../../components/Place/ListadoPlaces"
import { useState } from "react"


export default function AdminLugares() {

   const [ alerta, setAlerta ] = useState()

  return (
    <div className="grid grid-cols-3">
      <FormularioPlace />
      <div className="w-1/2">
        {alerta && <div className="bg-red-500 p-3 text-white">{alerta}</div>}
        <ListadoPlaces />
      </div>      
    </div>
  )
}
