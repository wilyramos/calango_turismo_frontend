import { useEffect, useState } from 'react';

export default function Alerta({ alerta }) {

    const [ alertaVisible, setAlertaVisible ] = useState(false)    

    useEffect(() => {
        if(alerta.tipo){
            setAlertaVisible(true)
            setTimeout(() => {
                setAlertaVisible(false)
            }, 4000)
        }
    }, [alerta])

    if(!alertaVisible) return null

    return (
      <>
          {alerta.tipo && (
              <div
              className={`p-3 my-2 text-white rounded-md ${
                  alerta.tipo === 'error' ? 'border-l-8 border-red-900 bg-red-500' : 'border-l-8 border-green-900 bg-green-500'
              }`}
              >
              <p>{alerta.msg}</p>
              </div>
          )}     
      </>
    )
  }
  