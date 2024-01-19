import React, { Component } from "react";
import { connect } from "react-redux";
import { bookingUserService } from "../../services/userService";
import "./SectionLocation.scss";

class SectionLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // console.log(this.state.isSelectedTime)
  }

  render() {
    return (
      <React.Fragment>
        <section class="section-location">
          <div class="wz-heading-container">
            <div class="wz-heading-inner">
              <span class="wz-heading-before"></span>
              <h2 class="wz-heading">TẤT CẢ CHI NHÁNH</h2>
              <span class="wz-heading-after"></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(SectionLocation);
