import React, { Component } from "react";
import { connect } from "react-redux";
import "./OrderPageBida.scss";
import HeaderOrder from "./HeaderOrder";
import HeaderBida from "../HomePageBida/HeaderBida";
import SectionOrder from "./SectionOrder";

class OrderPageBida extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="div-body">
          {!localStorage.getItem("userName") ? <HeaderBida /> : <HeaderOrder />}
          <SectionOrder />
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderPageBida);
