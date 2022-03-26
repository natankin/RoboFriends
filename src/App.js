import React,{Component} from 'react';
import './App.css';
import CardList from './CardList';
import Search from './Search';
import Scroll from './Scroll';

class App extends Component{
  constructor(){
  super();
  this.state={
    robots:[],
    searchText:""
  }
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response=>Response.json())
  .then(users=>this.setState({robots:users}))
};

onSearch=(event)=>{
 this.setState({searchText:event.target.value})
}

render(){
  const filter=this.state.robots.filter(robot=>{
    return robot.name.toLowerCase().includes(this.state.searchText.toLowerCase())
  })
  return(
    <div className='tc'>
      <h1 className='tc f1'>RoboFriends</h1>
      <Search findRobo={this.onSearch}/>
      <Scroll>
        <CardList robots={filter}/>
      </Scroll>
    </div>
  )
}
}



export default App;
