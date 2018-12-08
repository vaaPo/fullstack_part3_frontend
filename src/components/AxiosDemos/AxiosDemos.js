import axios from 'axios';

const promisenotes = axios.get('http://localhost:3001/notes');
console.log('AxiosDemos promise /notes',promisenotes);

const promisepersons = axios.get('http://localhost:3001/persons');
console.log('AxiosDemos promis /persons',promisepersons);

/**
axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data;
  console.log('AxiosDemos notes',notes);
});
 */

// prettyprint, curl http://localhost:3001/notes
axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data;
    console.log('AxiosDemos notes',notes);
  });



// this fails:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises  
//const promisefoobar = axios.get('http://localhost:3001/foobar');
//console.log(promisefoobar);
