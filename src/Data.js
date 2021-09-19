import React, { useState } from "react";

function Data(props) {
  const [temp, setTemp] = useState(props.data.label);

  const show = (e) => {
    setTemp(e.target.value);
    // console.log(e.target.value) ;
  };

  return (
    <div>
      {
        <select value={temp} onChange={show}>
          {props.data.map((item) => {
            return (
              <option key={item.id} value={item.label}>
                {item.id}
              </option>
            );
          })}
        </select>
      }
      <h1>{temp}</h1>
    </div>
  );
}

export default Data;
