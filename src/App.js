import React, { Component } from "react";
import TodoApp from "./components/TodoApp/TodoApp";
import Header from "./components/TodoApp/Header/Header";
import About from "./components/TodoApp/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router basename="/ToDo---React">
                <Header />
                <Routes>
                    <Route path="/" element={<TodoApp />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
