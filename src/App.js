import React, { Component } from 'react';
import CrimesList from './CrimesList/index'
import './CrimesList/crimes.css'

class App extends Component {
  state={
    crimes: []
  }
  getCrimes = async () =>{
    try{
      const crimes = await fetch('https://data.cityofchicago.org/resource/crimes.json')
      if(!crimes.ok) 
        throw Error()
      const crimesJSON = await crimes.json()
      this.setState({
        crimes: crimesJSON
      })
    }
    catch(error){
        console.log(error.stack)
        return error
    }
  }
  componentDidMount(){
    this.getCrimes().then(data => console.log(data))
  }
  deleteItem = (index, event) =>{
    this.setState(previousState=>({crimes: previousState.crimes.filter((crime, i)=>i!==index)
    }))
  }
  render() {
    return (
      <div className="App">
        <CrimesList crimes={this.state.crimes} delete={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
