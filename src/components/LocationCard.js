import React from 'react'
import styled from 'styled-components';

const LocationName = styled.h3`
  font-size: 1.6rem;
`;

const LocationInfo = styled.p`
  font-size: 1.4rem;
`;

export default function LocationCard ({ name, type, dimension, residents }) {
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
      <LocationName>{name}</LocationName>
      <LocationInfo>{type}</LocationInfo>
      <LocationInfo>{dimension}</LocationInfo>
      <LocationInfo>Number of Residents: {residents}</LocationInfo>
    </div>
  );
}
