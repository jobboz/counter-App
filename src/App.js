import React, { Component } from 'react';
import Navbar from './components/navbar'
import Counters from './components/counters';
import Ninjaz from './ninjaz';
import Addninja from './Addninja'

//container component
class App extends Component {
  state = { 
    counters:[
        {id:1, value: 4},
        {id:2, value: 0},
         {id:3, value: 0},
         {id:4, value: 0},
         {id:5, value: 0}
    ]
 }
 constructor()  {
   super()
   console.log("App-constructor")
 }
 componentDidMount () {
   console.log("App-mounted")
 }
 handleIncrement = (counters) => {
     const counter = [...this.state.counters]
     const index = counter.indexOf(counters)
     counter[index] = {...counters}
     counter[index].value++;
     console.log(this.state.counters[0])
     this.setState({
         counters: counter
     })
 }
 handleDelete = (counterId) => {
    const counters = this.state.counters.filter(counter => {
      return counter.id !== counterId
    })

    this.setState({
      counters
    })
    console.log('event handler clicked', counterId)
  }
  handleReset = () => {
      const counters = this.state.counters.map(counter => {
          counter.value = 0;
          return counter;
      })
      this.setState({
          counters
      })
  }
  

//   state = {
//   ninjaz : [
//     {name:'joe', age:26, belt:'black', id: 1},
//     {name:'paul', age:24, belt:'green', id: 2},
//     {name:'ben', age:20, belt:'red', id: 3}
//   ]
// }
// addNewNinja = (ninja) => {
// ninja.id = Math.random()
// let ninjas = [...this.state.ninjaz, ninja] //spread operator which was used to add new ninja
// this.setState({
//        ninjaz:ninjas
       
// })

// }
// //for deleting a particular ninja
// deleteNinja = (id) => {
//   let ninja = this.state.ninjaz.filter(ninja => {
//     return ninja.id !== id
//   })
//   this.setState({
//     ninjaz:ninja
//   })

// }
// componentDidMount ()  { //used or remembered when the component first mourt the dom
//   console.log('component mounted ')
// }
// componentDidUpdate (prevProps, prevState) {
//      console.log('component updated');
//      console.log(prevProps, prevState)
//} //used when we get a change of state or props
  render() {
    console.log("App-rendered")
    return (
      
      // <div className="App">
      //   <h1>My first react App!</h1>
      //   <p>Welcome :)</p>
      //   <Ninjaz deleteNinja={this.deleteNinja} ninjaz={this.state.ninjaz}/> 
      //   <Addninja addNewNinja={this.addNewNinja}/>
        
        
      // </div>
      <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
      <Counters
      counters={this.state.counters}
       onReset={this.handleReset}
       onIncrement={this.handleIncrement}
       onDelete={this.handleDelete} />
      </main>
    </React.Fragment>

    );
  }
}

export default App;
