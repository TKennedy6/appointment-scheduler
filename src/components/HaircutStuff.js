import { Link } from "react-router-dom"

function HaircutStuff({ service }) {
return (
    <div className='bg-light border p-4 m-2'>
       <h3>{service.type}</h3>
            <p>{service.price}</p>
            <p>{service.premium}</p>
            <Link to={'/haircut/' + service.id}>Details</Link> 
    </div>
)
}

export default HaircutStuff