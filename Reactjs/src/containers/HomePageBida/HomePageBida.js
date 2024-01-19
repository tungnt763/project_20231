import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import HeaderBida from "./HeaderBida";
import LoginWrapper from "./LoginWrapper";
import RegisterWrapper from "./RegisterWrapper";
import AboutBida from "./AboutBida";
import PlaceBida from "./PlaceBida";
import NewFeedBida from "./NewFeedBida";
import "./HomeBida.scss";
import "./HomePageBida.scss";
// import './SwiperBida.scss';
import { emitter } from "../../utils/emitter";
import HeaderOrder from "../OrderBida/HeaderOrder";
import { path } from "../../utils";
import { Link } from "react-router-dom/cjs/react-router-dom";

class HomePageBida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHiddenLogin: true,
      isHiddenRegister: true,
      isHiddenHome: false,
    };
  }

  componentDidMount() {}

  showLoginRegister = () => {
    this.setState({
      isHiddenRegister: this.state.isHiddenLogin,
      isHiddenLogin: !this.state.isHiddenLogin,
      isHiddenHome: true,
    });
    emitter.emit("EVENT_CLEAR_MODAL_DATA");
  };

  hideLoginRegister = () => {
    this.setState({
      isHiddenRegister: true,
      isHiddenLogin: true,
      isHiddenHome: false,
    });
    emitter.emit("EVENT_CLEAR_MODAL_DATA");
  };

  // handleIsLoggedInHomePage = (data) => {
  //     this.props.handleIsLoggedIn(data)
  // }

  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      console.log(response);
      if (response && response.errCode !== 0) {
        alert(response.errMessage);
      } else {
        this.hideLoginRegister();
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(localStorage);
    return (
      <div>
        {!localStorage.getItem("userName") ? (
          <HeaderBida
            isHiddenLogin={this.state.isHiddenLogin}
            showLoginRegister={this.showLoginRegister}
          />
        ) : (
          <HeaderOrder />
        )}

        <div class="home">
          <div class="home-img">
            <div class="home-content">
              <div class="home-content-desc" hidden={this.state.isHiddenHome}>
                <h1>
                  <span class="translate">Ethereum</span>
                </h1>
                <Link to={path.ORDER}>
                  <div class="btn btn-login">
                    <p>ĐẶT NGAY</p>
                    <span class="BorderTopBottom"></span>
                    <span class="BorderLeftRight"></span>
                  </div>
                </Link>
              </div>
              <LoginWrapper
                isHiddenLogin={this.state.isHiddenLogin}
                showLoginRegister={this.showLoginRegister}
                hideLoginRegister={this.hideLoginRegister}
                // isLoggedInApp={this.props.isLoggedInApp}
                // handleIsLoggedInHomePage={this.handleIsLoggedInHomePage}
              />
              <RegisterWrapper
                isHiddenRegister={this.state.isHiddenRegister}
                showLoginRegister={this.showLoginRegister}
                hideLoginRegister={this.hideLoginRegister}
                createNewUser={this.createNewUser}
              />
            </div>
          </div>
        </div>
        <AboutBida />
        <PlaceBida />
        <NewFeedBida />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePageBida);
