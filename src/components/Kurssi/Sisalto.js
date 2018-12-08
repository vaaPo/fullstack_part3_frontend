import React from 'react';

function Sisalto(props) {
  //console.log("Sisalto.js - loading");
  //console.log("  Sisalto.js - props", props);
  const content = props.kurssi.osat.map((osa) =>
    <div key={osa.id}>
      <p>{osa.id} {osa.nimi} {osa.tehtavia}</p>
    </div>
  );

  //console.log("   Sisalto.js - just before return");

  return (
    <div id="osat">
      <hr />
      {content}
    </div>
  );
};

export default Sisalto;
