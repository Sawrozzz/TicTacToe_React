import React from "react";

const Rectangle = (props) => {
  return (
    <>
      <div className="rectangle" onClick={props.onClick}>
        <h4>{props.value}</h4>
      </div>
    </>
  );
};

export default Rectangle;
