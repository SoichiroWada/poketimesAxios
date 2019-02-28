import React from 'react'

class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // change code below this line
      this.handleChange = this.handleChange.bind(this);
      this.clear = this.clear.bind(this);
      // change code above this line
    }
    // change code below this line
    handleChange(event) {
      const update = event.target.value;
      this.setState({ input:update });
      console.log(this.state.input)
    }

    clear(){
      this.setState({ input:'' });
      console.clear();
    }

    // change code above this line
    render() {
      return (
        <div>
          { /* change code below this line */}
          <input value={this.state.input} onChange={this.handleChange}></input>
          <button onClick={this.clear} className="button">Clear</button>
          { /* change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };
  export default ControlledInput