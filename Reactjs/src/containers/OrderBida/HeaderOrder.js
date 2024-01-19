import React, { Component } from "react";
import { connect } from "react-redux";
import { path } from "../../utils";
import "./HeaderOrder.scss";
import { Link } from "react-router-dom";

class HeaderOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHiddenUserOption: true,
    };
  }

  handleShowUserOption = () => {
    this.setState({
      isHiddenUserOption: !this.state.isHiddenUserOption,
    });
  };

  handleLogout = () => {
    localStorage.removeItem("userName");
    console.log(localStorage.length);
  };

  handleChooseUserOption = (id) => {
    localStorage.setItem("idUserOption", id);
  }

  render() {
    let userName = localStorage.getItem("userName");
    return (
      <React.Fragment>
        <header className="header">
          <div className="header-container">
            <div className="header-logo">
              <Link to={path.HOMEPAGE}>
                B<span className="span1">I</span>D
                <span className="span2">A</span> H<span>U</span>S
                <span className="span3">T</span>
              </Link>
            </div>
            <div className="header-nav">
              <ul>
                <li className="sparkle u-hover--sparkle">
                  <a href={"." + path.ORDER}>Đặt bàn</a>
                </li>
                <li className="sparkle u-hover--sparkle">
                  <a href="./location.html">Địa điểm</a>
                </li>
                <li className="sparkle u-hover--sparkle">
                  <a href="#">Loại bàn</a>
                </li>
                <li className="sparkle u-hover--sparkle">
                  <a href="./news.html">Tin tức</a>
                </li>
                <li className="sparkle u-hover--sparkle">
                  <a href="#">Sự kiện</a>
                </li>
                <li className="sparkle u-hover--sparkle">
                  <a href="#">Tuyển dụng</a>
                </li>
              </ul>
            </div>
            <div className="header-contact">
              <img
                src="https://warningzone.com/wp-content/themes/oceanwp-child-theme-master/assets/images/phone-call.svg"
                alt="Call"
              />
              <p>1900 6868</p>
              <img
                className="user-pic"
                src="../"
                onClick={() => {
                  this.handleShowUserOption();
                }}
              />
              <div
                className="sub-menu-wrap"
                hidden={this.state.isHiddenUserOption}
              >
                <div className="sub-menu">
                  <div className="user-info">
                    {/* <img src={require('../../assets/img/user.png')}/> */}
                    <h2>{userName}</h2>
                  </div>
                  <hr />
                  <a
                    href={"." + path.PROFILE}
                    onClick={() => {this.handleChooseUserOption(1)}}
                    className="sub-menu-link user-information"
                  >
                    <i className="fas fa-user-edit"></i>
                    <p>Edit Profile</p>
                  </a>
                  <a 
                    href={"." + path.ORDDETAIL} 
                    onClick={() => {this.handleChooseUserOption(2)}}
                    className="sub-menu-link user-order">
                    <i className="fas fa-shopping-cart"></i>
                    <p>Orders</p>
                  </a>
                  <Link
                    to={path.HOME}
                    className="sub-menu-link user-logout"
                    onClick={() => {
                      this.handleLogout();
                    }}
                  >
                    <i className="fas fa-sign-out-alt"></i>
                    <p>Logout</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderOrder);
