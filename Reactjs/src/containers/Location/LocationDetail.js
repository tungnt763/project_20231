import React, { Component } from "react";
import { connect } from "react-redux";
import { bookingUserService } from "../../services/userService";
import "./LocationDetail.scss";

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
                <img src="../địa điểm/địa điểm/1.png" />
                <div
                  class="appear"
                  data-location-name="1 Ngõ 72 Trần Đại Nghĩa"
                >
                  ĐẶT BÀN
                </div>
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
                <img src="../địa điểm/địa điểm/2.jpg" />
                <div class="appear" data-location-name="47 Thái Hà, Trung Liệt">
                  ĐẶT BÀN
                </div>
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
                <img src="../địa điểm/địa điểm/3.png" />
                <div
                  class="appear"
                  data-location-name="352 Giải Phóng, Phương Liệt"
                >
                  ĐẶT BÀN
                </div>
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
                <img src="../địa điểm/địa điểm/4.png" />
                <div
                  class="appear"
                  data-location-name="86 Ngõ Giếng, Hoàng Cầu"
                >
                  ĐẶT BÀN
                </div>
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
                <img src="../địa điểm/địa điểm/5.png" />
                <div
                  class="appear"
                  data-location-name="269 Kim Ngưu, Hai Bà Trưng"
                >
                  ĐẶT BÀN
                </div>
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
                <img src="../địa điểm/địa điểm/6.jpg" />
                <div
                  class="appear"
                  data-location-name="139 Lò Đúc, Hai Bà Trưng"
                >
                  ĐẶT BÀN
                </div>
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
                <img src="../địa điểm/địa điểm/7.jpg" />
                <div class="appear" data-location-name="Số 1 Đại Cồ Việt">
                  ĐẶT BÀN
                </div>
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
