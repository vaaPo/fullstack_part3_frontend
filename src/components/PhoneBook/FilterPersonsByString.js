import React from 'react';
import PersonRow from './PersonRow';
import personsTAPI from './services/personsTAPI';
import Notification from '../Notification/Notification';    //notifications
import OkNotification from '../Notification/OkNotification';    //notifications

console.log("FilterPersonsByString.js - loading");


class FilterPersonsByString extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteId: null,
      noerror: null,
      error: null,
      speissi: '\u00A0'
    };
    console.log('PersonRow constructor');
    this.onPersonClickDel = this.onPersonClickDel.bind(this);
  };

  componentDidMount() {               // mounting, method runs after the component output has been rendered to the DOM. This is a good place to set up a timer
      console.log('PersonRow componentDidMount');
      console.log('PersonRow props',this.props);
  };
/**While this.props is set up by React itself and this.state has a special meaning, 
 * you are free to add additional fields to the class manually 
 * if you need to store something that doesn’t participate in the data flow (like a timer ID).
 * 
 */
  componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
      console.log('PersonRow componentWillUnmount');
  }; 

  onPersonClickDel(id,name) {
    if (window.confirm("Do you really want to delete this person.id: "+id)) { 
        const okmsg = "Deleted:"+this.state.speissi+name;
//      window.open("exit.html", "Thanks for Visiting!");
//        alert("FPBS onPersonClickDel for id "+this.state.speissi+id+this.state.speissi+"name:"+this.state.speissi+name);
        console.log("FPBS onPersonClickDel for id ",id,"name:",name);
        personsTAPI
            .deletepromised(id)
            .then(deletedPerson => {
//                alert("deletePromised"+id);
                this.props.onPersonClickDel(id);
                this.setState({
                    noerror: okmsg
                });
                setTimeout(() => {
                  this.setState({noerror: null})
                }, 5000);              });

      };
    };

  render() {
    var hit=[];
    if (this.props.searchstring!==null) {
      hit=this.props.persons.filter(obj => {return obj.name.toUpperCase().includes(this.props.searchstring) });
    } else {
      hit=this.props.persons;
    };
    console.log('FPBS searchstring',this.props.searchstring);
    console.log('FPBS persons',this.props.persons);
    console.log('FPBS hit',hit);
    const idth0 = "FPBS-TH-0";
    const idth1 = "FPBS-TH-1";
    const idth2 = "FPBS-TH-2";
    const idth3 = "FPBS-TH-3";

    const content =<><br></br><b>FilterPersonsByString:</b>{this.props.searchstring} 
                    <OkNotification message={this.state.noerror}/>
                    <Notification message={this.state.error}/>

                    <table id="filterpersontable" key="filterpersontable">
                    <tbody id="filterpersontbody" key="filterpersontbody">
                      <tr id="filterpersontableheader" key="filterpersontableheader">
                         <th id={idth0} key={idth0}>person.id</th>
                         <th id={idth1} key={idth1}>phonenumber</th>
                         <th id={idth2} key={idth2}>name</th>
                         <th id={idth3} key={idth3}>buttons</th>
                      </tr>
                      {hit.map(person=><PersonRow
                         key={person.id}
                         person={person}
                         onPersonClick={() => this.onPersonClickDel(person.id,person.name)}/>)}
                      </tbody>
                    </table>
                    </>;
    return (content);
  };
};

export default FilterPersonsByString;
