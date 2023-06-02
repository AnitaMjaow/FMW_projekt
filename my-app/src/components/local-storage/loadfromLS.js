const LoadFromLSButton = ()   => {
  //const [setButtonText] = useState('Click to see a history of your saved searches');

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

        }
        else{
            alert("Nothing is in the loaded data");
        }
    }
  return (
    <button onClick={handleClick}>Click to see a history of your saved searches</button>
  );
};

export default LoadFromLSButton;