import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserList.scss";
import {
  getAllUsers,
  deleteUserService,
  handleEditUser,
} from "../../services/userService";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  getAllUsersFromReact = async () => {
    let response = await getAllUsers("ALL");
    if (response && !response.errCode) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  handleDeleteUser = async (user) => {
    try {
      let res = await deleteUserService(user.id);
      if (res && res.errCode === 0) {
        await this.getAllUsersFromReact();
      } else {
        alert(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    await this.getAllUsersFromReact();
  }

  render() {
    let arrUsers = this.state.arrUsers;
    console.log(arrUsers);
    return (
      <React.Fragment>
        <div className="user-table mt-3 mx-1">
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>PhoneNumber</th>
                <th>Birthday</th>
                <th>Actions</th>
              </tr>
              {/* like for loop */}

              {arrUsers &&
                arrUsers.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.email}</td>
                      <td>{item.fullName}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.birthday}</td>
                      <td className="btn-deleted">
                        <button
                          className="btn-delete"
                          onClick={() => this.handleDeleteUser(item)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
