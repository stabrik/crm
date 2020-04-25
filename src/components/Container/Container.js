import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Users from '../Users/Users';

const Container = () => {
    return (
        <Switch>
            <Route path="/users"><Users /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/"><Home /></Route>
        </Switch>
    )
}

export default Container;

function Home() {
    return <div className="container__header">
        <h2>Home</h2>
    </div>;
}

function Contact() {
    return <div className="container__header">
        <h2>Contact</h2>
    </div>;
}