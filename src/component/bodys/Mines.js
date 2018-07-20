import React from 'react'

import Heads from '../Heads.js';
import Foots from '../Foots.js';

class Mines extends React.Component {
  render(){
    return(
      <div className="Mines">
        <Heads></Heads>
        <div className="Mbodyp">
          我的
        </div>
        <Foots></Foots>
      </div>
    )
  }
}

export default Mines;