import React, { Component } from "react";
import { connect } from "react-redux";
import "./RoomList.scss";
import {
  getAllUsers,
  deleteUserService,
  handleEditUser,
  getAllOrders,
  getAllRooms,
} from "../../services/userService";

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrRooms: [],
    };
  }

  getAllRoomsFromReact = async () => {
    let response = await getAllRooms();
    console.log(response.errCode);
    if (response && !response.errCode) {
      this.setState({
        arrRooms: response.rooms,
      });
    }
  };

  async componentDidMount() {
    await this.getAllRoomsFromReact();
  }

  render() {
    let arrRooms = this.state.arrRooms;
    console.log(arrRooms);
    return (
      <React.Fragment>
        <div className="user-table mt-3 mx-1">
          <table id="customers">
            <tbody>
              <tr>
                <th>Loại phòng</th>
                <th>Chi nhánh</th>
                <th>Giá tiền</th>
                <th>Số phòng</th>
              </tr>
              {/* like for loop */}

              {arrRooms &&
                arrRooms.map((item, index) => {
                  return (
                    <tr>
                      <td>
                        {item.typeOfRoom == 0
                          ? "Phòng Cơ Bản"
                          : item.typeOfRoom == 1
                          ? "Phòng Chuyên Nghiệp"
                          : "Phòng Đặc Biệt"}
                      </td>

                      <td>{item.address}</td>
                      <td>
                        {item.typeOfRoom == 0
                          ? "40.000đ"
                          : item.typeOfRoom == 1
                          ? "50.000đ"
                          : "60.000đ"}
                      </td>
                      <td>{item.numberOfRoom}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);
