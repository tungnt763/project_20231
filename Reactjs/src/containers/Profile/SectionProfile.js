import React, { Component } from "react";
import { connect } from "react-redux";
import { bookingUserService } from "../../services/userService";
import "./SectionProfile.scss";
import { getAllUsers } from "../../services/userService";

class SectionProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };

    // console.log(this.state.isSelectedTime)
  }
  async componentDidMount() {
    await this.getAllUsersFromReact();
  }

  getAllUsersFromReact = async () => {
    let response = await getAllUsers(localStorage.getItem("id"));
    // console.log(response);
    if (response && !response.errCode) {
      this.setState({
        user: response.users,
      });
    }
  };
  render() {
    // this.componentDidMount();
    let user = this.state.user;
    // console.log(this.state.user);
    return (
      <React.Fragment>
        <section class="sectionProfile">
          <div class="container">
            <div class="content">
              <div class="myAccount-nav">
                <ul>
                  <li class="link-user-information active-nav">
                    <span class="material-symbols-outlined"> grid_view </span>
                    <a>Chi Tiết Tài Khoản</a>
                  </li>
                  <li class="link-order-details">
                    <span class="material-symbols-outlined">
                      {" "}
                      shopping_bag{" "}
                    </span>
                    <a>Đơn hàng</a>
                  </li>
                  <li class="link-exit">
                    <span class="material-symbols-outlined"> logout </span>
                    <a>Thoát</a>
                  </li>
                </ul>
              </div>

              <div class="myAccount-detail">
                <h3 class="account-sub-title">Thông Tin Tài Khoản Chi Tiết</h3>
                <div class="change-information">
                  <div class="title">Thay Đổi Thông Tin</div>
                  <form method="POST" id="change-information-form">
                    <div class="group-wrapper">
                      <div class="input-wrapper">
                        <input
                          type="text"
                          class="user-name"
                          value={user.fullName}
                          required
                        />
                        <label class="floating_label">Tên</label>
                      </div>
                      <div class="input-wrapper">
                        <input
                          type="text"
                          class="user_email"
                          value={user.email}
                          required
                        />
                        <label class="floating_label">Email</label>
                      </div>
                      <div class="input-wrapper">
                        <input
                          type="date"
                          class="user_birthday"
                          value={user.birthday}
                          required
                        />
                        <label class="label_birthday">Ngày sinh</label>
                      </div>
                      <div class="input-wrapper">
                        <input
                          type="text"
                          class="user_phone"
                          value={user.phoneNumber}
                          required
                        />
                        <label class="floating_label">Điện thoại</label>
                      </div>
                    </div>
                    <input
                      type="submit"
                      value="Cập Nhật"
                      class="submit-button"
                    />
                  </form>
                </div>
                <div class="line"></div>
                <div class="change-password">
                  <div class="title">Thay Đổi Mật Khẩu</div>
                  <form method="POST" id="change-past-form">
                    <div class="group-wrapper">
                      <div class="input-wrapper">
                        <input type="password" required />
                        <label>Mật Khẩu Hiện Tại</label>
                      </div>
                      <div class="input-wrapper">
                        <input type="password" required />
                        <label>Mật Khẩu Mới</label>
                      </div>
                      <div class="input-wrapper">
                        <input type="password" required />
                        <label>Xác Nhận Mật Khẩu</label>
                      </div>
                    </div>
                    <input type="submit" value="Cập Nhật" class="submit-pass" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionProfile);
