import React from 'react';

const Button = ({ searchValue }) => {
    const handleClick = () => {
      //console.log('Search value:', searchValue);
    
      //save the search value to local storage
    

    };
  
  return (
    <button onClick={handleClick}>Click me to save your current location</button>
  );
};

export default Button;
