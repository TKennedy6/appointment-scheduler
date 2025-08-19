import { useState } from "react";
import { BASIC_SERVICES } from "./BASIC_SERVICE";
import HaircutStuff from "./HaircutStuff";
import servicesList from './HaircutStuff'


export default function HomePage({servicesList}) {
    const [priceFilter, setPriceFilter] = useState('All');

    let filteredServices
if(priceFilter === 'All') {
  filteredServices = servicesList
}
else {
  filteredServices = servicesList.filter(service => service.price === priceFilter)
}
    return (
        <div>
            <div>
        <button className='btn btn-primary me-2' onClick={() => setPriceFilter('All')}>All</button>
        <button className='btn btn-primary me-2' onClick={() => setPriceFilter(20)}>$20</button>
        <button className='btn btn-primary me-2' onClick={() => setPriceFilter(10)}>$10</button>
        <button className='btn btn-primary' onClick={() => setPriceFilter(5)}>$5</button>
      </div>
            {filteredServices.map(service => <HaircutStuff service={service}/>)}
        </div>
    )
}