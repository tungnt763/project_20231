import React, { Component } from "react";
import { connect } from "react-redux";
import "./BookingList.scss";
import {
  getAllUsers,
  deleteUserService,
  handleEditUser,
  getAllOrders,
} from "../../services/userService";

class BookingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrBookings: [],
    };
  }

  getAllOrdersFromReact = async () => {
    let response = await getAllOrders("ALL");
    console.log(response.orders);
    if (response && !response.errCode) {
      this.setState({
        arrBookings: response.orders,
      });
    }
  };

  async componentDidMount() {
    await this.getAllOrdersFromReact();
  }

  render() {
    let arrBookings = this.state.arrBookings;
    console.log(arrBookings);
    return (
      <React.Fragment>
        <div className="user-table mt-3 mx-1">
          <table id="customers">
            <tbody>
              <tr>
                <th>Loại phòng</th>
                <th>Thời gian</th>
                <th>Chi nhánh</th>
                <th>Giá tiền</th>
              </tr>
              {/* like for loop */}

              {arrBookings &&
                arrBookings.map((item, index) => {
                  return (
                    <tr>
                      <td>
                        {item.typeOfRoom == 0
                          ? "Phòng Cơ Bản"
                          : item.typeOfRoom == 1
                          ? "Phòng Chuyên Nghiệp"
                          : "Phòng Đặc Biệt"}
                      </td>
                      <td>
                        {"Ngày " +
                          new Date(item.dateBooking).toLocaleDateString() +
                          ": " +
                          item.startTime +
                          "h-" +
                          item.endTime +
                          "h."}
                      </td>
                      <td>{item.address}</td>
                      <td>{item.totalPrice + "đ"}</td>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingList);
