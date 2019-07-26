import React from 'react'
import styled from 'styled-components';

const CharImg = styled.img`
  height: 200px;
  width: 200px;   
`;


const CharName = styled.h2`
  font-size: 2.4rem;
  text-align: center;
`;

const CharInfo = styled.p`
  font-size: 1.4rem;
`;

export default function CharacterCard ({ image, name, species, status, origin }) {

  const style ={
    width: '45%',
    background: 'teal',
    padding: '1.5rem',
    margin: '1.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return (
  <div style={style}>
    <CharImg src={image} />
    <CharName>{name}</CharName>
    <CharInfo>Species: {species} - {status}</CharInfo>
    <CharInfo>Origin: {origin}</CharInfo>
  </div>
  )
}
