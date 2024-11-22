import usePlaces from "../../hooks/usePlaces";



export default function Place({place}) {

    const { name, description } = place;


  return (
    
    <>
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
        </div>
        </div>
    </>
    
  )
}
