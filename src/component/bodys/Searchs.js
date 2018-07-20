import React from 'react'
import Heads from '../Heads.js';
import Foots from '../Foots.js';

class Searchs extends React.Component {
  render(){
    return(
      <div className="Searchs">
        <Heads></Heads>
        <div className="Sbodys">
          搜索
        </div>
        <Foots></Foots>
      </div>
    )
  }
}

export default Searchs;