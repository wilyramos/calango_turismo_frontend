import FormularioPlace from "../../components/Place/FormularioPlace"
import ListadoPlaces from "../../components/Place/ListadoPlaces"
import { useState } from "react"


export default function AdminLugares() {

   const [ alerta, setAlerta ] = useState()

  return (
    <div className="flex flex-col md:flex-row">
      <FormularioPlace />
      <div className="w-1/2">
        {alerta && <div className="bg-red-500 p-3 text-white">{alerta}</div>}
        <ListadoPlaces />
      </div>      
    </div>
  )
}
