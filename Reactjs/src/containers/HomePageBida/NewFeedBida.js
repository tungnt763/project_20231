import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NewFeedBida.scss';
import './SwiperBida.scss';
import new1 from "../../assets/banner/1.png";
import new2 from "../../assets/banner/2 (2).png";
import new3 from "../../assets/banner/3.png";
import new4 from "../../assets/banner/4.png";
import new5 from "../../assets/banner/5.png";
import new6 from "../../assets/banner/6.png";
import new7 from "../../assets/banner/7.png";
import new8 from "../../assets/banner/8.png";
import new9 from "../../assets/banner/9.png";
import new10 from "../../assets/banner/10.png";
import new11 from "../../assets/banner/11.png";
import new12 from "../../assets/banner/12.png";

class NewFeedBida extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <React.Fragment>
                <section className="new-feeds-home">
                    <div className="what-here-home">
                        <span className="dot-before "></span>
                        <h3 className="about-content-logo-text">CHUYỆN GÌ ĐÂY?</h3>
                        <span className="dot-after"></span>
                    </div>
                    <div className="new-feeds-container-home">
                        <div className="swiper new-swiper">
                            <div className="swiper-wrapper new-feeds-sss-home">
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new1} alt="new1" />
                                    <span className="new-feeds-date-home">06/11/2023</span>
                                    <h3>BIDA HUST ĐÓN CHÀO GIÁNG SINH VỚI NHIỀU ƯU ĐÃI</h3>
                                    <p>Lễ hội Giáng Sinh và những trải nghiệm không thể bỏ lỡ để khám phá tại Bida Hust, hãy đến và tận hưởng lễ hội ngay nào!</p>
                                </div>
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new2} alt="new2" />
                                    <span className="new-feeds-date-home">07/11/2023</span>
                                    <h3>CÁC LOẠI BI BIDA VÀ CÁC BI BIDA DÀNH CHO CHUYÊN NGHIỆP</h3>
                                    <p>Cách chơi bida rất đa dạng và bàn bida, bi bida cũng khác nhau tùy vào cách chơi. Ở bài viết này sẽ giới thiệu cho bạn các loại bi bida và bi dành cho cơ thủ chuyên nghiệp nhé!</p>
                                </div>
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new3} alt="new3" />
                                    <span className="new-feeds-date-home">08/11/2023</span>
                                    <h3>TẠI SAO BI BIDA BỊ VÀNG SAU MỘT THỜI GIAN SỬ DỤNG</h3>
                                    <p>Bi bida thường chuyển vàng sau một khoảng thời gian sử dụng liên tục. Cùng Bida Hust tìm hiểu lí do vì sao nhé!</p>
                                </div>
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new4} alt="new4" />
                                    <span className="new-feeds-date-home">09/11/2023</span>
                                    <h3>BIDA HUST - LỰA CHỌN ƯU TIÊN CHO TỤ HỌP BẠN BÈ</h3>
                                    <p>Bida Hust - địa điểm cực hot cho các thành viên yêu Bida có cơ hội được giao lưu, tụ họp với nhau không nên bỏ lỡ</p>
                                </div>
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new5} alt="new5" />
                                    <span className="new-feeds-date-home">10/11/2023</span>
                                    <h3>THƯỞNG THỨC LOẠI THỨC UỐNG MỚI TẠI BIDA HUST KHI ĐẾN QUÁN NGAY NÀO</h3>
                                    <p>Bida hust đã không ngừng hoàn thiện menu hơn 70 món nhằm mang đến cho Homies những trải nghiệm tốt nhất. Đồng thời, với những nỗ lực nghiên cứu cũng đã cho ra những thức uống có hương vị hoàn hảo nhất.</p>
                                </div>
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new6} alt="new6" />
                                    <span className="new-feeds-date-home">11/11/2023</span>
                                    <h3>GHÉ THĂM CƠ SỞ BÁCH KINH X Y TẠI HÀ NỘI CỦA BIDA HUST</h3>
                                    <p>Bida Hust Bách Kinh Xây không chỉ là địa điểm sở hữu không gian cực độc lạ mà còn có tầm nhìn cực kì đã mắt ra trung tâm Thành phố Hà Nội</p>
                                </div>
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new7} alt="new7" />
                                    <span className="new-feeds-date-home">12/11/2023</span>
                                    <h3>BIDA HUST - ĐỊA ĐIỂM LÝ TƯỞNG DÀNH CHO CÁC CẶP ĐÔI HẸN HÒ</h3>
                                    <p>Bida Hust sở hữu các phòng riêng đảm bảo sự riêng tư và không gian cực kì đẹp mắt cho các cặp tình nhân khi ghé thăm</p>
                                </div>
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new8} alt="new8" />
                                    <span className="new-feeds-date-home">13/11/2023</span>
                                    <h3>KHÁM PHÁ NHỮNG ĐIỀU ẤN TƯỢNG MÀ BIDA HUST ĐEM LẠI</h3>
                                    <p>Với không gian cực chất, vị trí địa lý tiện lợi, giá cả với hàng ngàn ưu đãi, Bida Hust đem lại trải nghiệm đầy tự hào</p>
                                </div>
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new9} alt="new9" />
                                    <span className="new-feeds-date-home">14/11/2023</span>
                                    <h3>TÌM HIỂU TOP 5 CÂY CƠ TỐT NHẤT TẠI BIDA HUST</h3>
                                    <p>Cơ Bida Hust tổng hợp các dòng bida chất lượng nhất, được kiểm chứng rõ ràng. Với mẫu mã đa dạng, ưu đãi hấp dẫn, cơ bida của Bida Hust hứa hẹn sẽ là bạn đồng hành tin cậy cùng bạn.</p>
                                </div>
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new10} alt="new10" />
                                    <span className="new-feeds-date-home">15/11/2023</span>
                                    <h3>LADIES - NIGHT ƯU ĐÃI HẤP DẪN DÀNH CHO PHÁI NỮ</h3>
                                    <p>Ladies Night – Trải nghiệm không thể bỏ lỡ vào mỗi tối thứ 4 hàng tuần cùng vô vàn ưu đãi hấp dẫn chỉ có tại Warning Zone, đang chờ nữ nhân khám phá</p>
                                </div>
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new11} alt="new11" />
                                    <span className="new-feeds-date-home">16/11/2023</span>
                                    <h3>TRẢI NGHIỆM LỄ HỘI HÓA TRANG HALLOWEEN TẠI BIDA HUST</h3>
                                    <p>Đừng để bất kỳ mụ phù thủy nào làm mất niềm vui trong đêm của bạn… hãy có một lễ hội Halloween hoành tráng và ấn tượng tại Bida Hust nhé!</p>
                                </div>
                                <div className="new-feeds-content-home swiper-slide">
                                    <img className="new-img" src={new12} alt="new12" />
                                    <span className="new-feeds-date-home">18/11/2023</span>
                                    <h3>TỔNG HỢP CÁC CHƯƠNG TRÌNH ƯU ĐÃI TẠI BIDA HUST</h3>
                                    <p>Các chương trình ưu đãi tại BIDAHUST không chỉ giúp Huster có trải nghiệm đi nhậu “vừa túi” mà còn mang đến nhiều niềm…</p>
                                </div>
                            </div>
                            <div className="swiper-button-next swiper-navBtn"></div>
                            <div className="swiper-button-prev swiper-navBtn"></div>
                            <div className="swiper-pagination"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedBida);