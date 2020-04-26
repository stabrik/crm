import React, { Component } from "react";
import UserList from "./UserList";
import CircularProgress from '@material-ui/core/CircularProgress';

class GetUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=5")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded } = this.state;

        if (error) {
            return <div>Błąd: {error.message}</div>;
        } else if (!isLoaded) {
            return <CircularProgress />;
        } else {
            return (
                <UserList users={this.state.items}/>
            );
        }
    }
}

export default GetUser;