import React, { Component } from 'react';

class App extends Component {
    state = {
        name: 'joe',
        age: 47

    }
    handleClick =(e) => {
        this.setState({
            name:"Paul",
            age:25
        })//how to change or access d state in our component



    }
    handleMouseOver(e){
        console.log(e.target, e.pageX)
    }
    handleCopy(e) {
        console.log('try being original for once')
    }


    render() { 
        
        return ( 
            
            <div>
                <h1>hey ninjaz</h1>
                <p>my name is: {this.state.name} and i am {this.state.age}years old</p>
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleMouseOver}>hover me</button>
                <p onCopy = {this.handleCopy}>what you think, you we become</p>
            </div>

         );
    }
}
 
export default App; 