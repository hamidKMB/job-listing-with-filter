import React from "react"
import Header from "./Components/Header";
import Job from "./Components/Job";
import FilterBox from "./Components/FilterBox";
import data from "./data.json";

function App() {
  let result = React.useRef([]) 
  //hooks for live store the arguments
  const [array, setArray] = React.useState([]) 
  //hooks for store Selected Tags
  const [isClicked, setIsClicked] = React.useState(false);
  //hooks for Display the filterBox

  function onAddingFilter() { 
    //check is User Clicked on any tag
    if (isClicked === true){
      return result; 
    }
      return data;
  } 

  function addItem(value) {
    //store selected tag to array
    setIsClicked(true);
    setArray((prevValue) => {
      return [...prevValue, value];
    });
  }

  result = data.filter((data) => { 
  //filter data based on what user filter tag (array) and store it 
  //on result
  let dataTagAll = [data.role, 
                    data.level, 
                    ...data.languages,
                    ...data.tools || []];
  return array.every((tag) => dataTagAll.includes(tag));
});

  function deleteItem(value) {
    setArray(() => array.filter((item) => item !== value) )
    //delete item clicked by user
    array.length === 1 && setIsClicked(false)
    //delete filter box if there is no tags
  }


  function clearAll(){
    // delete all tags from filter box and array 
    setIsClicked(false)
    setArray([]) 
    
  }
  
  return (
    <div>
      <Header />
      <div className="job-container">
        {isClicked &&
        <FilterBox
          filters={array}
          isClicked={isClicked}
          deleteItems={clearAll}
          deleteOne={deleteItem}
        />}
        {onAddingFilter().map((item) => {
          return (
            <Job
              key={item.id}
              picture={item.logo}
              companyName={item.company}
              isNew={item.new}
              isFeatured={item.featured}
              date={item.postedAt}
              location={item.location}
              position={item.position}
              typeOfContract={item.contract}
              role={item.role}
              level={item.level}
              toolsNeeded={item.tools}
              languagesNeeded={item.languages}
              onSelect={addItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
