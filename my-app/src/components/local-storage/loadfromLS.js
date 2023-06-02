import React, { useState } from 'react';

const LoadFromLSButton = ()   => {
  //const [setButtonText] = useState('Click to see a history of your saved searches');
  const [listItems, setListItems] = useState([]);

    const handleClick = () => {
      //if theres stuff in search data
        if(localStorage.getItem("searchData") !== null){ 
            //fetch data from Local storage
            const dataInLocalStorage = localStorage.getItem("searchData");    
            
            const parsedData = JSON.parse(dataInLocalStorage);
            const values = parsedData.map((item, index) => (
              <li key={index}>{item.value}<button onClick={() => handleDelete(index)}>X</button></li>
            ));

            //set it to the ul
            setListItems(values);
        }
        else{
            alert("Nothing is in the loaded data");
        }

    //this deletes the list item
    const handleDelete = (index) => {
      const dataInLocalStorage = localStorage.getItem('searchData');
      const parsedData = JSON.parse(dataInLocalStorage);
      const updatedData = parsedData.filter((item, i) => i !== index);

      //update the local storage
      localStorage.setItem('searchData', JSON.stringify(updatedData));
      const updatedValues = updatedData.map((item, i) => (
      <li key={i}>
        {item.value}
        <button onClick={() => handleDelete(i)}>X</button>
      </li>
    ));

    //update the UL with list items
    setListItems(updatedValues);
  }
    }
  return (
    <div>
      <button onClick={handleClick}>Click to see a history of your saved searches</button>
      <ul>{listItems}</ul>
    </div>
  );
};

export default LoadFromLSButton;