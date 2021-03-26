import React, { Component } from "react";
import { User } from "./User";
import UserConsumer from "../context";

class Users extends Component {
  render() {
    //console.log(this.props);

    return (
      <UserConsumer>
        {(value) => {
          const { users } = value; 

          return (
            <div>
              {users.map((users) => {
                return (
                  <User
                    key={users.id}
                    id={users.id}
                    name={users.name}
                    job={users.job}

                  />
                );
              })}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Users;
