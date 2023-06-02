import React, { useState } from 'react';

const LoadFromLSButton = ()   => {
  //const [setButtonText] = useState('Click to see a history of your saved searches');
  const [listItems, setListItems] = useState([]);

    const handleClick = () => {
      

      //if theres stuff in search data
        if(localStorage.getItem("searchData") !== null){ 
          /*
            var previousLocString = "Your previous saved location: "
            //fetch it from Local storage
            var searchData = localStorage.getItem("searchData");
            //parse it in JSON
            var JSONobject = JSON.parse(searchData);
            //set it to the single value
            searchData = JSONobject.value;
            
            setButtonText("");
            setButtonText(previousLocString + searchData);
          */

            //fetch data from Local storage
            const dataInLocalStorage = localStorage.getItem("searchData");    
            
            const parsedData = JSON.parse(dataInLocalStorage);
            const values = parsedData.map((item, index) => (
              <li key={index}>{index}: {item.value}</li>
            ));
      

            setListItems(values);

            //console.log(values);

        }
        else{
            alert("Nothing is in the loaded data");
        }
    }
  return (
    <div>
      <button onClick={handleClick}>Click to see a history of your saved searches</button>
      <ul>history {listItems}</ul>
    </div>
  );
};

export default LoadFromLSButton;