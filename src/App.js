import React,{Component} from 'react';
import './App.css';
import CardList from './CardList';
import Search from './Search';
import Scroll from './Scroll';
import NameForm from './NameForm';

class App extends Component{
  constructor(){
  super();
  this.state={
    robots:[],
    searchText:"",
    valueName:'',
    valueEmail:''
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChangeEmail = this.handleChangeEmail.bind(this);
  
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response=>Response.json())
  .then(users=>this.setState({robots:users}))
  
};

handleChange(event) {
  this.setState({valueName: event.target.value});
}
handleChangeEmail(event) {
  this.setState({valueEmail: event.target.value});
}
handleSubmit(event) {
  let obj={};
  alert('A Robot was submitted: ' + this.state.valueName);
  obj={
    id:this.state.robots.length+1,
    name:this.state.valueName,
    email:this.state.valueEmail
  }
  this.state.robots.push(obj)
  this.setState({value:''})
  event.preventDefault();
}

onSearch=(event)=>{
 this.setState({searchText:event.target.value})
 console.log(event.target.value)
}

render(){
  console.log(this.state.robots)
  const filter=this.state.robots.filter(robot=>{
    return robot.name.toLowerCase().includes(this.state.searchText.toLowerCase())
  })
  return(
    <div className='tc'>
      <h1 className='tc f1'>RoboFriends</h1>
      <div className='top'>
        <Search findRobo={this.onSearch}/> 
        <NameForm addName={this.state.valueName} changeEmail={this.handleChangeEmail} addEmail={this.state.valueEmail} changeName={this.handleChange} submit={this.handleSubmit} />
      </div>
      <Scroll>
        <CardList robots={filter}/>
      </Scroll>
    </div>
  )
}
}



export default App;
