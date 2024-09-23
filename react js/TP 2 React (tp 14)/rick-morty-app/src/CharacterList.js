import React, { useEffect, useState } from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function CharacterList({ onCharacterSelect }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  const CharacterGrid = ({ characters }) => (
    <Grid columns={5} divided centered style={{ margin: "0px 5px" }}>
      <Grid.Row>
        {characters.map((character) => (
          <Grid.Column key={character.id} style={{ margin: "10px 0px" }}>
            <Card onClick={() => onCharacterSelect(character)}>
              <Image src={character.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{character.name}</Card.Header>
                <Card.Meta>
                  <span>{character.species}</span>
                </Card.Meta>
                <Card.Description>Estado: {character.status}</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white", fontFamily:"bold", fontSize:"40px" }}>Lista de Personajes</h1>
      <CharacterGrid characters={characters}/>
    </div>
  );
}

export default CharacterList;
