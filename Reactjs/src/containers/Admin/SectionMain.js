import React, { Component } from "react";
import { connect } from "react-redux";
import "./SectionMain.scss";

class SectionMain extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="div-body">
          <div class="navcontainer">
            <nav class="nav">
              <div class="nav-upper-options">
                <div
                  class="nav-option option1"
                  onClick={this.props.setUserList}
                >
                  <h3> Users List</h3>
                </div>

                <div
                  class="option2 nav-option"
                  onClick={this.props.setBookingList}
                >
                  <h3> Orders List</h3>
                </div>

                <div
                  class="nav-option option3"
                  onClick={this.props.setRoomList}
                >
                  <h3> Rooms List</h3>
                </div>
              </div>
            </nav>
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
