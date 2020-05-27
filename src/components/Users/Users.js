import React from "react";
import Button from "@material-ui/core/Button";
import GetUser from "./GetUser";

const Users = () => {
    return <div>
        {console.log(1223)}
        <div className="container__header">
            <h2>Users</h2>
            <Button variant="outlined" size="small" className="primary-button">Add User</Button>
        </div>
        <GetUser />
    </div>;
}

export default Users;
