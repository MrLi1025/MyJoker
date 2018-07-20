import React from 'react';
import Heads from '../Heads.js';
import Foots from '../Foots.js';
import axios from 'axios';
import '../../static/Mains.css';
import $ from 'jQuery';

import{
  // BrowserRouter as Router,
  // Route,
  Link
}from 'react-router-dom'

class Mains extends React.Component {

  constructor(props){
    super(props);
    this.state={
      list:[],
      page:1
    }
  }

  render(){
    return(
      <div className="Mains">
        <Heads></Heads>
        <div className="Mbodys">
          {
            this.state.list.map((vals,index)=>{
              return(
                <ul key={index}>
                  <li>
                    <img src="http://localhost:3000/Ama.jpg"/>
                    <span>某司机</span>
                  </li>
                  <li>
                    {vals.content}
                  </li>
                  <li>
                    <p>
                      <button onClick={this.GoodBtn.bind(this,vals.id)}>👍</button>
                      <span>{vals.hits}</span>
                      <button onClick={this.BadBtn.bind(this,vals.id)}>👎</button>
                      <Link to={`/TalkS/${vals.id}`}>✍</Link>
                    </p>
                    <p>
                      {vals.dateandtime}
                    </p>
                  </li>
                </ul>
              )
            })
          }
        </div>
        <Foots></Foots>
        <p className="tops" onClick={this.topBtn.bind(this)}>👆</p>
      </div>
    )
  }

  //渲染数据
  componentDidMount(){
    axios.get('http://guoxiao158.top/joke/getjoke.php').then(res=>{
      this.setState({
        list:res.data.dataList
      })
    })
  }

    componentWillMount(){

    window.addEventListener('scroll', () =>{
        console.log(document.documentElement.scrollTop);
        console.log(document.documentElement.clientHeight);
        console.log(document.body.scrollHeight);
          if(document.documentElement.scrollTop+document.documentElement.clientHeight+100>document.body.scrollHeight){
            var num=this.state.page
            num++;
            var pas=this.state.list;
            axios.get(`http://guoxiao158.top/joke/getjoke.php?page=${num}`).then((res)=>{
              pas.push(res.data.dataList[0])
              this.setState({
                list:pas,
                page:num
              })
          })
        }
      })
    }

  //点赞
  GoodBtn(ids){

    const urls = 'http://guoxiao158.top/joke/updata.php?id='+ids;

    axios.get(urls).then(res=>{
      console.log(res.data);

      this.componentDidMount()

    })


  }

  //取消点赞
  BadBtn(idp){

    const urls = 'http://guoxiao158.top/joke/cancel.php?id='+idp;

    axios.get(urls).then(res=>{
      console.log(res.data);

      this.componentDidMount()

    })
  }

  //回到顶部
  topBtn(){
    $("html,body").animate({scrollTop:0}, 500);
  }

}

export default Mains;