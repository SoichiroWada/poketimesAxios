import React from 'react'

class OnlyEvens extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('this.props.value:',this.props.value)
      console.log('Should I update?');
       // change code below this line
       if (nextProps.value % 2 === 0){
         return true;
       } else {
         return false;
       }
       // change code above this line
    }
    componentWillReceiveProps(nextProps) {
      console.log('Receiving new props...');
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>
    }
  };
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
      this.clearValue = this.clearValue.bind(this);
    }
    addValue() {
      console.log('this.state.value:',this.state.value)
      this.setState({
        value: this.state.value + 1
      });
    }
    clearValue(){
      this.setState({
        value: 0
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <button onClick={this.clearValue}>Clear</button>
          <OnlyEvens value={this.state.value}/>
        </div>
      );
    }
  };
  export default Controller