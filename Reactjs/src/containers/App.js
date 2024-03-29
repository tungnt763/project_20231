import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { history } from "../redux";
import { ToastContainer } from "react-toastify";

import {
  userIsAuthenticated,
  userIsNotAuthenticated,
} from "../hoc/authentication";

import { path } from "../utils";

import Home from "../routes/Home";
// import Login from '../routes/Login';
import Login from "./Auth/Login";

// import Header from './Header/Header';
import System from "../routes/System";

import { CustomToastCloseButton } from "../components/CustomToast";
import ConfirmModal from "../components/ConfirmModal";
import HomePageBida from "./HomePageBida/HomePageBida.js";
import OrderPageBida from "./OrderBida/OrderPageBida.js";
import ProfilePageBida from "./Profile/ProfilePageBida.js";
import OrderDetailPage from "./OrderDetail/OrderDetailPage.js";
import LocationPageBida from "./Location/LocationPageBida.js";
import NewsPageBida from "./News/NewsPageBida.js";
import AdminPageBida from "./Admin/AdminPageSite.js";

class App extends Component {
  // handleIsLoggedIn = (data) => {
  //     localStorage.setItem("userName", localStorage.getItem("userName"))
  // }

  handlePersistorState = () => {
    const { persistor } = this.props;
    let { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      if (this.props.onBeforeLift) {
        Promise.resolve(this.props.onBeforeLift())
          .then(() => this.setState({ bootstrapped: true }))
          .catch(() => this.setState({ bootstrapped: true }));
      } else {
        this.setState({ bootstrapped: true });
      }
    }
  };

  componentDidMount() {
    this.handlePersistorState();
  }

  render() {
    return (
      <Fragment>
        <Router history={history}>
          <div className="main-container">
            {this.props.isLoggedIn}
            <span className="content-container">
              <Switch>
                <Route path={path.HOME} exact component={Home} />
                <Route
                  path={path.LOGIN}
                  component={userIsNotAuthenticated(Login)}
                />
                <Route
                  path={path.SYSTEM}
                  component={userIsAuthenticated(System)}
                />
                <Route path={path.ORDER} component={OrderPageBida} />
                <Route path={path.HOMEPAGE} component={HomePageBida} />
                <Route path={path.PROFILE} component={ProfilePageBida} />
                <Route path={path.ORDDETAIL} component={OrderDetailPage} />
                <Route path={path.LOCATION} component={LocationPageBida} />
                <Route path={path.NEWS} component={NewsPageBida} />
                <Route path={path.ADMIN} component={AdminPageBida} />
              </Switch>
            </span>

            <ToastContainer
              className="toast-container"
              toastClassName="toast-item"
              bodyClassName="toast-item-body"
              autoClose={false}
              hideProgressBar={true}
              pauseOnHover={false}
              pauseOnFocusLoss={true}
              closeOnClick={false}
              draggable={false}
              closeButton={<CustomToastCloseButton />}
            />
          </div>
        </Router>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started: state.app.started,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
