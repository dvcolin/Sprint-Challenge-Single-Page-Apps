import React from 'react'
import styled from 'styled-components';

const LocationName = styled.h3`
  font-size: 1.6rem;
`;

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
    <div>
      <LocationName>{name}</LocationName>
    </div>
  );
}
