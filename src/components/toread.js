import React, { Component } from "react";
import data from "../toread.json";
class ToRead extends Component {
  state = {
    toread: [],
  };

  async componentDidMount() {
    this.setState({ toread: data });
  }
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.state.toread.map((tore) => (
            <li className="todo-card" key={tore.id}>
              <img src={tore.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{tore.text}</h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToRead;
