import React from 'react';

function Yhteensa(props) {
    //console.log("Yhteensa.js - loading");
    //console.log("  Yhteensa.js - props", props);

    const sumteht = props.kurssi.osat.reduce(function(sum, osa) {
        //console.log('Yhteensa sum',sum,'osa',osa, 'osa.tehtavia',osa.tehtavia);     
        return sum + osa.tehtavia;
    }, 0);

    const sumosa = props.kurssi.osat.reduce(function(sum,osa) {
        //console.log('Yhteensa osia',sum); //INFO shows previous value :)
        return sum + 1;
    }, 0);

    /** obsoleted
    const summa = {
        hwtot : 0,
        osatot : 0
    }; 
    props.kurssi.osat.forEach((osa) => {
        summa.hwtot=summa.hwtot+osa.tehtavia;
        summa.osatot=summa.osatot+1;
        //console.log('osa.id:', osa.id,'osa.tehtavia:',osa.tehtavia,'summa.hwtot:', summa.hwtot,'summa.osatot:',summa.osatot,'osa.nimi:', osa.nimi); 
      });
        ////console.log("Yhteensa.js - just before return", summa.hwtot, summa.osatot);
        <h3>Yhteensä tehtäviä {summa.hwtot} kappaletta kurssin {summa.osatot} osassa</h3>

      */
    //console.log("Yhteensa.js - just before return", sumteht, sumosa);

    return (
    <div id="summaosa">
        <h3>Yhteensä tehtäviä {sumteht} kappaletta kurssin {sumosa} osassa</h3>
    </div>
    );
};

export default Yhteensa;
