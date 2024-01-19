import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookingUserService } from '../../services/userService';
import './SectionOrder.scss';
import { path } from '../../utils/constant';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class SectionOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fullName: localStorage.getItem("userName"),
            phoneNumber: localStorage.getItem("phoneNumber"),
            isSelectedRoom: [false, false, false],
            typeOfRoom: -1,
            dateOfTime: [new Date(), new Date(new Date().getTime() + 24 * 60 * 60 * 1000), new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)],
            dateBooking: '',
            isSelectedDate: [false, false, false],
            isSelectedTime: Array(15).fill(false),
            startTime: -1,
            endTime: -1,
            priceRoom: [40000, 50000, 60000],
            totalPrice: 0,
            address: ["", "1 Ngõ 72 Trần Đại Nghĩa", "47 Thái Hà, Trung Liệt", "352 Giải Phóng, Phương Liệt", "86 Ngõ Giếng, Hoàng Cầu", "269 Kim Ngưu, Hai Bà Trưng", "139 Lò Đúc, Hai Bà Trưng", "Số 1 Đại Cồ Việt"
            , "72 Lý Tự Trọng, Quận 1", "2864 Phạm Thế Hiển, Quận 8", "175b Cao Thắng, Quận 10", "7WM5+P8H, Trường Yên, Hoa Lư", "Cù Chính Lan, Nhật Tân", "23 Bàu Sen, Hòa Hiếu, TX. Thái Hòa", "433 Phủ Qùy, Hòa Hiếu, TX. Thái Hòa",
            "139 Đường 1/5 - TT, Nghĩa Đàn", "E-07, KPTM Vinpearl Hòn Tre, Phường Vĩnh Nguyên"],
            addressSelected: "",
        }

        // console.log(this.state.isSelectedTime)
    }
    
    handleSelectedRoom = (id) => {
        let copyState = {...this.state}, cnt = 0;
        copyState.isSelectedRoom[id] = !copyState.isSelectedRoom[id];
        if (copyState.isSelectedRoom[id]) {
            copyState.typeOfRoom = id;
            copyState.isSelectedRoom[(id + 1) % 3] = false;
            copyState.isSelectedRoom[(id + 2) % 3] = false;
            copyState.isSelectedDate = [true, false, false];
            copyState.dateBooking = this.state.dateOfTime[0];
        }
        else {
            copyState.typeOfRoom = -1;
            copyState.isSelectedDate = [false, false, false];
            copyState.dateBooking = '';
        }
        copyState.isSelectedTime = Array(15).fill(false);
        copyState.totalPrice = 0;
        this.setState({
            ...copyState
        });
    }

    handleSelectedDate = (id) => {
        let copyState = {...this.state}, cnt = 0;
        copyState.dateBooking = this.state.dateOfTime[id];
        copyState.isSelectedDate[id] = true;
        copyState.isSelectedDate[(id + 1) % 3] = false;
        copyState.isSelectedDate[(id + 2) % 3] = false;
        copyState.isSelectedTime = Array(15).fill(false);
        copyState.totalPrice = 0;
        this.setState({
            ...copyState
        });
    }

    handleSelectedTime = (id) => {
        let copyState = {...this.state}, cnt = 0;
        copyState.isSelectedTime[id] = !copyState.isSelectedTime[id];
        // copyState.isSelectedDate[(id + 1) % 3] = false;
        // copyState.isSelectedDate[(id + 2) % 3] = false;
        copyState.startTime = copyState.isSelectedTime.indexOf(true);
        copyState.endTime = copyState.isSelectedTime.lastIndexOf(true);
        if (copyState.isSelectedTime[id]) {
            for (let i = copyState.startTime; i <= copyState.endTime; i++)
                copyState.isSelectedTime[i] = true;
        }
        else {
            for (let i = copyState.startTime; i <= copyState.endTime; i++)
                if (i <= id) copyState.isSelectedTime[i] = true;
                else 
                    copyState.isSelectedTime[i] = false;
            copyState.endTime = (id < copyState.endTime ? id : copyState.endTime);
        }
        copyState.totalPrice = copyState.priceRoom[copyState.typeOfRoom] * (copyState.endTime - copyState.startTime + 1);
        // console.log(copyState.startTime, copyState.endTime, copyState.isSelectedTime)
        this.setState({
            ...copyState
        });
    }

    handleSelectedAddress = (event) => {
        let copyState = {...this.state};
        copyState.addressSelected = event.target.value;
        this.setState({
            ...copyState
        });
    }

    handleOnChangeInput = (event, id) => {
        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
        // console.log(this.state)
    }

    handleBookingTable = async () => {
        let message = await bookingUserService(this.state);
        alert(message.errMessage);
        if (message.errCode == 0) {
            this.setState({
                isSelectedRoom: [false, false, false],
                typeOfRoom: -1,
                dateBooking: '',
                isSelectedDate: [false, false, false],
                isSelectedTime: Array(15).fill(false),
                startTime: -1,
                endTime: -1,
                totalPrice: 0,
                addressSelected: "",
            })
        }
        // console.log(message);
    }

    render() {
        let isSelectedTime = this.state.isSelectedTime;
        let address = this.state.address;
        return ( 
            <React.Fragment>
                <section class="section1">
                    <div class="wz-heading-container">
                        <div class="wz-heading-inner">
                            <span class="wz-heading-before"></span>
                            <h2 class="wz-heading">ĐẶT BÀN</h2>
                            <span class="wz-heading-after"></span>
                        </div>
                    </div>
                    <div class="form-border">
                        <div class="form">
                            <div>
                                <div class="name-inf">
                                    <label>Họ tên *</label>
                                    <input type="text" class="name-input" onChange={(event) => {this.handleOnChangeInput(event, "fullName")}} value={localStorage.getItem("userName")} required aria-required="true" />
                                </div>
                                <div class="div-extend-name"></div>
                            </div>

                            <div>
                                <div class="phone-inf">
                                    <label>Số điện thoại *</label>
                                    <input type="tel" class="phone-input" onChange={(event) => {this.handleOnChangeInput(event, "phoneNumber")}} value={localStorage.getItem("phoneNumber")} required aria-required="true"
                                    title="Vui lòng nhập số điện thoại theo định dạng 10 số." />
                                </div>
                                <div class="div-extend-phone"></div>
                            </div>

                            <div>
                                <div class="location-inf">
                                    <label>Chọn chi nhánh *</label>
                                    <div class="elementor-field elementor-select-wrapper ">
                                        <select name="form_fields[name]" id="myselect" class="location-select" required="required"
                                        aria-required="true" value={this.state.addressSelected} onChange={(event) => {this.handleSelectedAddress(event)}}>
                                            { address.map((item, index) => {
                                                return (
                                                    <option value={item}>{item}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div class="div-extend-location"></div>
                            </div>
                            <label class="room-label">Chọn Loại Phòng *</label>
                            <div>
                                <div class="container-card">
                                    <div class={!this.state.isSelectedRoom[0] ? "cards first-price" : "cards first-price active"} onClick={() => {this.handleSelectedRoom(0)}}>
                                        <div class="img coban-img"></div>
                                        <div class="check">
                                            <i class="far fa-circle" hidden={this.state.isSelectedRoom[0]}></i>
                                            <i class="fas fa-check-circle" hidden={!this.state.isSelectedRoom[0]}></i>
                                        </div>
                                        <div class="intro">
                                            <h2>Phòng Chơi Cơ Bản</h2>
                                            <p>Phòng Chơi<span> Cơ Bản</span> là phòng dành cho những người muốn chơi bida một cách thoải mái và
                                            không quá chuyên nghiệp. <br/>Giá tiền: 40.000đ/h </p>
                                        </div>
                                    </div>

                                    <div class={!this.state.isSelectedRoom[1] ? "cards second-price" : "cards second-price active"} onClick={() => {this.handleSelectedRoom(1)}}>
                                        <div class="img chuyennghiep-img"></div>
                                        <div class="check">
                                            <i class="far fa-circle" hidden={this.state.isSelectedRoom[1]}></i>
                                            <i class="fas fa-check-circle" hidden={!this.state.isSelectedRoom[1]}></i>
                                        </div>
                                        <div class="intro ">
                                            <h2>Phòng Chơi Chuyên Nghiệp</h2>
                                            <p>Phòng Chơi<span> Chuyên Nghiệp</span> là phòng dành cho những người chơi bida chuyên nghiệp hoặc
                                            muốn thách thức cao hơn. <br/>Giá tiền: 50.000đ/h </p>
                                        </div>
                                    </div>

                                    <div class={!this.state.isSelectedRoom[2] ? "cards third-price" : "cards third-price active"} onClick={() => {this.handleSelectedRoom(2)}}>
                                        <div class="img dacbiet-img"></div>
                                        <div class="check">
                                            <i class="far fa-circle" hidden={this.state.isSelectedRoom[2]}></i>
                                            <i class="fas fa-check-circle" hidden={!this.state.isSelectedRoom[2]}></i>
                                        </div>
                                        <div class="intro ">
                                            <h2>Phòng Chơi Đặc Biệt</h2>
                                            <p>Phòng Chơi<span> Đặc Biệt</span> là phòng dành cho khách hành muốn trải nghiệm không gian sang
                                            trọng hoặc không gian riêng tư. <br/>Giá tiền: 60.000đ/h </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="div-room"></div>
                            </div>

                            <label class="time-label" hidden={!this.state.isSelectedRoom[0] && !this.state.isSelectedRoom[1] && !this.state.isSelectedRoom[2]}>Thời gian *</label>
                            <div class="wrap-time" hidden={!this.state.isSelectedRoom[0] && !this.state.isSelectedRoom[1] && !this.state.isSelectedRoom[2]}>
                                <ul class="tabs group">
                                    <li onClick={() => {this.handleSelectedDate(0)}}> 
                                        {this.state.isSelectedDate[0] ? <a  class="active-time day1">{this.state.dateOfTime[0].toLocaleDateString()}</a> : <a  class="day1">{this.state.dateOfTime[0].toLocaleDateString()}</a>} 
                                    </li>
                                    <li onClick={() => {this.handleSelectedDate(1)}}>
                                        {this.state.isSelectedDate[1] ? <a  class="active-time day2">{this.state.dateOfTime[1].toLocaleDateString()}</a> : <a  class="day2">{this.state.dateOfTime[1].toLocaleDateString()}</a>}
                                    </li>
                                    <li onClick={() => {this.handleSelectedDate(2)}}>
                                        {this.state.isSelectedDate[2] ? <a  class="active-time day3">{this.state.dateOfTime[2].toLocaleDateString()}</a> : <a  class="day3">{this.state.dateOfTime[2].toLocaleDateString()}</a>}
                                    </li>
                                </ul>

                                <div id="content">
                                    <div id="one">
                                        { isSelectedTime.map((item, index) => {
                                            return (
                                                !item ? <button class="buttonDay" disabled={this.state.isSelectedDate[0] && (index + 8) < this.state.dateOfTime[0].getHours() ? true : false} onClick={() => {this.handleSelectedTime(index)}}>{(index + 8) + "h-" + (index + 9) + "h"}</button> : <button onClick={() => {this.handleSelectedTime(index)}} class="button-selected">{(index + 8) + "h-" + (index + 9) + "h"}</button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div class="div-time"></div>
                            <div class="price" hidden={!this.state.isSelectedRoom[0] && !this.state.isSelectedRoom[1] && !this.state.isSelectedRoom[2]}>
                                <label class="price-label">Giá tiền *</label>
                                <input type="text" class="price-output" value={this.state.totalPrice + "đ"} />
                            </div>
                        </div>
                        <div class="check-inf">
                            <button class="checkBtn" onClick={() => {this.handleBookingTable()}}>
                                ĐẶT BÀN NGAY
                            </button>
                            <div class="div-extend-check"></div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionOrder);