import React, { useState } from 'react';

const LoadFromLSButton = ()   => {
  const [buttonText, setButtonText] = useState('Click for a text of your last location');

    const handleClick = () => {
        if(localStorage.getItem("searchData") !== null){
            var previousLocString = "Your previous saved location: "
            //fetch it from Local storage
            var searchData = localStorage.getItem("searchData");
            //parse it in JSON
            var JSONobject = JSON.parse(searchData);
            //set it to the single value
            searchData = JSONobject.value;
            
            setButtonText("");
            setButtonText(previousLocString + searchData);
        }
        else{
            alert("Nothing is in the loaded data");
        }
    }
  return (
    <button onClick={handleClick}>{buttonText}</button>
  );
};

export default LoadFromLSButton;