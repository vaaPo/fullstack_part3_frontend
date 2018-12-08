import React from 'react';
import axios from 'axios';
import PersonRow from '../PhoneBook/PersonRow';

class AxiosDemoPersons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: []
    };
    console.log('constructor');
  };

  componentDidMount() {
    console.log('AxiosDemoPersons did mount');
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('AxiosDemoPersons promise fulfilled')
        this.setState({ persons: response.data })
      });
  };

  componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
    console.log('AxiosDemoPersons componentWillUnmount');
  }; 

  render() {
    console.log('AxiosDemoPersons render');
    // ...
    const fetchedpersons = this.state.persons;
    console.log('AxiosDemoPersons fetchedpersons',fetchedpersons)
    return (
          <p><b>AxiosDemoPersons:</b>{fetchedpersons.map(person=><PersonRow key={person.id} person={person}/>)}</p>
    );
  };
};
export default AxiosDemoPersons;