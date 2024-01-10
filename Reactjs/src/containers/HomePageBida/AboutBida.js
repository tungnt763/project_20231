import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutBida.scss';

class AboutBida extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <React.Fragment>
                <div class="about">
                    <div class="about-content">
                        <div class="about-content-logo">
                            <span class="dot-before "></span>
                            <h3 class="about-content-logo-text">CÂU CHUYỆN CỦA CHÚNG TÔI</h3>
                            <span class="dot-after"></span>
                        </div>
                        <div class="about-content-text">
                            <div class="left">
                                <h4 class="left-title">CÂU CHUYỆN CỦA CHÚNG TÔI</h4>
                                <p class="left-content">Ở thị trấn nhỏ, có một CLB bida lâu đời tên là "BidaHUST" Đó là nơi những con bóng màu đen và màu trắng bay lung tung trên bàn xanh, nơi những người đam mê bi-a tìm thấy ngôi nhà thứ hai của họ.                        Mỗi tuần, thành viên của CLB họp mặt tại quán, nơi họ thi đấu, trò chuyện và chia sẻ niềm đam mê chung. Từ những người mới học chơi đến những bậc thầy của bi-a, mọi người đều có cơ hội học hỏi và cùng nhau phát triển kỹ năng.</p>
                                <p class="left-content2">Ngoài cuộc thi đấu, họ còn kết nối qua những buổi tối và những sự kiện từ thiện. Đây không chỉ là CLB bi-a, mà còn là nơi tạo ra những mối quan hệ, kỷ niệm và niềm đam mê về bi-a. "BidaHUST" là ngôi nhà của sự đoàn kết và niềm đam mê không nguôi.</p>
                            </div>
                            <div class="right">
                                <h4 class="right-title">GIÁ TRỊ CỐT LÕI</h4>
                                <p class="right-content1"><span>1 – THIẾT KẾ –</span> kiến tạo tính cách & nhận diện thương hiệu của BidaHUST.</p>
                                <p class="right-content2"><span>2 – CON NGƯỜI –</span> Những người chơi bida thường có tính kiên nhẫn, tập trung và kiên trì. Họ cũng phải có khả năng tính toán và chiến thuật để đánh bi-a hiệu quả. Tính thẩm mỹ và tôn trọng đối thủ cũng quan trọng.</p>
                                <p class="right-content3"><span>3 – SẢN PHẨM CHẤT LƯỢNG –</span> Chất lượng dịch vụ phục vụ bàn chơi bida cho khách hàng là sự kết hợp hoàn hảo giữa sự nhiệt tình, chuyên nghiệp và hiểu biết về trò chơi. Đội ngũ phục vụ phải luôn sẵn sàng hỗ trợ, bảo quản bàn, và tạo môi trường thoải mái để khách hàng tận hưởng trải nghiệm bi-a tốt nhất.</p>
                                <p class="right-content4"><span>4 – HÀNH ĐỘNG NHÂN VĂN –</span> tạo điều kiện phát huy tinh thần & hành động hướng đến việc bảo vệ môi trường, phát triển xã hội & con người.</p>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutBida);