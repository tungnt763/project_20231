import React, { Component } from "react";
import { connect } from "react-redux";
import "./OrderDetailPage.scss";
import HeaderOrder from "../OrderBida/HeaderOrder";
import DetailTable from "./DetailTable";
import Footer from "../Profile/Footer";

class OrderDetailPage extends Component {
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
            <DetailTable />
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailPage);
