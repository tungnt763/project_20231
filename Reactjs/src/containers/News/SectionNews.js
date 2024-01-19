import React, { Component } from "react";
import { connect } from "react-redux";
import { bookingUserService } from "../../services/userService";
import "./SectionNews.scss";
import { path } from "../../utils";
import new1 from "../../assets/banner/12.png";
import new2 from "../../assets/banner/11.png";
import new3 from "../../assets/banner/10.png";
import new4 from "../../assets/banner/9.png";
import new5 from "../../assets/banner/8.png";
import new6 from "../../assets/banner/7.png";

class SectionNews extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // console.log(this.state.isSelectedTime)
  }

  render() {
    return (
      <React.Fragment>
        <div class="news-container">
          <div class="news-logo">
            <span class="dot-before "></span>
            <h3 class="about-content-logo-text">CHUYỆN GÌ ĐÂY?</h3>
            <span class="dot-after"></span>
          </div>

          <div class="news-container-content">
            <div class="new-feeds-content">
              <img class="new-img" src={new1} alt="new1" />
              <span class="new-feeds-date">18/11/2023</span>
              <h3>TỔNG HỢP CÁC CHƯƠNG TRÌNH ƯU ĐÃI TẠI BIDA HUST</h3>
              <p>
                Các chương trình ưu đãi tại BIDAHUST không chỉ giúp Huster có
                trải nghiệm ...
              </p>
            </div>
            <div class="new-feeds-content">
              <img class="new-img" src={new2} alt="new2" />
              <span class="new-feeds-date">16/11/2023</span>
              <h3>TRẢI NGHIỆM LỄ HỘI HÓA TRANG HALLOWEEN TẠI BIDA HUST</h3>
              <p>
                Lễ hội Giáng Sinh và những trải nghiệm không thể bỏ lỡ để khám
                phá tại Bida Hust...
              </p>
            </div>
            <div class="new-feeds-content">
              <img class="new-img" src={new3} alt="new3" />
              <span class="new-feeds-date">15/11/2023</span>
              <h3>LADIES - NIGHT ƯU ĐÃI HẤP DẪN DÀNH CHO PHÁI NỮ</h3>
              <p>
                Ladies Night – Trải nghiệm không thể bỏ lỡ vào mỗi tối thứ 4
                hàng tuần cùng vô vàn ưu đãi hấp dẫn chỉ có ...
              </p>
            </div>
            <div class="new-feeds-content">
              <img class="new-img" src={new4} alt="new4" />
              <span class="new-feeds-date">14/11/2023</span>
              <h3>TÌM HIỂU TOP 5 CÂY CƠ TỐT NHẤT TẠI BIDA HUST</h3>
              <p>
                Cơ Bida Hust tổng hợp các dòng bida chất lượng nhất, được kiểm
                chứng rõ ràng. Với mẫu mã đa dạng, ưu đãi hấp dẫn...
              </p>
            </div>
            <div class="new-feeds-content">
              <img class="new-img" src={new5} alt="new5" />
              <span class="new-feeds-date">13/11/2023</span>
              <h3>KHÁM PHÁ NHỮNG ĐIỀU ẤN TƯỢNG MÀ BIDA HUST ĐEM LẠI</h3>
              <p>
                Với không gian cực chất, vị trí địa lý tiện lợi, giá cả với hàng
                ngàn ưu đãi, Bida Hust...
              </p>
            </div>
            <div class="new-feeds-content">
              <img class="new-img" src={new6} alt="new6" />
              <span class="new-feeds-date">06/11/2023</span>
              <h3>BIDA HUST - ĐỊA ĐIỂM LÝ TƯỞNG DÀNH CHO CÁC CẶP ĐÔI HẸN HÒ</h3>
              <p>
                Bida Hust sở hữu các phòng riêng đảm bảo sự riêng tư và không
                gian cực kì đẹp mắt cho các cặp tình...
              </p>
            </div>
          </div>
          <div class="news-logo-menu">
            <a href={"." + path.NEWS} class="menu1">
              1
            </a>
            <a href="./news2.html" class="menu2">
              2
            </a>
            <a href="./news3.html" class="menu3">
              3
            </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(SectionNews);
