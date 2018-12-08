import React from 'react'
import Image from 'react-image-resizer';    //https://github.com/sottar/react-image-resizer

class Imagetest extends React.Component {
  render() {
    return (
      <div>
        <Image
          src="https://restcountries.eu/data/ala.svg"
          height={50}
        />
      </div>
    );
  };
};
export default Imagetest;
/**
 * <Image
          src="https://restcountries.eu/data/ala.svg"
          height={100}
          width={200}
        />
 */