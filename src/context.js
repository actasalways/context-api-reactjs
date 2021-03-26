import React, { Component } from "react";
import axios from "axios";

const userContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };

    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/users");
    this.setState({
      users: response.data,
    });
  };

  render() {
    const { children } = this.props;
    return (
      <userContext.Provider value={this.state}>{children}</userContext.Provider>
    );
  }
}

const userConsumer = userContext.Consumer;

export default userConsumer;
