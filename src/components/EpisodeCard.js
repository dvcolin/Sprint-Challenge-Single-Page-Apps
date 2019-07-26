import React from 'react'
import styled from 'styled-components';

const EpisodeName = styled.h3`
  font-size: 1.6rem;
  text-align: center;
`;

const EpisodeInfo = styled.p`
  font-size: 1.4rem;
`;

export default function EpisodeCard ({ name, episode, airDate }) {
  const style ={
    width: '45%',
    background: '#d7f7f0',
    padding: '1.5rem',
    margin: '1.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '5px',
    border: '1px solid gray'
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
