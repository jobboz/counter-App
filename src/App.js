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
  


  render() {
    console.log("App-rendered")
    return (
      
      
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
