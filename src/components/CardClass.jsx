import { Component } from "react";
import "./Card.css";
// class base component
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  // method
  increment() {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  }

  // method
  render() {
    return (
      <>
        <div className="card" style={{ backgroundColor: this.props.bgColor }}>
          <div className="card-title">{this.props.title}</div>
          <div className="card-body">{this.props.body}</div>
          <span> count {this.state.count}</span>
          <button onClick={this.increment}>increase</button>
        </div>
      </>
    );
  }
}

export default Card;
