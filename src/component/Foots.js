import React from 'react'

import{
  // BrowserRouter as Router,
  // Route,
  Link
}from 'react-router-dom'

class Foots extends React.Component {
  render(){
    return(
      <div className="Foots">
        <ul>
        <li><Link to='/Mains'>主页</Link></li>
          <li><Link to='/YaoYY'>摇一摇</Link></li>
          <li><Link to='/Searchs'>搜索</Link></li>
          <li><Link to='/Mines'>我的</Link></li>
        </ul>
      </div>
    )
  }
}

export default Foots;