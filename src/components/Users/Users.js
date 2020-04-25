import React from "react";
import Button from "@material-ui/core/Button";
import EnhancedTable from "./UserList";

const Users = () => {
    return <div>
        <div className="container__header">
            <h2>Users</h2>
            <Button variant="outlined" size="small" className="primary-button">Add User</Button>
        </div>
        <EnhancedTable />
    </div>;
}

export default Users;
