import React, { Component } from "react";
import { connect } from "react-redux";
import { bookingUserService } from "../../services/userService";
import "./LocationDetail.scss";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { path } from "../../utils/constant";
import branch1 from "../../assets/location/1.png";
import branch2 from "../../assets/location/2.jpg";
import branch3 from "../../assets/location/3.png";
import branch4 from "../../assets/location/4.png";
import branch5 from "../../assets/location/5.png";
import branch6 from "../../assets/location/6.jpg";
import branch7 from "../../assets/location/7.jpg";

class LocationDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // console.log(this.state.isSelectedTime)
  }

  render() {
    return (
      <React.Fragment>
        <div class="location-detail">
          <div class="loc-container">
            <div class="loc">
              <div class="div-img">
                <img src={branch1} alt={"branch1"} />
                <Link to={localStorage.getItem("id") ? path.ORDER : path.HOMEPAGE}>
                  <div
                    class="appear"
                    data-location-name="1 Ngõ 72 Trần Đại Nghĩa"
                  >
                    ĐẶT BÀN
                  </div>
                </Link>
              </div>
              <div class="information">
                <div class="location-inf">
                  {/* <i class="fa-solid fa-location-dot"></i> */}
                  <span class="material-symbols-outlined"> location_on </span>
                  <span>1 Ngõ 72 Trần Đại Nghĩa</span>
                </div>
                <div class="phone-inf">
                  {/* <span class="material-symbols-outlined"> call </span> */}
                  <span class="material-symbols-outlined"> call </span>
                  <span>1900 6868</span>
                </div>
                <div class="time-inf">
                  {/*                   <span class="material-symbols-outlined">
                    {" "}
                    calendar_month{" "}
                  </span> */}
                  <span class="material-symbols-outlined">
                    {" "}
                    calendar_month{" "}
                  </span>
                  <span>7:00 - 23:00</span>
                </div>
              </div>
            </div>

            <div class="loc">
              <div class="div-img">
                <img src={branch2} alt="branch2" />
                <Link to={localStorage.getItem("id") ? path.ORDER : path.HOMEPAGE}>
                  <div class="appear" data-location-name="47 Thái Hà, Trung Liệt">
                    ĐẶT BÀN
                  </div>
                </Link>
              </div>
              <div class="information">
                <div class="location-inf">
                  <span class="material-symbols-outlined"> location_on </span>
                  <span>47 Thái Hà, Trung Liệt</span>
                </div>
                <div class="phone-inf">
                  <span class="material-symbols-outlined"> call </span>
                  <span>1900 6096</span>
                </div>
                <div class="time-inf">
                  <span class="material-symbols-outlined">
                    {" "}
                    calendar_month{" "}
                  </span>
                  <span>7:00 - 23:00</span>
                </div>
              </div>
            </div>

            <div class="loc">
              <div class="div-img">
                <img src={branch3} alt="branch3" />
                <Link to={localStorage.getItem("id") ? path.ORDER : path.HOMEPAGE}>
                  <div
                    class="appear"
                    data-location-name="352 Giải Phóng, Phương Liệt"
                  >
                    ĐẶT BÀN
                  </div>
                </Link>
              </div>
              <div class="information">
                <div class="location-inf">
                  <span class="material-symbols-outlined"> location_on </span>
                  <span>352 Giải Phóng, Phương Liệt</span>
                </div>
                <div class="phone-inf">
                  <span class="material-symbols-outlined"> call </span>
                  <span>1900 6096</span>
                </div>
                <div class="time-inf">
                  <span class="material-symbols-outlined">
                    {" "}
                    calendar_month{" "}
                  </span>
                  <span>7:00 - 23:00</span>
                </div>
              </div>
            </div>

            <div class="loc">
              <div class="div-img">
              <img src={branch4} alt={"branch4"} />
              <Link to={localStorage.getItem("id") ? path.ORDER : path.HOMEPAGE}>
                <div
                  class="appear"
                  data-location-name="86 Ngõ Giếng, Hoàng Cầu"
                >
                  ĐẶT BÀN
                </div>
              </Link>
              </div>
              <div class="information">
                <div class="location-inf">
                  <span class="material-symbols-outlined"> location_on </span>
                  <span>86 Ngõ Giếng, Hoàng Cầu</span>
                </div>
                <div class="phone-inf">
                  <span class="material-symbols-outlined"> call </span>
                  <span>1900 6096</span>
                </div>
                <div class="time-inf">
                  <span class="material-symbols-outlined">
                    {" "}
                    calendar_month{" "}
                  </span>
                  <span>7:00 - 23:00</span>
                </div>
              </div>
            </div>

            <div class="loc">
              <div class="div-img">
                <img src={branch5} alt={"branch5"} />
                <Link to={localStorage.getItem("id") ? path.ORDER : path.HOMEPAGE}>
                  <div
                    class="appear"
                    data-location-name="269 Kim Ngưu, Hai Bà Trưng"
                  >
                    ĐẶT BÀN
                  </div>
                </Link>
              </div>
              <div class="information">
                <div class="location-inf">
                  <span class="material-symbols-outlined"> location_on </span>
                  <span>269 Kim Ngưu, Hai Bà Trưng</span>
                </div>
                <div class="phone-inf">
                  <span class="material-symbols-outlined"> call </span>
                  <span>1900 6096</span>
                </div>
                <div class="time-inf">
                  <span class="material-symbols-outlined">
                    {" "}
                    calendar_month{" "}
                  </span>
                  <span>7:00 - 23:00</span>
                </div>
              </div>
            </div>

            <div class="loc">
              <div class="div-img">
                <img src={branch6} alt={"branch6"} />
                <Link to={localStorage.getItem("id") ? path.ORDER : path.HOMEPAGE}>
                  <div
                    class="appear"
                    data-location-name="139 Lò Đúc, Hai Bà Trưng"
                  >
                    ĐẶT BÀN
                  </div>
                </Link>
              </div>
              <div class="information">
                <div class="location-inf">
                  <span class="material-symbols-outlined"> location_on </span>
                  <span>139 Lò Đúc, Hai Bà Trưng</span>
                </div>
                <div class="phone-inf">
                  <span class="material-symbols-outlined"> call </span>
                  <span>1900 6096</span>
                </div>
                <div class="time-inf">
                  <span class="material-symbols-outlined">
                    {" "}
                    calendar_month{" "}
                  </span>
                  <span>7:00 - 23:00</span>
                </div>
              </div>
            </div>

            <div class="loc">
              <div class="div-img">
                <img src={branch7} alt={"branch7"} />
                <Link to={localStorage.getItem("id") ? path.ORDER : path.HOMEPAGE}>
                  <div class="appear" data-location-name="Số 1 Đại Cồ Việt">
                    ĐẶT BÀN
                  </div>
                </Link>
              </div>
              <div class="information">
                <div class="location-inf">
                  <span class="material-symbols-outlined"> location_on </span>
                  <span>Số 1 Đại Cồ Việt</span>
                </div>
                <div class="phone-inf">
                  <span class="material-symbols-outlined"> call </span>
                  <span>1900 6096</span>
                </div>
                <div class="time-inf">
                  <span class="material-symbols-outlined">
                    {" "}
                    calendar_month{" "}
                  </span>
                  <span>7:00 - 23:00</span>
                </div>
              </div>
            </div>
            <div class="loc"></div>
            <div class="loc"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetail);
