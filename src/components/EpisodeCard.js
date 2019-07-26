import React from 'react'
import styled from 'styled-components';

const EpisodeName = styled.h3`
  font-size: 2rem;
  text-align: center;
`;

const EpisodeInfo = styled.p`
  font-size: 1.4rem;
`;

export default function EpisodeCard ({ name, episode, airDate }) {
  // image={image}
  return (
    <div className='card'>
      <EpisodeName>{name}</EpisodeName>
      <EpisodeInfo>{episode}</EpisodeInfo>
      <EpisodeInfo>{airDate}</EpisodeInfo>
    </div>
  );
}
