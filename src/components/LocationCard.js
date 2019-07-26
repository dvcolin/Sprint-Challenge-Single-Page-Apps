import React from 'react'
import styled from 'styled-components';

const LocationName = styled.h3`
  font-size: 2rem;
  text-align: center;
`;

const LocationInfo = styled.p`
  font-size: 1.2rem;
`;

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
    <div className='card'>
      <LocationName>{name}</LocationName>
      <LocationInfo>Type: {type}</LocationInfo>
      <LocationInfo>Dimension: {dimension}</LocationInfo>
      <LocationInfo>Number of Residents: {residents}</LocationInfo>
    </div>
  );
}
