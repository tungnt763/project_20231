import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PlaceBida.scss';

class PlaceBida extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <React.Fragment>
                <div class="place">
                    <div class="place-container">
                        <div class="place-container-logo">
                            <span class="dot-before "></span>
                            <h3 class="about-content-logo-text">TẤT CẢ CHI NHÁNH</h3>
                            <span class="dot-after"></span>
                        </div>
                        <div class="place-container-content">
                            <div class="place-hanoi">
                                <h3>HÀ NỘI</h3>
                                <ul>
                                    <li><a href="https://maps.app.goo.gl/3zooaPDowTVUBN7Q7" target="_blank">1 Ngõ 72 Trần Đại Nghĩa, Hai Bà Trưng</a></li>
                                    <li><a href="https://maps.app.goo.gl/UAV2zmRYTK2F6p4n8" target="_blank">47 Thái Hà, Trung Liệt, Đống Đa</a></li>
                                    <li><a href="https://maps.app.goo.gl/Cg8Y3eKNKKSgj84n6" target="_blank">352 Giải Phóng, Phương Liệt, Thanh Xuân</a></li>
                                    <li><a href="https://maps.app.goo.gl/axi8Gdc9LnH8T7SM6" target="_blank">86 Ngõ Giếng, Hoàng Cầu</a></li>
                                    <li><a href="https://maps.app.goo.gl/HNhEoH9BRfrXdtxq9" target="_blank">269 Kim Ngưu, Hai Bà Trưng</a></li>
                                    <li><a href="https://maps.app.goo.gl/uyXLT3tZsxEQQRbX9" target="_blank">139 Lò Đúc, Hai Bà Trưng</a></li>
                                </ul>
                            </div>
                            <div class="place-hochiminh">
                                <h3>HỒ CHÍ MINH</h3>
                                <ul>
                                    <li><a href="https://maps.app.goo.gl/h4455mdar91rM1fa9" target="_blank">16 Trần Văn Cao, Phường Đakao, Quận 1</a></li>
                                    <li><a href="https://maps.app.goo.gl/6T3KujfVVTndgWbC8" target="_blank">2864 Phạm Thế Hiển, Phường 7, Quận 8</a></li>
                                    <li><a href="https://maps.app.goo.gl/Y9PVSeZosWsyxY4c7" target="_blank">50 Đường 297, Phước Long B, Quận 9</a></li>
                                    <li><a href="https://maps.app.goo.gl/vGNtu2yMc1aXe3Gs8" target="_blank">175b Cao Thắng, Phường 12, Quận 10</a></li>
                                </ul>
                            </div>
                            <div class="place-ninhbinh">
                                <h3>NINH BÌNH</h3>
                                <ul>
                                    <li><a href="https://maps.app.goo.gl/99yHd5wrrXDmH45S6" target="_blank">7WM5+P8H, Trường Yên, Hoa Lư, Ninh Bình</a></li>
                                    <li><a href="https://maps.app.goo.gl/us61cDAh1scjHRiK7" target="_blank">64 Cù Chính Lan, Nhật Tân, Ninh Bình</a></li>
                                </ul>
                            </div>
                            <div class="place-nghean">
                                <h3>NGHỆ AN</h3>
                                <ul>
                                    <li><a href="https://maps.app.goo.gl/WyuB29thDWyEbNdL6" target="_blank">23 Bàu Sen, Hòa Hiếu, TX. Thái Hòa, Nghệ An</a></li>
                                    <li><a href="https://maps.app.goo.gl/6RLTuoYPV118Gzs56" target="_blank">433 Phủ Qùy, Hòa Hiếu, TX. Thái Hòa, Nghệ An</a></li>
                                    <li><a href="https://maps.app.goo.gl/5d9GqTNGd7yYc1Mv9" target="_blank">139 Đường 1/5 - TT, Nghĩa Đàn, Nghệ An</a></li>
                                </ul>
                            </div>
                            <div class="place-nhatrang">
                                <h3>NHA TRANG</h3>
                                <ul>
                                    <li><a href="https://www.google.com/maps/place/12%C2%B013'01.0N+109%C2%B014'18.3E/@12.2169444,109.2384167,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.2169444!4d109.2384167?entry=ttu" target="_blank">E-07, KPTM Vinpearl Hòn Tre, Phường Vĩnh Nguyên, Tp. Nha Trang, Tỉnh Khánh Hoà</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="place-more">
                            <a href="#" target="_blank">Xem thêm</a>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlaceBida);