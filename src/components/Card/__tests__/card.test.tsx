import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { iCharacter } from '../../../types/index'
import { Card } from '../index'


const character:iCharacter = {
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
  ],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
}

describe('<Card />', () => {
  beforeEach(()=>{
    render(<Card character={character} />);
  })

  it('snapshot', () => {
    const { container } = render(<Card character={character}/>)
    expect(container).toMatchSnapshot()
  })

  it('renders a character name', () => {
    
    const characterName = screen.getByRole('heading', {
      name: "Rick Sanchez",
    })

    expect(characterName).toBeInTheDocument()
  })
  
  it('renders a character species', () => {
    const text = screen.getByText(character.species)
    expect(text).toBeInTheDocument()
  })

  it('renders a character gender', () => {
    const text = screen.getByText(character.gender)
    expect(text).toBeInTheDocument()
  })

  it('renders a character status', () => {
    const text = screen.getByText(character.status)
    expect(text).toBeInTheDocument()
  })

})