import React from 'react'

import Heads from '../Heads.js';
import Foots from '../Foots.js';

class YaoYY extends React.Component {
  render(){
    return(
      <div className="YaoYY">
        <Heads></Heads>
        <div className="Ybodys">
          摇一摇
        </div>
        <Foots></Foots>
      </div>
    )
  }
}

export default YaoYY;