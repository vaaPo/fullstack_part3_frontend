import axios from 'axios';
//const baseUrl = 'http://localhost:3001/notes';
//const baseUrl = 'https://mysterious-fjord-82967.herokuapp.com/notes'; //FIXME hw3.11
const baseUrl = '/notes'; //FIXME hw3.11 relative url used in static file access in backends build-dir

// vanilla approach, returns promised which must be handled by the caller
const getAll = () => {
  return axios.get(baseUrl);                    // returns response from the http get, ugly but works, .then in caller
};

const create = (newObject) => {
    return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject);
};

// improved tapi's promise handled here, returns only the response.data

const getAllpromised = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);     // return request.then(response => { return response.data })
    //returns only data, look .then now handled here for the http data response and caller must handle .then for the 'pure' data
};

const getAllpromisedpaskaa = () => {                            // use to test that .catch works in toggleImportance  (cant toggle non-existent!)
    const request=axios.get(baseUrl);
        const nonExisting = {
          id: 10000,
          content: 'Tätä muistiinpanoa ei ole palvelimelta CLICKKAAMUA!!',
          date: '2017-12-10T17:30:31.098Z',
          important: true
        };
        return request.then(response => response.data.concat(nonExisting))
      };
      

const createpromised = (newObject) => {
    const request=axios.post(baseUrl, newObject);
    return request.then(response => response.data);     // again post has also response, .then handled here
};
  

const updatepromised = (id, newObject) => {
    const request=axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response.data);
};
  

export default { getAll, create, update, getAllpromised, createpromised, updatepromised, getAllpromisedpaskaa }
