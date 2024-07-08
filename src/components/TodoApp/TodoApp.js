import React, { Component } from "react";
import "./TodoApp.css";
class TodoApp extends Component {

    state= {
        input: "",
        items: []
    };

    handleChange = (event) => {
     this.setState( { input: event.target.value}, () => {        
     });
     console.log(this.state.input)
    };

    storeItems = (event) => {
        event.preventDefault();
        const {input} = this.state;

        if (input.trim() === "") {            
            return;
        }

        this.setState({
            items: [...this.state.items, input],
            input: ""
        })
    }

    handleDelete = (items) => {
        const allItems = this.state.items;
        allItems.splice(items, 1);

        this.setState({
            items: allItems
        })
        console.log(this.items);

    }

    render() {
        const { input , items } = this.state;
        console.log(items)
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>TodoApp</h1>
                    <input type="text" value={input} onChange={this.handleChange} placeholder="Enter data..."></input>
                </form>
                <ul className="ul-items">                    
                    {items.map((data, index) => (
                        <li key={index}>
                            {data} <i className="fa-solid fa-xmark" onClick={ () => this.handleDelete(index)}></i>
                        </li>
                    ))}                                 
                </ul>
            </div>
        );
    }
}

export default TodoApp;
