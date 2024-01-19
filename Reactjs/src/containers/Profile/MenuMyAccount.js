import React, { Component } from "react";
import { connect } from "react-redux";
import { bookingUserService } from "../../services/userService";
import "./MenuMyAccount.scss";
import { getAllUsers } from "../../services/userService";
import { path } from "../../utils";
import { Link } from "react-router-dom";

class MenuMyAccount extends Component {
    constructor(props) {
        super(props);
    }

    handleChooseUserOption = (id) => {
        localStorage.setItem("idUserOption", id);
        console.log(localStorage.getItem("idUserOption"));
    }

    render() {
        return (
            <React.Fragment>
                <div class="myAccount-nav">
                    <ul>
                        <Link to={path.PROFILE}>
                            <li class={localStorage.getItem("idUserOption") == 1 ? "active-nav" : ""} onClick={() => this.handleChooseUserOption(1)}>
                            {/* <li class="active-nav"> */}
                                <span class="material-symbols-outlined"> grid_view </span>
                                <a>Chi Tiết Tài Khoản</a>
                            </li>
                        </Link>
                        <Link to={path.ORDDETAIL}>
                            <li class={localStorage.getItem("idUserOption") == 2 ? "active-nav" : ""} onClick={() => this.handleChooseUserOption(2)}>
                                <span class="material-symbols-outlined">
                                    {" "}
                                    shopping_bag{" "}
                                </span>
                                <a>Đơn hàng</a>
                            </li>
                        </Link>
                        <Link to={path.HOMEPAGE}>
                            <li onClick={() => this.handleChooseUserOption(0)}>
                                <span class="material-symbols-outlined"> logout </span>
                                <a>Thoát</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuMyAccount);
