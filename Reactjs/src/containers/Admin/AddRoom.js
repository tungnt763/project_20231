import React, { Component } from "react";
import { connect } from "react-redux";
import "./AddRoom.scss";
import { addRoom } from "../../services/userService";

class AddRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfRoom: "0",
      address: "1 Ngõ 72 Trần Đại Nghĩa",
      numberOfRoom: "0",
    };
  }
  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
    console.log(copyState);
  };

  handleAddRoom = async () => {
    console.log(this.state);
    let data = await addRoom(this.state);
    alert(data.errMessage);
  };

  render() {
    let arrRooms = this.state.arrRooms;
    console.log(arrRooms);
    return (
      <React.Fragment>
        <div className="room-form">
          <div className="type-info">
            <label for="type-of-room">Loại Phòng</label>
            <select
              name="types"
              id="types"
              class="types-select"
              onChange={(event) =>
                this.handleOnChangeInput(event, "typeOfRoom")
              }
            >
              <option value="0">Phòng chơi đơn giản</option>
              <option value="1">Phòng chơi chuyên nghiệp</option>
              <option value="2">Phòng chơi đặc biệt</option>
            </select>
            <br />
          </div>
          <div className="address-info">
            <label for="address-of-room">Địa chỉ </label>
            <select
              name="address"
              id="address"
              class="address-select"
              onChange={(event) => this.handleOnChangeInput(event, "address")}
            >
              <option value="1 Ngõ 72 Trần Đại Nghĩa">
                1 Ngõ 72 Trần Đại Nghĩa
              </option>
              <option value="47 Thái Hà, Trung Liệt">
                47 Thái Hà, Trung Liệt
              </option>
              <option value="352 Giải Phóng, Phương Liệt">
                352 Giải Phóng, Phương Liệt
              </option>
              <option value="86 Ngõ Giếng, Hoàng Cầu">
                86 Ngõ Giếng, Hoàng Cầu
              </option>
              <option value="269 Kim Ngưu, Hai Bà Trưng">
                269 Kim Ngưu, Hai Bà Trưng
              </option>
              <option value="139 Lò Đúc, Hai Bà Trưng">
                139 Lò Đúc, Hai Bà Trưng
              </option>
              <option value="Số 1 Đại Cồ Việt">Số 1 Đại Cồ Việt</option>
              <option value="72 Lý Tự Trọng, Quận 1">
                72 Lý Tự Trọng, Quận 1
              </option>
              <option value="2864 Phạm Thế Hiển, Quận 8">
                2864 Phạm Thế Hiển, Quận 8
              </option>
              <option value="175b Cao Thắng, Quận 10">
                175b Cao Thắng, Quận 10
              </option>
              <option value="7WM5+P8H, Trường Yên, Hoa Lư">
                7WM5+P8H, Trường Yên, Hoa Lư
              </option>
              <option value="Cù Chính Lan, Nhật Tân">
                Cù Chính Lan, Nhật Tân
              </option>
            </select>
            <br />
          </div>
          <div className="number-info">
            <label for="number-of-room">Số lượng </label>
            <input
              type="number"
              className="number-input"
              onChange={(event) =>
                this.handleOnChangeInput(event, "numberOfRoom")
              }
            />
            <br />
          </div>
          <br />
          <input
            type="submit"
            value="Submit"
            className="submit-btn"
            onClick={() => {
              this.handleAddRoom();
            }}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddRoom);
