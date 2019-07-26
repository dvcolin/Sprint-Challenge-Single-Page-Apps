import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard'

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/location/')

    .then(res => {
      setLocations(res.data.results);
    })

    .catch(err => {
      console.log(err);
    })

  }, [locations])

  return <section className='location-list grid-view'>

      {locations.map(loc => <LocationCard key={loc.id} name={loc.name} type={loc.type} dimension={loc.dimension} residents={loc.residents.length} />)}
    </section>

}
