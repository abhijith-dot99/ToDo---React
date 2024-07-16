import React from "react";

export default function About() {
    return (
        <div>
            <h1 style={{ color: "#fff", display: "flex", justifyContent: "center" }}>About</h1>
            <p style={{ textAlign: "center", margin: "10px 25px" }}>
                Our React Todo App offers a streamlined way to manage your tasks conveniently. It leverages the power of
                React for a responsive and intuitive user interface. What sets this app apart is its integration with
                browser local storage, ensuring your tasks are securely saved even if you close your browser or refresh the
                page. This means you can return to your tasks at any time without losing progress. Enjoy organizing your day
                with ease, knowing your tasks are always just a click away.
            </p>
        </div>
    );
}
