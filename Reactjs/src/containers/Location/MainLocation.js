import React, { Component } from "react";
import { connect } from "react-redux";
import "./MainLocation.scss";

class MainLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // console.log(this.state.isSelectedTime)
  }

  render() {
    return (
      <React.Fragment>
        <section class="main-section">
          <div class="container">
            <div class="main-content">
              <div class="tabs">
                <ul class="location-list">
                  <li class="active hanoi">
                    {" "}
                    <span class="eael-tab-title">HÀ NỘI</span>
                  </li>
                  <li class="inactive hcm">
                    {" "}
                    <span class="eael-tab-title">TP HỒ CHÍ MINH</span>
                  </li>
                  <li class="inactive ninhbinh">
                    {" "}
                    <span class="eael-tab-title">NINH BÌNH</span>
                  </li>
                  <li class="inactive nghean">
                    {" "}
                    <span class="eael-tab-title">NGHỆ AN</span>
                  </li>
                  <li class="inactive nhatrang">
                    {" "}
                    <span class="eael-tab-title">NHA TRANG</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLocation);
