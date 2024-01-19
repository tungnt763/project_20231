import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailTable.scss";
import MenuMyAccount from "../Profile/MenuMyAccount";
import { getAllOrders } from "../../services/userService"

class DetailTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrOrders: [],
        };
    }

    async componentDidMount() {
        await this.getAllOrdersFromReact();
    }

    getAllOrdersFromReact = async () => {
        let response = await getAllOrders(localStorage.getItem("id"));
        if (response && !response.errCode) {
            this.setState({
                arrOrders: response.orders,
            })
        }
    }

    render() {
        let arrOrders = this.state.arrOrders;
        console.log(arrOrders);
        return (
            <React.Fragment>
                <section class="body">
                    <div class="container">
                        <div class="content">
                            <MenuMyAccount />
                            <div class="order-information">
                                <h3 class="title">Đơn Đặt Bàn</h3>
                                <table class="account-orders-table">
                                    <thead>
                                        <tr>
                                            <th class="">LOẠI PHÒNG</th>
                                            <th class="">THỜI GIAN</th>
                                            <th class="">CHI NHÁNH</th>
                                            <th class="">GIÁ TIỀN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { arrOrders && arrOrders.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{item.typeOfRoom == 0 ? "Phòng Cơ Bản" : (item.typeOfRoom == 1 ? "Phòng Chuyên Nghiệp" : "Phòng Đặc Biệt")}</td>
                                                    <td>{"Ngày " + new Date(item.dateBooking).toLocaleDateString() + ": " + item.startTime + "h-" + item.endTime + "h."}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.totalPrice + "đ"}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailTable);
