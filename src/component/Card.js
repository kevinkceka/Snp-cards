import React, { useState } from 'react';

const Card = ({ cardData, onEdit }) => {
  const [name, setName] = useState(cardData.name);
  const [age, setAge] = useState(cardData.age);
  const [address, setAddress] = useState(cardData.address);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(cardData.id, name, age, address);
    setIsEditing(false);
  };

  return (
    <div className="card" >
      {isEditing ? (
        <>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>Name: {name}</p>
          <p>Current Age: {age}</p>
          <p>Address: {address}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Card;