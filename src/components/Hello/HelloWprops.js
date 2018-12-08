import React from 'react';

//const nimi = 'Pekka';    //step5-2props
//const ika = 10;          //step5-2props
console.log("HelloWprops.js - loading");
const HelloWprops = (props) => {
    console.log("HelloWprops.js - props",props);
    return (
      <div>
          <p>Hello {props.name}, you are {props.age} years old</p>
      </div>
  )
};

export default HelloWprops;