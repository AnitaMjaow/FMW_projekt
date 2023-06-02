import React from 'react';

const SaveToLSButton = ({ searchValue }) => {
  const handleClick = () => {
    if (searchValue !== undefined) {
      const twentyFourHours = new Date().getTime() + 24 * 60 * 60 * 1000;
      const newData = { value: searchValue, twentyFourHours };

      // Get old data from local storage
      const oldJsonData = JSON.parse(localStorage.getItem('searchData'));

      //is the newData a duplicate of the previous saved thing in local storage?
      const isDuplicate = oldJsonData && oldJsonData.some(item => item.value === searchValue);

      //if the oldJsonData is NOT null
      if (oldJsonData !== null) {
        //check if the previous entry is not a duplicate
        if(!isDuplicate){
          //combine the data
          const combinedData = [...oldJsonData, newData];
          console.log(combinedData);

          //Store combined data in localstorage
          localStorage.setItem('searchData', JSON.stringify(combinedData));
          }
          else{
            alert("This search is already saved!");
          }
      } 
      else {
        //Create new array of the data
        const newDataArray = [newData];
      
        //Put the array in the localstorage
        localStorage.setItem('searchData', JSON.stringify(newDataArray));
      }
    } else {
      //If search is empty dont save it
      alert('You cant save an empty search!');
    }
  };

  return (
    <button onClick={handleClick}>Click me to save your current location</button>
  );
};

export default SaveToLSButton;
