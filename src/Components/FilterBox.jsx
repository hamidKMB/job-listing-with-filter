import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

function FilterBox(props){
            return (
              <div className="filter-box">
                {/* <div className="tags-holder"> */}
                  {props.filters.map((item, index) => {
                    return (
                      <div key={index} className="tag" style={{ marginRight: "1rem" }}>
                        <div>{item}</div>
                        <div
                          className="delete-tag"
                          onClick={() => props.deleteOne(item)}
                        >
                          <ClearIcon />
                        </div>
                      </div>
                    );
                  })}
                {/* </div> */}
                <div className="clear-btn">
                  <p onClick={props.deleteItems}>Clear</p>
                </div>
              </div>
            );
    }

export default FilterBox