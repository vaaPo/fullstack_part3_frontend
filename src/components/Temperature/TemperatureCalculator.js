import React from 'react';
import TemperatureInput from './TemperatureInput';
import tryConvert from './TryConvert';
import toCelsius from './toCelsius';
import toFahrenheit from './toFahrenheit';
import BoilingVerdict from './BoilingVerdict';


//https://reactjs.org/docs/lifting-state-up.html
class TemperatureCalculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;             // see f --> c
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;       // see c --> f
  
      return (
        <div><h3>TemperatureCalculator</h3>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }
  export default TemperatureCalculator;
