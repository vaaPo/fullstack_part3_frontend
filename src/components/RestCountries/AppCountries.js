import React from 'react';
import countriesTAPI from './services/countriesTAPI';
import FormCountriesByString from './FormCountriesByString';
import FilterCountriesByString from './FilterCountriesByString';
import Notification from '../Notification/Notification';    //notifications
import OkNotification from '../Notification/OkNotification';    //notifications



class AppCountries extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        countries: [],
        newsearchCountry: '',
        value: '',
        responsedatalength: '',
        error:null,
        noerror:null
      };
      console.log('AppCountries constructor');
      this.handleFormCountriesByString = this.handleFormCountriesByString.bind(this);
    };
  
  componentDidMount() {
      console.log('AppCountries did mount');
                    /**      axios
                    //        .get('http://localhost:3001/all_name_capital_population_flag_alpha3Code') //https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;alpha3Code
                            .get('https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;alpha3Code')
                            .then(response => {
                              console.log('AppCountries promise fulfilled');
                              this.setState({ countries: response.data });
                            });
                            */
        countriesTAPI
        .getAllpromised()
        .then(response => {
          this.setState({
            countries: response,
            noerror: 'countriesTAPI getAllpromised gets countries to you!'
          });
          setTimeout(() => {
            this.setState({noerror: null})
          }, 5000)
        });

    };
 
  componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('AppCountries componentWillUnmount');
    }; 

  handleFormCountriesByString = (event) => {
    console.log(event.target.value);
    //alert('handleFormCountriesByString event.target.value: ' + event.target.value);
    this.setState({
      value: event.target.value.toUpperCase(),
      newsearchCountry: event.target.value.toUpperCase()
    });
  };


  render() {
    console.log('AppCountries render');
    const fetchedcountries = this.state.countries;
    const  responsedatalength = this.state.countries.length; 
    console.log('AppCountries render responsedatalength',responsedatalength);
    //const haemut='Å';
    //const haemut='A';

    console.log('AppCountries fetchedcountries',fetchedcountries)
    return (<div id="AppCountries"><h4>AppCountries for HW2.13</h4>
        <p>uses axios to fetch countries from restcountries.eu</p>
        <p>components: FilterCountriesByString, FormCountriesByString</p>
        <OkNotification message={this.state.noerror}/>
        <Notification message={this.state.error}/>
        <FormCountriesByString value={this.state.value} onChangeValue={this.handleFormCountriesByString} />
        <div id="FilterCountriesByString"><FilterCountriesByString searchstring={this.state.newsearchCountry} countries={this.state.countries}/>
        </div>
        </div>
        );
    };
  };

export default AppCountries;
