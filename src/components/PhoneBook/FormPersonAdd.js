import React from 'react';
//https://reactjs.org/docs/components-and-props.html
//https://reactjs.org/docs/state-and-lifecycle.html     for Class
//https://stackoverflow.com/questions/41619166/react-can-a-child-component-send-value-back-to-parent-form/41626358
//https://stackoverflow.com/questions/48458334/functions-are-not-valid-as-a-react-child-this-may-happen-if-you-return-a-compon

// the parent is App and this is the child


class FormPersonAdd extends React.Component {

    componentDidMount() {               // mounting, method runs after the component output has been rendered to the DOM. This is a good place to set up a timer
        console.log('FormPersonAdd componentDidMount');
    };
  /**While this.props is set up by React itself and this.state has a special meaning, 
   * you are free to add additional fields to the class manually 
   * if you need to store something that doesn’t participate in the data flow (like a timer ID).
   * 
   */
    componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
        console.log('FormPersonAdd componentWillUnmount');
    }; 

 /** handler lifted too App parent
  */   
    //type="text"
    render() {
      return (<><h3>FormPersonAdd</h3>
        <form onSubmit={this.props.onSubmit}>
          <label>name: 
          <input
            name="addPersonInput"
            type="text"
            value={this.props.ValuePerson} 
            onChange={this.props.onChangeValuePerson}
          />
          </label><p>
          <label>phonenumber: 
          <input
            name="addPhonenumberInput"
            type="text"
            value={this.props.ValuePhonenumber} 
            onChange={this.props.onChangeValuePhonenumber}
          />
          </label></p>
          <button type="submit">FormPersonAdd tallenna person</button>
        </form>
        </>
      );
    };
  };
export default FormPersonAdd;
