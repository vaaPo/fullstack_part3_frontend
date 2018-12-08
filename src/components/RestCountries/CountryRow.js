import React from 'react';
import Image from 'react-image-resizer';

class CountryRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showdetail: false,
    };
    console.log("CountryRow - loading");
    console.log("CountryRow - props", props);
    this.handleClick= this.handleClick.bind(this);

  };

componentDidMount() {
    console.log('CountryRow did mount');
  };

componentWillUnmount() {            // unmounting, We will tear down the timer in the componentWillUnmount() lifecycle method:
    console.log('CountryRow componentWillUnmount');
  }; 



handleClick() {
    this.setState(state => ({
      showdetail: !state.showdetail
    }));
    console.log('PUM',this.state.showdetail);
  };

render() {
//  country: this.props.country
//  responsedatalength: this.props.responsedatalength
  const country=this.props.country;
  const responsedatalength=this.props.responsedatalength;

  const name = <>{country.name}</>;
  const alpha3Code = <>{country.alpha3Code}</>;
  const capital = <><b>capital:</b> {country.capital}</>;
  const population = <><b>population:</b> {country.population}</>;
  const flag = <Image onClick={this.handleClick} src={country.flag} height={50} width={100}/>;
  console.log('CountryRow render this.state.showdetail',this.state.showdetail);

  if (responsedatalength===1 || this.state.showdetail===true) {
              const detail = <div id="detailcountryname" className="rowname" key={country.alpha3Code} onClick={this.handleClick}>{name}
                              <div id="capital" onClick={this.handleClick}>{capital}
                              <div id="population" onClick={this.handleClick}>{population}
                              <div id="alpha3" onClick={this.handleClick}>{alpha3Code}</div>
                              <div id="flag">{flag}
                              </div>
                              </div>
                              </div>
                              </div> ;
              return (detail);
    } else { 
//              const row=<><li>{country.alpha3Code} <div id="clickmerow" onClick={this.handleClick}>{country.name}</div></li></>;
              const row=<div id="rowcountryname" className="rowname" key={country.alpha3Code} onClick={this.handleClick}>{country.name}</div>;
              return (row);
//              return (<div id="clickmerow" onClick={this.handleClick}>{row}</div>);
              // eslint-disable-next-line
            };
};
};
export default CountryRow;
