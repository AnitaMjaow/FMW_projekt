import React from 'react';

const Button2 = () => {
    const handleClick = () => {
      console.log("he")
    }
  return (
    <button onClick={handleClick}>Load your saved location</button>
  );
};

export default Button2;
