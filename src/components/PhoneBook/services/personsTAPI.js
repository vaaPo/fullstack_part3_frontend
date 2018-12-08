import axios from 'axios';
//const baseUrl = 'https://mysterious-fjord-82967.herokuapp.com/api/persons'; //FIXME hw3.11
const baseUrl = '/api/persons';  //FIXME hw3.11 relative url used in static file access in backends build-dir
//const baseUrl = 'http://localhost:3001/api/persons';  //FIXME hw3.9
//const baseUrl = 'http://localhost:3001/persons';

// improved tapi's promise handled here, returns only the response.data

const getAllpromised = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);     // return request.then(response => { return response.data })
    //returns only data, look .then now handled here for the http data response and caller must handle .then for the 'pure' data
};

const createpromised = (newObject) => {
    const request=axios.post(baseUrl, newObject);
    return request.then(response => response.data);     // again post has also response, .then handled here
};
  

const updatepromised = (id, newObject) => {
    const request=axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response.data);
};
  
const deletepromised = (id) => {
    const request=axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data);
};

export default {  getAllpromised, createpromised, updatepromised, deletepromised }
