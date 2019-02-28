import React from 'react'

class GateKeeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ input: event.target.value })
    }
    render() {
      let inputStyle = {
        border: '1px solid black'
      };
      console.log(this.state.input.length)
      // change code below this line
      if (this.state.input.length > 15){
        inputStyle = {
          border: '3px solid red'
        }
      }
  
      // change code above this line
      return (
        <div>
          <h3>Don't Type Too Much:</h3>
          <input
            type="text"
            style={inputStyle}
            value={this.state.input}
            onChange={this.handleChange} />
            <h1>{this.state.input}</h1>
        </div>
      );
    }
  };
  export default GateKeeper