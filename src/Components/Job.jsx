import React from "react";

function Job(props) {
  return (
    <div
      className="job"
      style={{
        borderLeft: props.isFeatured && "5px solid #5EA4A5",
      }}
    >
      <div className="left">
        <div className="picture">
          <img alt="Company Logo" src={props.picture} />
        </div>

        <div className="after-picture">
          <div className="top-details">
            <p className="company-name">{props.companyName}</p>
            {props.isNew && <p className="is-new">NEW!</p>}
            {props.isFeatured && <p className="is-featured">Featured</p>}
          </div>
      
          <h3>
            {props.position}
          </h3>

          <div className="bottom-details">
            <p>{props.date}</p>
            <p>{props.typeOfContract}</p>
            <p>{props.location}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="other-details">
          <p onClick={() => props.onSelect(props.role)}>{props.role}</p>
          <p onClick={() => props.onSelect(props.level)}>{props.level}</p>

          {props.languagesNeeded.map((item, index) => {
            return (
              <p key={index} onClick={() => props.onSelect(item)}>
                {item}
              </p>
            );
          })}

          {props.toolsNeeded.map((item, index) => {
            return (
              <p key={index} onClick={() => props.onSelect(item)}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Job;
