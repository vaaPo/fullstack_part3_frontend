import React from 'react';

//function Otsikko(props) {

//console.log("Otsikko.js - loading");


//const Otsikko = ({otsake}) => {
function Otsikko(props) {
    //console.log("Otsikko.js - props",props);
    const otsake=props;
    //console.log("Otsikko.js - otsake.kurssi.nimi", otsake.kurssi.nimi);
 //   //console.log("Otsikko.js - otsake.nimi", otsake.nimi);
    const otsikko15 = (<div>
                        <h2>Otsikko {otsake.kurssi.nimi}</h2>
                       </div>
    );
//console.log("Otsikko.js - just before return");

return (
    <div id="otsikko15">
      <hr />
      {otsikko15}
    </div>
  );
};

export default Otsikko;