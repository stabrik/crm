import React from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
//
// const Login = () => {
//     return (
//         <h1>Login</h1>
//     )
// }
//
// export default Login;
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter, Switch
} from "react-router-dom";
import Users from "../Users/Users";

// const {
//     BrowserRouter: Router,
//     Route,
//     Link,
//     Redirect,
//     withRouter
// } = ReactRouterDOM

const fakeAuth = {
    isAuthenticated: false,
    authenticate(callback) {
        this.isAuthenticated = true
        setTimeout(callback, 100) // fake async
    },
    signout(callback) {
        this.isAuthenticated = false
        setTimeout(callback, 100) // fake async
    }
}


class Login extends React.Component {
    state = {
        redirectToReferer: false
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState(() => ({
                redirectToReferer: true
            }))
        })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferer } = this.state

        if (redirectToReferer === true) {
            return <Redirect to={from} />
        }

        return (
            <div>
                <p>You must login to view the page</p>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

const test = () => {
    return <>
    <Navbar/>
    <section className="container">
        <Container />
    </section>
    </>
}

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

const Autho = withRouter(({ history }) => (
    <Router>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={test} />
        <Route path="/users"><Users /></Route>
        <Route path="/contact"><Contact /></Route>

        {/*<button onClick={() => {*/}
        {/*    fakeAuth.signout(() => history.push('/'))*/}
        {/*}}>*/}
        {/*    Sign out*/}
        {/*</button>*/}
    </Router>
))

export default Autho;
