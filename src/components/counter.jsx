import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    // console.log('prevState', prevState)
    //  if(prevProps.counter.value !== this.props.counter.value) {

    // }
}
    componentWillUnmount() {
      console.log('counter-Unmounted')
    }

  // handleIncrement = () => {
  //    this.setState({value : this.state.value + 1 });
  // }
  
  render() {
    console.log("counter-rendered")
    return (
      <div>
          {/* {this.state.tags.length === 0 && 'please create a new tag'} */}
        <span className ={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => {this.props.onIncrement(this.props.counters)}} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => {this.props.onDelete(this.props.counters.id)}} className="btn btn-danger bt-sm m-2">Delete</button>
           
      </div>
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counters.value === 0) ? "warning" : "primary";
        return classes;
    }

  formatCount() {
     const { value } = this.props.counters;
    return value === 0 ? "zero" : value;
  
  }

}

export default Counter;
