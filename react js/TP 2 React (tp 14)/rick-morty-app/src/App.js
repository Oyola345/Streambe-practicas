import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
  };

  const handleBack = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      {selectedCharacter ? (
        <CharacterDetail character={selectedCharacter} onBack={handleBack} />
      ) : (
        <CharacterList onCharacterSelect={handleCharacterSelect} />
      )}
    </div>
  );
}

export default App;
