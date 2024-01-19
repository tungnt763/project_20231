import React, { Component } from "react";
import { connect } from "react-redux";
import "./LocationPageBida.scss";
import HeaderOrder from "../OrderBida/HeaderOrder";
import Footer from "../Profile/Footer";
import HeaderBida from "../HomePageBida/HeaderBida";
import SectionLocation from "./SectionLocation";
import MainLocation from "./MainLocation";
import LocationDetail from "./LocationDetail";

class LocationPageBida extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="div-body">
          {!localStorage.getItem("userName") ? <HeaderBida /> : <HeaderOrder />}{" "}
          <SectionLocation />
          <MainLocation />
          <LocationDetail />
          <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationPageBida);
