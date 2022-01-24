import React from "react";
import Bool from "../Bool/Bool.component";
import Puzzle from "../Puzzle/Puzzle.Component";
import VideoGame from "../VideoGame/VideoGame.Component";
class Toy extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        company: "",
        age: ""
      }
      this.updateToy = this.updateToy.bind(this);
        this.updateState = this.updateState.bind(this);
  }
  componentWillMount(){
    alert("hii welcome to my store");
}
componentDidMount(){
    console.log("state change");
}
componentWillUpdate(){
    alert("before the change");
}
componentDidUpdate(){
    console.log("after the change");
}

updateToy(event) {
    this.state[event.target.name] = event.target.value;
}
updateState() {
    this.setState(this.state);
}

render() {
    let {companyName, age} = this.state;
    return (
        <div>
            <h1>NameToy: {this.props.NameToy}</h1> <br />
            <h3>Company : {companyName}</h3> <br />
            <h3>Age: {age}</h3> <br />
            <label>Company name</label> <br />
            <input name="companyName" onChange={(event) => { this.updateToy(event) }} type="text" /> <br />
            <label>Age</label> <br />
            <input name="age" onChange={(event) => { this.updateToy(event) }} type="number" /> <br />
            <button onClick={this.updateState}>Click</button> 
            <Puzzle/>
            <VideoGame/>
            <Bool/>
            </div>);
  }
}
export default Toy;
