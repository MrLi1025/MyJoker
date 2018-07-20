import React from 'react'

import{
  BrowserRouter as Router,
  Route,
//  Link
}from 'react-router-dom'

import Mains from './component/bodys/Mains.js'
import Searchs from './component//bodys/Searchs.js'
import YaoYY from './component/bodys/YaoYY.js'
import Mines from './component/bodys/Mines.js'
import TalkS from './component/bodys/TalkS.js'

class Routers extends React.Component {
  render(){
    return(
      <Router>
        <div className="Routers">
          <Route exact path='/' component={Mains}></Route>
          <Route path='/Mains' component={Mains}></Route>
          <Route path='/YaoYY' component={YaoYY}></Route>
          <Route path='/Searchs' component={Searchs}></Route>
          <Route path='/Mines' component={Mines}></Route>
          <Route path='/TalkS/:id' component={TalkS}></Route>
        </div>
      </Router>
    )
  }
}

export default Routers;