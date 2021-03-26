import React, { Component } from "react";
import propTypes from "prop-types";
import UserConsumer from "../context";
import axios from "axios";

export class User extends Component {
  state = {
    isVisible: false,
  };

  static defaultProps = {
    name: "No İnformation",
    job: "No İnformation",
  };

  onClickEvent = (number, e) => {
    //console.log(e.target);
    //console.log(this);
    //console.log(number);

    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = async (dispatch, e) => {
    
    
    console.log("onDelete");
    
    
    const { id } = this.props;
    // Delete Request
    await axios.delete(`http://localhost:3004/users/${id}`);

    // Consumer Dispatch
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };

  componentWillUnmount() {
    console.log("componentWillUnmountt");
  }

  render() {
    //Destructing
    const { name, job } = this.props;

    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="col-md-8 mb-4">
              <div
                className="card"
                style={
                  isVisible
                    ? { backgroundColor: "#696969", color: "whitesmoke" }
                    : null
                }
              >
                <div className="card-header d-flex justify-content-between">
                  <h4
                    style={{ cursor: "pointer" }}
                    className="d-inline"
                    onClick={this.onClickEvent.bind(this, 34)}
                  >
                    Name : {name}
                  </h4>

                  <i
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                    className="far fa-trash-alt"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>

                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text"> Job: {job} </p>
                    <p> {this.state.test} </p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

User.propTypes = {
  name: propTypes.string.isRequired,
  job: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default User;
