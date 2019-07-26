import React from 'react'
import styled from 'styled-components';

const EpisodeName = styled.h3`
  font-size: 1.6rem;
`;

const EpisodeInfo = styled.p`
  font-size: 1.4rem;
`;

export default function EpisodeCard ({ name, episode, airDate }) {
  const style ={
    width: '45%',
    background: 'teal',
    padding: '1.5rem',
    margin: '1.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  // image={image}
  return (
    <div style={style}>
      <EpisodeName>{name}</EpisodeName>
      <EpisodeInfo>{episode}</EpisodeInfo>
      <EpisodeInfo>{airDate}</EpisodeInfo>
    </div>
  );
}
