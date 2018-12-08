import axios from 'axios';
const baseUrl = 'http://localhost:3001/all_name_capital_population_flag_alpha3Code';    // local json-server handcrafted db.json with countries
//const baseUrl = 'https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;alpha3Code'; //remote url


// improved tapi's promise handled here, returns only the response.data
/**axios
//        .get('http://localhost:3001/all_name_capital_population_flag_alpha3Code') //https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;alpha3Code
        .get('https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;alpha3Code')
        .then(response => {
          console.log('AppCountries promise fulfilled');
          this.setState({ countries: response.data });
        });
 */

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
