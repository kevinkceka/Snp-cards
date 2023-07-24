
import React, { useState } from 'react';
import Card from './Card';

const GridView = () => {
  const [cards, setCards] = useState([
    { id: 1, name: 'John Doe', age: 30, address: '123 Main St' },
    { id: 2, name: 'Jane Smith', age: 25, address: '456 Oak Ave' },
    // Add more initial cards here if needed
  ]);

  const handleEditCard = (id, name, age, address) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, name, age, address } : card
    );
    setCards(updatedCards);
  };

  const handleAddCard = () => {
    const newCard = { id: Date.now(), name: '', age: 0, address: '' };
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <button onClick={handleAddCard}>Add Card</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cards.map((card) => (
          <Card key={card.id} cardData={card} onEdit={handleEditCard} />
        ))}
      </div>
    </div>
  );
};

export default GridView;
