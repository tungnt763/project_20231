import React, { Component } from "react";
import { connect } from "react-redux";
import "./SectionProfile.scss";
import { getAllUsers, editUserInfoService } from "../../services/userService";
import MenuMyAccount from "./MenuMyAccount";

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

  doEditUserInfo = async(user) => {
      try {
          let res = await editUserInfoService(user);
          if (res && res.errCode === 0) {
              await this.getAllUsersFromReact()
          }
          else {
              alert(res.errCode)
          }
      } catch(e) {
          console.log(e)
      }
  }

  checkValidateInputInfo = () => {
    let arrInput = ['email', 'fullName', 'birthday']
    for (let i = 0; i < arrInput.length; i++) {
        if (!this.state[arrInput[i]]) {
            // alert('Missing parameter: ' + arrInput[i]);
            return false;
        }
    }
    return true;
  }

  handleOnChangeInput = (event, id) => {
    // good code
    let copyState = {...this.state};
    copyState["user"][id] = event.target.value;
    this.setState({
        ...copyState
    });
  }

  handleUpdateUserInfo = () => {
    let isValid = this.checkValidateInputInfo();
    if (isValid) {
        this.doEditUserInfo(this.state.user);
    }
  }

  render() {
    // this.componentDidMount();
    let user = this.state.user;
    console.log(this.state.user);
    return (
      <React.Fragment>
        <section class="sectionProfile">
          <div class="container">
            <div class="content">
              <MenuMyAccount />

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
                          onChange={(event) => {this.handleOnChangeInput(event, "fullName")}}
                          required
                        />
                        <label class="floating_label">Tên</label>
                      </div>
                      <div class="input-wrapper">
                        <input
                          type="text"
                          class="user_email"
                          value={user.email}
                          onChange={(event) => {this.handleOnChangeInput(event, "email")}}
                          required
                        />
                        <label class="floating_label">Email</label>
                      </div>
                      <div class="input-wrapper">
                        <input
                          type="date"
                          class="user_birthday"
                          value={user.birthday}
                          onChange={(event) => {this.handleOnChangeInput(event, "birthday")}}
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
                      onClick={() => {this.handleUpdateUserInfo()}}
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
