import React, { Component } from "react";
import { connect } from "react-redux";
import "./ProfilePageBida.scss";
import HeaderOrder from "../OrderBida/HeaderOrder";
import HeaderBida from "../HomePageBida/HeaderBida";
import SectionProfile from "./SectionProfile";
import Footer from "./Footer";

class ProfilePageBida extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="div-body">
          <HeaderOrder />
          <SectionProfile />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePageBida);
