import React from 'react';
import axios from 'axios';

console.log("FilterCountriesByString.js - loading");

const countries=[{"name":"Afghanistan","alpha3Code":"AFG"},{"name":"Åland Islands","alpha3Code":"ALA"}];

var hit =  countries.filter(function(countries) {
        return countries.name == "Afghanistan";
    });

console.log(countries);
console.log(hit);

const hit2=countries.filter(obj => {return obj.name!=='Afghanistan'; });
console.log(hit2);


axios
.get('http://localhost:3001/countries_name_alpha3code') //https://restcountries.eu/rest/v2/all?fields=name;alpha3Code
.then(response => {
  console.log('AppCountries promise fulfilled');
  const countries2 = response.data;
  console.log(countries2);
  const hit2x=countries2.filter(obj => {return obj.name!=='Afghanistan'; });
  console.log(hit2);
  const hitx=countries.filter(obj => {return obj.name.toUpperCase().includes('Å') });
  console.log(hitx);
  
    //  this.setState({ countries2: response.data });
});
