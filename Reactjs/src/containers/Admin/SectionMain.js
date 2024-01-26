import React, { Component } from "react";
import { connect } from "react-redux";
import "./SectionMain.scss";
import { path } from "../../utils";
import { Link } from "react-router-dom";
class SectionMain extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="div-body">
          <div className="option-container">
            <div className="header-logo">
              <Link to={path.HOMEPAGE}>
                B<span className="span1">I</span>D
                <span className="span2">A</span> H<span>U</span>S
                <span className="span3">T</span>
              </Link>
            </div>
            <div className="options">
              <ul>
                <li className="sparkle u-hover--sparkle">
                  <a href="#" onClick={this.props.setUserList}>
                    Người dùng
                  </a>
                </li>
                <li className="sparkle u-hover--sparkle">
                  <a href="#" onClick={this.props.setBookingList}>
                    Đơn đặt bàn
                  </a>
                </li>
                <li className="sparkle u-hover--sparkle">
                  <a href="#" onClick={this.props.setRoomList}>
                    Phòng
                  </a>
                </li>
              </ul>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SectionMain);
