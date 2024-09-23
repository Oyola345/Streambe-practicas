import React from 'react';
import { Segment, Image, List, Button } from 'semantic-ui-react';

function CharacterDetail({ character, onBack }) {
  return (
    <Segment textAlign='center'
    size='large' style={{ background: "rgb(0, 173, 115)" }}>
      <Image src={character.image} size='medium' verticalAlign='middle'/>
      <List>
        <List.Item>
          <strong>Nombre:</strong> {character.name}
        </List.Item>
        <List.Item>
          <strong>Especie:</strong> {character.species}
        </List.Item>
        <List.Item>
          <strong>Estado:</strong> {character.status}
        </List.Item>
        <List.Item>
          <strong>Género:</strong> {character.gender}
        </List.Item>
      </List>
      
      <Button onClick={onBack}>Volver</Button>
    </Segment>
  );
}

export default CharacterDetail;