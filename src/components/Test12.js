import React from 'react'

class Results extends React.Component {
    // constructor(props) {
    //   super(props);
    // }

    changeColor(value){
      var color = value === undefined ? {color:"red"}
      : value === true ? {color:"blue"}
      : {color:"gray"} 
      return color;
    }

    render() {
      console.log('in render:',this.props.fiftyFifty)
      return (
        <h1 style={this.changeColor(this.props.fiftyFifty)}>
        {this.props.fiftyFifty === undefined ? "Fire !!!" 
        :this.props.fiftyFifty ? "You win!"
        :"You lose!"}
        </h1>
      )
    };
};
  
class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        counter: this.state.counter + 1
      });
    }
    render() {
      let random = Math.random();
      let expression = random < 0.33 ? true
      : random < 0.66 ? false
      : undefined;
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          <Results fiftyFifty={expression}></Results>
          <p>{'Turn: ' + this.state.counter}</p>
          <p>{'Random Number: ' + random}</p>
        </div>
      );
    }
};
export default GameOfChance