import React, { Component } from "react";
import "./TodoApp.css";
class TodoApp extends Component {

    state= {
        input: "",
    };

    handleChange = (event) => {
     this.setState( { secondvalue: event.target.value}, () => {        
     });
     console.log(this.state.secondvalue);
    };

    render() {
        const { newvalue } = this.state;
        return (
            <div className="todo-container">
                <form className="input-section">
                    <h1>TodoApp</h1>
                    <input type="text" value={newvalue} onChange={this.handleChange} placeholder="Enter data..."></input>
                </form>
                <ul className="ul-items">
                    <li>
                        items <i className="fa-solid fa-xmark"></i>
                    </li>
                    <li>
                        items <i className="fa-solid fa-xmark"></i>
                    </li>
                    <li>
                        items <i className="fa-solid fa-xmark"></i>
                    </li>
                    <li>
                        items <i className="fa-solid fa-xmark"></i>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TodoApp;
