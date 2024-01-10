import React, { Component } from 'react';
import { connect } from 'react-redux';
import { path } from '../../utils';
import './SectionOrder.scss';

class SectionOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSelectedRoom: [false, false, false],
            dateOfTime: [new Date(), new Date(new Date().getTime() + 24 * 60 * 60 * 1000), new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)],
            isSelectedDate: [false, false, false],
        }

        console.log(this.state.dateOfTime)
    }
    
    handleSelectedRoom = (id) => {
        let copyState = {...this.state}, cnt = 0;
        copyState.isSelectedRoom[id] = !copyState.isSelectedRoom[id];
        if (copyState.isSelectedRoom[id]) {
            copyState.isSelectedRoom[(id + 1) % 3] = false;
            copyState.isSelectedRoom[(id + 2) % 3] = false;
            copyState.isSelectedDate = [true, false, false];
        }
        else {
            copyState.isSelectedDate = [false, false, false];
        }
        this.setState({
            ...copyState
        });
    }

    handleSelectedDate = (id) => {
        let copyState = {...this.state}, cnt = 0;
        copyState.isSelectedDate[id] = true;
        copyState.isSelectedDate[(id + 1) % 3] = false;
        copyState.isSelectedDate[(id + 2) % 3] = false;
        this.setState({
            ...copyState
        });
    }

    render() {
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
                                    <input type="text" class="name-input" required aria-required="true" />
                                </div>
                                <div class="div-extend-name"></div>
                            </div>

                            <div>
                                <div class="phone-inf">
                                    <label>Số điện thoại *</label>
                                    <input type="tel" class="phone-input" required aria-required="true"
                                    title="Vui lòng nhập số điện thoại theo định dạng 10 số." />
                                </div>
                                <div class="div-extend-phone"></div>
                            </div>

                            <div>
                                <div class="location-inf">
                                    <label>Chọn chi nhánh *</label>
                                    <div class="elementor-field elementor-select-wrapper ">
                                        <select name="form_fields[name]" id="myselect" class="location-select" required="required"
                                        aria-required="true">
                                        <option value=""></option>
                                        <option value="1 Ngõ 72 Trần Đại Nghĩa">1 Ngõ 72 Trần Đại Nghĩa, Hai Bà Trưng, Hà Nội</option>
                                        <option value="47 Thái Hà, Trung Liệt">47 Thái Hà, Trung Liệt, Đống Đa, Hà Nội</option>
                                        <option value="352 Giải Phóng, Phương Liệt">352 Giải Phóng,Phương Liệt, Thanh Xuân,Hà Nội</option>
                                        <option value="86 Ngõ Giếng, Hoàng Cầu">86 Ngõ Giếng, Hoàng Cầu, Hà Nội</option>
                                        <option value="269 Kim Ngưu, Hai Bà Trưng">269 Kim Ngưu, Hai Bà Trưng, Hà Nội</option>
                                        <option value="139 Lò Đúc, Hai Bà Trưng">139 Lò Đúc, Hai Bà Trưng,Hà Nội</option>
                                        <option value="Số 1 Đại Cồ Việt">Số 1 Đại Cồ Việt,Hai Bà Trưng, Hà Nội</option>
                                        <option value="72 Lý Tự Trọng, Quận 1">72 Lý Tự Trọng, Quận 1, Thành phố Hồ Chí Minh</option>
                                        <option value="2864 Phạm Thế Hiển, Quận 8">2864 Phạm Thế Hiển, Phường 7, Quận 8, Thành phố Hồ Chí Minh
                                        </option>
                                        <option value="175b Cao Thắng, Quận 10">175b Cao Thắng, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                                        </option>
                                        <option value="7WM5+P8H, Trường Yên, Hoa Lư">7WM5+P8H, Trường Yên, Hoa Lư, Ninh Bình</option>
                                        <option value="Cù Chính Lan, Nhật Tân">Cù Chính Lan, Nhật Tân, Ninh Bình</option>
                                        <option value="23 Bàu Sen, Hòa Hiếu, TX. Thái Hòa">23 Bàu Sen, Hòa Hiếu, TX. Thái Hòa, Nghệ An
                                        </option>
                                        <option value="433 Phủ Qùy, Hòa Hiếu, TX. Thái Hòa">433 Phủ Qùy, Hòa Hiếu, TX. Thái Hòa, Nghệ An
                                        </option>
                                        <option value="139 Đường 1/5 - TT, Nghĩa Đàn">139 Đường 1/5 - TT, Nghĩa Đàn, Nghệ An</option>
                                        <option value="E-07, KPTM Vinpearl Hòn Tre, Phường Vĩnh Nguyên">E-07, KPTM Vinpearl Hòn Tre, Phường
                                            Vĩnh Nguyên, Tp. Nha Trang, Tỉnh Khánh Hoà</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="div-extend-location"></div>
                            </div>
                            <label class="room-label">Chọn Loại Phòng *</label>
                            <div>
                                <div class="container-card">
                                    <div class="cards first-price" onClick={() => {this.handleSelectedRoom(0)}}>
                                        <img src="https://sanxuatbia.com/wp-content/uploads/2019/11/b5.jpg" alt="" />
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

                                    <div class="cards second-price" onClick={() => {this.handleSelectedRoom(1)}}>
                                        <img src="https://sanxuatbia.com/wp-content/uploads/2019/11/b5.jpg" alt="" />
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

                                    <div class="cards third-price" onClick={() => {this.handleSelectedRoom(2)}}>
                                        <img src="https://sanxuatbia.com/wp-content/uploads/2019/11/b5.jpg" alt="" />
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
                                        <button id="9">8h-9h</button>
                                        <button id="10">9h-10h</button>
                                        <button id="11">10h-11h</button>
                                        <button id="12">11h-12h</button>
                                        <button id="13">12h-13h</button>

                                        <button id="14">13h-14h</button>
                                        <button id="15">14h-15h</button>
                                        <button id="16">15h-16h</button>
                                        <button id="17">16h-17h</button>
                                        <button id="18">17h-18h</button>

                                        <button id="19">18h-19h</button>
                                        <button id="20">19h-20h</button>
                                        <button id="21">20h-21h</button>
                                        <button id="22">21h-22h</button>
                                        <button id="23">22h-23h</button>

                                    </div>
                                </div>
                            </div>
                            <div class="div-time"></div>
                            <div class="price">
                                <label class="price-label">Giá tiền *</label>
                                <input type="text" class="price-output" value="" />
                            </div>
                        </div>
                        <div class="check-inf">
                            <button class="checkBtn">
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