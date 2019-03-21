import React, { Component } from 'react';

class Form extends Component {
    state = { 
        name:"mike",
        age: 22
     }
     handleChange = (e) => {
        this.setState({
          name: e.target.value
        })

     }
     handleSubmit = (e) => {
         e.preventDefault(e)
         console.log('form submitted', this.state.name)
     }
    render() { 
        return ( 
            <div>
                <h1>my name is {this.state.name} </h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <button>submit</button>
                </form>
            </div>
            
         );
    }
}
 
export default Form;