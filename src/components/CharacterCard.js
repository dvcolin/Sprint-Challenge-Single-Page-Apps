import React from 'react'
import styled from 'styled-components';

const CharName = styled.h2`
  font-size: 2.4rem;
`;

const CharInfo = styled.p`
  font-size: 1.4rem;
`;

export default function CharacterCard ({ name, species, origin }) {

  return (
  <div>
    <CharName>{name}</CharName>
    <CharInfo>{species}</CharInfo>
    <CharInfo>{origin}</CharInfo>
  </div>
  )
}
