import React, { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
    // Initial state with input value, list items, index of the item being edited, and new value for editing
    state = {
        input: "",
        items: [],
        editingIndex: null,
        newValue: ""
    };

    // Load items from local storage when the component mounts
    componentDidMount() {
        const items = JSON.parse(localStorage.getItem("items"));
        if (items) {
            this.setState({ items });
        }
    }

    // Handle changes in the input field for new items
    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };

    // Store new items in the list
    storeItems = (event) => {
        event.preventDefault();
        const { input, items } = this.state;

        // Prevent adding empty items
        if (input.trim() === "") {
            return;
        }

        // Add new item to the list and clear the input field
        const updatedItems = [...items, input];
        this.setState({
            items: updatedItems,
            input: "",
        });

        // Save updated items to local storage
        localStorage.setItem("items", JSON.stringify(updatedItems));
    };

    // Delete an item from the list
    handleDelete = (index) => {
        const { items } = this.state;
        const updatedItems = items.filter((item, i) => i !== index);

        this.setState({
            items: updatedItems,
        });

        // Save updated items to local storage
        localStorage.setItem("items", JSON.stringify(updatedItems));
    };

    
    // Enable edit mode for a specific item
    handleEdit = (index) => {
        this.setState({ editingIndex: index, newValue: this.state.items[index] });
    };

    // Handle changes in the input field for editing items
    handleNewValueChange = (event) => {
        this.setState({ newValue: event.target.value });
    };

    // Update the item with the new value
    updateItem = (index) => {
        const { items, newValue } = this.state;
        const updatedItems = [...items];
        updatedItems[index] = newValue;

        // Clear edit mode after updating
        this.setState({
            items: updatedItems,
            editingIndex: null,
            newValue: ""
        });

        // Save updated items to local storage
        localStorage.setItem("items", JSON.stringify(updatedItems));
    };

    render() {
        const { input, items, editingIndex, newValue } = this.state;
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>TodoApp</h1>
                    <input
                        type="text"
                        value={input}
                        onChange={this.handleChange}
                        placeholder="Enter data..."
                    />
                </form>
                <ul className="ul-items">
                    {items.map((data, index) => (
                        <li key={index}>
                            {editingIndex === index ? (
                                // Render input and save button if the item is being edited
                                <div className="for-edit">
                                    <input
                                        type="text"
                                        value={newValue}
                                        onChange={this.handleNewValueChange}
                                    />
                                    <button onClick={() => this.updateItem(index)}>Save</button>
                                </div>
                            ) : (
                                // Render item and action icons if not in edit mode
                                <div className="for-icons">
                                    <div>{data}</div>
                                    <div className="editanddelete">
                                        <i
                                            className="fas fa-edit"
                                            onClick={() => this.handleEdit(index)}
                                        ></i>
                                        <i
                                            className="fa-solid fa-xmark"
                                            onClick={() => this.handleDelete(index)}
                                        ></i>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoApp;
