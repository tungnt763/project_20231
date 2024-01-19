import React, { Component } from "react";
import { connect } from "react-redux";
import "./NewsPageBida.scss";
import HeaderOrder from "../OrderBida/HeaderOrder";
import Footer from "../Profile/Footer";
import HeaderBida from "../HomePageBida/HeaderBida";
import SectionNews from "./SectionNews";

class NewsPageBida extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="div-body">
          {!localStorage.getItem("userName") ? <HeaderBida /> : <HeaderOrder />}{" "}
          <SectionNews />
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsPageBida);
