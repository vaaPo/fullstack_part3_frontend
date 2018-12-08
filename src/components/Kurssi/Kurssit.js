import React from 'react';
import Kurssi from './Kurssi';


//console.log("Kurssit.js - loading");


function Kurssit(props) {
    //console.log("Kurssit.js - props", props);
    const kurssix = props.kurssit;
    //console.log("Kurssit.js - kurssix", kurssix);
    /**var found = kurssix.find(function(kurssi) {
        //  return kurssi.id =2 ;
          return kurssi.id =1 ;
        });
     */    
    //console.log("Kurssit - found",found);

    //const kala = kurssix.map((kurssi) => kurssi.nimi);
    const content = kurssix.map((mappedkurssi) =>
    <div key={mappedkurssi.id} >
      <Kurssi kurssi={mappedkurssi}/>
    </div>
    );
    //console.log('Kurssit.js - kala', kala);
    return (
        <div>
            {content}
        </div>
    )
};

export default Kurssit;

/**
    <div key={mappedkurssi.id}>
    <h3>{mappedkurssi.nimi}</h3>
    <p><Kurssi kurssi={mappedkurssi}/></p>
    </div>
 */