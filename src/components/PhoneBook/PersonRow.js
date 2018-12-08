import React from 'react';


class PersonRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteId: null
    };
    console.log('PersonRow constructor');
    this.onPersonClick = this.onPersonClick.bind(this);
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

  onPersonClick(id) {
 
    alert("PersonRow onPersonClick for this.props.person.id "+id);
    console.log("this.onPersonClick",id);
  };

  render() {

    const idCell0 = "cell-"+this.props.person.id+"-"+0;
    const idCell1 = "cell-"+this.props.person.id+"-"+1;
    const idCell2 = "cell-"+this.props.person.id+"-"+2;
    const idCell3 = "cell-"+this.props.person.id+"-"+3;
    const delbuttonId = "persondelbutton"+this.props.person.id;

    const trId = "personrowxxx"+this.props.person.id;

    const content= <>
                              <tr id={trId} key={trId}>
                                <td id={idCell0} key={idCell0}>{this.props.person.id}</td>
                                <td id={idCell1} key={idCell1}>{this.props.person.phonenumber}</td>
                                <td id={idCell2} key={idCell2}>{this.props.person.name}</td>
                                <td id={idCell3} key={idCell3}><button id={delbuttonId} 
                                                                       key={delbuttonId}
                                                                       type="submit" 
                                                                       className="button button3"
                                                                       onClick={() => this.props.onPersonClick(this.props.person.id)}>
                                                          del
                                                  </button>
                                                  </td>
                              </tr>
                  </>;

return (
    content
    );
  };
};

export default PersonRow;
