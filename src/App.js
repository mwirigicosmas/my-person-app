import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:'Cosmas', age: 24},
      {name:'Mwirigi', age:28},
      {name:'Mutethia', age: 30}
    ],
    otherValue: 'my names'

  }

  switchNameHandler = (newName) => {
    console.log(typeof this.switchNameHandler);
    // DO NOT CHANGE / MUTATE STATE DIRECTLY : this.state.persons[0].name = 'cosiiriggz';
    this.setState({
      persons:[
        {name:newName, age: 30},
        {name:'Riggz', age:15},
        {name:'COSIIRIGGZ', age: 24}
      ]
    });
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons:[
        {name:'Cosmas', age: 30},
        {name:event.target.value, age:15},
        {name:'COSIIRIGGZ', age: 24}
      ]
    });

  }
  render() {
    // =========================================================================
    // INLINE STYLING IN JAVASCRIPT
    // =========================================================================

    const style = {
      backgroundColor: 'blue',
      font:'inherit',
      border: '1px solid black',
      padding: '8px',
      color: 'white',
      cursor: 'pointer'

    }
    // =========================================================================
    // This is javascript XML JSX not html.
    // =========================================================================
    return (
      <div className="App">
        <h1>Hi am cosmas mwirigi a react developer</h1>
        <p>javascript is the language of the future</p>
        <button style = {style} onClick = {this.switchNameHandler.bind(this, 'MWIRIGI COSMAS')}>Switch Names</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age={this.state.persons[1].age} 
         click = {this.switchNameHandler.bind(this,'yeah!!')} 
         changed = {this.nameChangedHandler}>My hobbies: react apps
        </Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
     );
     
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a react app')   ); 
    
  }
}

export default App;
