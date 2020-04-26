import React from "react";
import Button from "@material-ui/core/Button";
import EnhancedTable from "./UserList";
import GetUser from "./GetUser";

const Users = () => {
    return <div>
        <div className="container__header">
            <h2>Users</h2>
            <Button variant="outlined" size="small" className="primary-button">Add User</Button>
        </div>
        <GetUser />

    </div>;
}

export default Users;
