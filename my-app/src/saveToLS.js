import React from 'react';

const Button = ({ searchValue }) => {
    const handleClick = () => {
      console.log("This the search value:" + searchValue);

      if(searchValue !== ""){
        //this means its basically a day
      var twentyFourHours = new Date().getTime() + 24 * 60 * 60 * 1000; 
      var data = { value: searchValue, twentyFourHours };

      //setting it to localstorage here
      localStorage.setItem("searchData", JSON.stringify(data));
      }
      else{
        //if its empty do nothing
        console.log(":( empty");
      }
    };  
  
  return (
    <button onClick={handleClick}>Click me to save your current location</button>
  );
};

export default Button;
