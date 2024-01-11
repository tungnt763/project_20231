import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderBida.scss';
import { path } from '../../utils';
import { Link } from 'react-router-dom';

class HeaderBida extends Component {

    constructor(props) {
        super(props);
    }

    handleShowLoginRegister = () => {
        this.props.showLoginRegister();
    }

    handleNavigateOrder = () => {
        if (!localStorage.getItem("userName")) {
            this.handleShowLoginRegister();
        }
    }

    render() {
        return ( 
            <React.Fragment>
                <header className="header">
                    <div className="header-container">
                        <div className="header-logo">
                            <Link to={path.HOME}>B<span className="span1">I</span>D<span className="span2">A</span> H<span>U</span>S<span className="span3">T</span></Link>
                        </div>
                        <div className="header-nav">
                            <ul>
                                <li className="sparkle u-hover--sparkle"><a href={(localStorage.getItem("userName") ? "." + path.ORDER : "#")} onClick={() => {this.handleNavigateOrder()}}>Đặt bàn</a></li>
                                <li className="sparkle u-hover--sparkle"><a href="./location.html">Địa điểm</a></li>
                                <li className="sparkle u-hover--sparkle"><a href="#">Loại bàn</a></li>
                                <li className="sparkle u-hover--sparkle"><a href="./news.html">Tin tức</a></li>
                                <li className="sparkle u-hover--sparkle"><a href="#">Sự kiện</a></li>
                                <li className="sparkle u-hover--sparkle"><a href="#">Tuyển dụng</a></li>
                            </ul>
                        </div>
                        <div className="header-contact">
                            <img src="https://warningzone.com/wp-content/themes/oceanwp-child-theme-master/assets/images/phone-call.svg" alt="Call"/>
                            <p>1900 6868</p>
                            <a href="#" className="header-contact-login"><i className="far fa-user" onClick={() => {this.handleShowLoginRegister()}}></i></a>
                            <a href="#"><i className="fas fa-shopping-bag"></i></a>
                        </div>
                    </div>
                </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBida);