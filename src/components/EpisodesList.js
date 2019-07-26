import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard'
import {ListHeader} from './ListHeader';

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/episode/')

    .then(res => {
      setEpisodes(res.data.results);
    })

    .catch(err => {
      console.log(err);
    })

  }, [episodes])

  return <section className='episode-list grid-view'>
    <ListHeader>Episodes</ListHeader>

      {episodes.map(ep => <EpisodeCard key={ep.id} name={ep.name} episode={ep.episode} airDate={ep.air_date} />)}
    </section>

}
