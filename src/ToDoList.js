import React from "react";
import { Container } from "react-bootstrap";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    };
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    });
  }
  submitMessage() {
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input]
    });
  }

  render() {
    return (
      <Container>
        <div>
          <h2>Type in a new Message:</h2>
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.input}
          />
          <br />
          <button onClick={this.submitMessage.bind(this)}>Submit</button>
          <ul>
            {this.state.messages.map((x, i) => {
              return <li key={i}>{x}</li>;
            })}
          </ul>
        </div>
      </Container>
    );
  }
}
