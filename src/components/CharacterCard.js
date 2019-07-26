import React from 'react'
import styled from 'styled-components';

const CharImg = styled.img`
  height: 200px;
  width: 200px;   
`;


const CharName = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid gray;
`;

const CharInfo = styled.p`
  font-size: 1.4rem;
`;

export default function CharacterCard ({ image, name, species, status, origin }) {

  return (
  <div className='card'>
    <CharImg src={image} />
    <CharName>{name}</CharName>
    <CharInfo>Species: {species}</CharInfo>
    <CharInfo>Status: {status}</CharInfo>
    <CharInfo>Origin: {origin}</CharInfo>
  </div>
  )
}
