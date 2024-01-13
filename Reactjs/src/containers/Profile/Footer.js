import React, { Component } from "react";
import { connect } from "react-redux";
import { path } from "../../utils";
import { bookingUserService } from "../../services/userService";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // console.log(this.state.isSelectedTime)
  }

  render() {
    return (
      <React.Fragment>
        <section class="section2">
          <div class="col" style={{ width: "380px" }}>
            <div class="header-logo">
              <a href={"." + path.HOMEPAGE}>
                B<span class="span1">I</span>D<span class="span2">A</span>H
                <span>U</span>S<span class="span3">T</span>
              </a>
            </div>
            <h3>CÔNG TY CỔ PHẦN BIDAHUST</h3>
            <h4>Địa chỉ: Số 1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội</h4>
            <h4>Mail: Bidahust@gmail.com</h4>
            <h4>Hotline: 1900 6868</h4>
          </div>

          <div class="col">
            <h3>Mã số doanh nghiệp: 0316252275</h3>
            <h4>
              Số ĐKKD 0108370895 do Sở KHĐT TP. Hà Nội cấp ngày 20/07/2018
            </h4>
            <h3>Giấy chứng nhận ĐKKD</h3>
            <h4>Số 0315952588 do Sở Kế Hoạch và Đầu tư cấp ngày 09/10/2019</h4>
          </div>

          <div class="col-register">
            <h3>ĐĂNG KÝ NHẬN TIN</h3>
            <h4>Đăng ký nhận tin tức và ưu đãi mới nhất từ BIDAHUST.</h4>
            <div class="">
              <input
                type="text"
                placeholder="Email"
                class="email-receive-inf"
              />
            </div>
          </div>
        </section>

        {/* <footer class="footer">
          <div class="container">
            <div class="year">BIDAHUST ra đời 09/11/2023</div>
            <div class="icon-list">
              <i class="bx bxl-facebook"></i>
              <i class="bx bxl-instagram"></i>
              <i class="bx bxl-youtube"></i>
              <i class="bx bxl-tiktok"></i>
            </div>
          </div>
        </footer> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
