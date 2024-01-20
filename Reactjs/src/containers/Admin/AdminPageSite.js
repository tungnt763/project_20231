import React, { Component } from "react";
import { connect } from "react-redux";
import "./AdminPageSite.scss";
import SectionMain from "./SectionMain";
import UserList from "./UserList";
import BookingList from "./BookingList";
import RoomList from "./RoomList";

class AdminPageBida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserList: true,
      isBookingList: false,
      isRoomList: false,
    };
  }
  setUserList = () => {
    this.setState({
      isUserList: true,
      isBookingList: false,
      isRoomList: false,
    });
  };
  setBookingList = () => {
    this.setState({
      isUserList: false,
      isBookingList: true,
      isRoomList: false,
    });
  };
  setRoomList = () => {
    this.setState({
      isUserList: false,
      isBookingList: false,
      isRoomList: true,
    });
  };
  componentDidMount() {}

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div className="div-body-Admin">
          <SectionMain
            isUserList={this.state.isUserList}
            isBookingList={this.state.isBookingList}
            isRoomList={this.state.isRoomList}
            setUserList={this.setUserList}
            setBookingList={this.setBookingList}
            setRoomList={this.setRoomList}
          />
          {this.state.isUserList ? (
            <UserList />
          ) : this.state.isBookingList ? (
            <BookingList />
          ) : (
            <RoomList />
          )}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageBida);
