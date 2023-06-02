import React from 'react';

const SaveToLSButton = ({ searchValue }) => {
  const handleClick = () => {
    if (searchValue !== undefined) {
      const twentyFourHours = new Date().getTime() + 24 * 60 * 60 * 1000;
      const newData = { value: searchValue, twentyFourHours };

      // Get old data from local storage
      const oldJsonData = JSON.parse(localStorage.getItem('searchData'));

      //if the oldJsonData is NOT null
      if (oldJsonData !== null) {
        console.log(oldJsonData);

        // Combine old data with new data
        const combinedData = [...oldJsonData, newData];
        console.log(combinedData);

        // Store combined data in local storage
        localStorage.setItem('searchData', JSON.stringify(combinedData));
      } 
      else {
        // If there is no existing array, create a new one
        const newDataArray = [newData];
        console.log('no data or invalid data in JSON');

        // Store new data array in local storage
        localStorage.setItem('searchData', JSON.stringify(newDataArray));
      }
    } else {
      // If it's empty, do nothing
      alert('You cant save an empty search!');
    }
  };

  return (
    <button onClick={handleClick}>Click me to save your current location</button>
  );
};

export default SaveToLSButton;
