import React from 'react'

const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      userInput:"",
      toDoList:[],
    }

    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = [...this.state.toDoList];
    // console.log(itemsArray);
    const id = new Date().getTime();
    // console.log(id);
    itemsArray.push({item:this.state.userInput, id:id})
    // const itemsArray = [{ item:"walk", id:1}, { item:"sing", id:2}]
    this.setState({
      toDoList: itemsArray,
      userInput:""
    });
    document.getElementById("textbox").focus();
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const listArray = this.state.toDoList;
    const lists = listArray.length ? (
      listArray.map(list => {
        return (
          <li key={list.id}>{list.item}</li>
        )
      })
    ) : (
      <div className="center">No todo items to show</div>
    );
    return (
      <div>
        <textarea
          id="textbox"
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" />
          <br />
        <button onClick={this.handleSubmit}>Submit</button>
        <h1>My "To Do" List:</h1>
        <ul>
          <h3>{lists}</h3>
        </ul>
      </div>
    );
  }
};
export default MyToDoList
