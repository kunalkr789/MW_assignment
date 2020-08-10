import React, { Component } from "react";
import data from "../todo.json";
class ToDo extends Component {
  state = {
    todos: [],
  };

  async componentDidMount() {
    this.setState({ todos: data });
    //console.log(data);
  }
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.state.todos.map((todo) => (
            <li className="todo-card" key={todo.id}>
              {/* <div className="card card-accent-dark mb-3">
                <div className="card-body text-dark">
                  <h5 className="card-title">{todo.text}</h5>
                  <p className="card-text">{todo.Tags}</p>
                  <h5>{todo.created_at}</h5>
                </div>
              </div> */}
              <div className="content">
                <div className="left">
                  <h5 className="card-title">{todo.text}</h5>
                  <p className="card-text">{todo.Tags}</p>
                  <h5>{todo.created_at}</h5>
                </div>
                <div className="right">
                  {(() => {
                    if (todo.is_complete == true) {
                      return <div>Completed</div>;
                    } else {
                      return <div>Not Completed</div>;
                    }
                  })()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;
