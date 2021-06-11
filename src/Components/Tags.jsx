import React from "react";

function Tags(props) {
  const [clickedItem, setClickedItem] = React.useState("");
  
  function save(event) {
        setClickedItem(event.target.textContent);
        console.log(clickedItem);
    }

  return <p onClick={save}>{props.tag}</p>;
}



export default Tags;