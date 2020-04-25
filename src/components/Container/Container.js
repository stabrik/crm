import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";


const Container = () => {
    return (
        <Switch>
            <Route path="/about"><About /></Route>
            <Route path="/users"><Users /></Route>
            <Route path="/"><Home /></Route>
        </Switch>
    )
}

export default Container;

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}