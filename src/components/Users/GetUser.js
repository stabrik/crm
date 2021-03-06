import React, { Component } from "react";
import UserList from "./UserList";
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = theme => ({
    position: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
    },
    color: {
        color: '#69B44A',
    }
});

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
        const { classes } = this.props;
        const { error, isLoaded } = this.state;

        if (error) {
            return <div>Błąd: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className={classes.position}><CircularProgress className={classes.color}/></div>;
        } else {
            return <UserList users={this.state.items}/>;
        }
    }
}

export default withStyles(useStyles)(GetUser);