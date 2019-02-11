import React, { Component } from 'react';
import mc from './mc.jpg';
import josh from './josh.jpg';
import zelda from './zelda.jpg';
import './App.css';

class Profil extends Component{

  constructor(props)
  {
    super(props)
    this.state={
      bgrd:'coral'
    }
  }

  changement(){
    if(this.state.bgrd == '#515A5A')
    {this.setState({bgrd:'coral'})}

    if(this.state.bgrd == 'coral')
    {this.setState({bgrd:'yellow'})}

    if(this.state.bgrd == 'yellow')
    {this.setState({bgrd:'#515A5A'})}
   
  }


render() {
  return (
    <div className="PP" style ={{background:this.state.bgrd}}>
      <img className="Photo" src ={this.props.image}></img>
      <h2>{this.props.surname}{this.props.name}</h2>
      <h3>{this.props.birth}</h3>
      <button className="Bouton" onClick={()=>{this.changement()}}>Change Background</button>
    </div>
  );
}
}

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state= {
      image:mc,
      surname:'Marie-Caroline',
      name:' Dupont',
      birth:'5/10/1987'
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="Titre">Facebook</h1>


        <header className="Header">
        <button className="Profil"onClick={()=>{this.setState({image:mc, surname:'Marie-Caroline ', name:'Dupont', birth:'5/10/1987'})}}>Marie-Caroline</button>
        <button className="Profil"onClick={()=>{this.setState({image:josh, surname:'Josh ', name:'Hart', birth:'5/1/1986'})}}>Josh</button>
        <button className="Profil"onClick={()=>{this.setState({image:zelda, surname:'Zelda ', name:'Zorok', birth:'5/7/1997'})}}>Zelda</button>
        </header>

        <Profil image={this.state.image} surname={this.state.surname} name={this.state.name} birth={this.state.birth}/>

        
       </div>
    );
  }
}
export default App;
