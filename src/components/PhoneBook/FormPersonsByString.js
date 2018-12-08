import React from 'react';
//https://reactjs.org/docs/components-and-props.html
//https://reactjs.org/docs/state-and-lifecycle.html     for Class
//https://stackoverflow.com/questions/41619166/react-can-a-child-component-send-value-back-to-parent-form/41626358
//https://stackoverflow.com/questions/48458334/functions-are-not-valid-as-a-react-child-this-may-happen-if-you-return-a-compon

// the parent is App and this is the child


class FormPersonsByString extends React.Component {

    componentDidMount() {               // mounting, method runs after the component output has been rendered to the DOM. This is a good place to set up a timer
        console.log('FormPersonsByString componentDidMount');
    };
  /**While this.props is set up by React itself and this.state has a special meaning, 
   * you are free to add additional fields to the class manually 
   * if you need to store something that doesn’t participate in the data flow (like a timer ID).
   * 
   */
    componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
        console.log('FormPersonsByString componentWillUnmount');
    }; 

 /** handler lifted too App parent
  */   
    
    render() {
      return (<>
        <form onChange={this.searchPerson}>
          <label><b>FormPersonsByString:</b>
            <input
            name="FormPersonsByStringInput"
            type="text"
            value={this.props.value}
            onChange={this.props.onChangeValue}
            />
          </label>
          <br></br>debug this.props.value: {this.props.value}
        </form>
        </>
      );
    };
  };
export default FormPersonsByString;
// tää on killeri           debug this.props.onChangeValue: {this.props.onChangeValue}
// thanx for finding that this causes the warning to mr. Joona in telegram..
// jos se häiritsee ni pistä vaik {`${onChangeValue}`} eli käytännös pistät sen stringiks
//const newHOCFormPersonsByString =   // do we need to do Higher order components to get rid of warnings?
/**Warning: Functions are not valid as a React child. 
 * This may happen if you return a Component instead of <Component /> from render. 
 * Or maybe you meant to call this function rather than return it.
 * 
 */
