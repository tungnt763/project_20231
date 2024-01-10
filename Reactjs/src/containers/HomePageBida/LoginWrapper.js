import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLoginApi } from '../../services/userService';
import './LoginWrapper.scss';

class LoginWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
    }

    handleOnChangeInput = (event, id) => {
        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
        console.log(this.state, id)
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleShowLoginRegister = () => {
        this.props.showLoginRegister();
    }

    handleHideLoginRegister = () => {
        this.props.hideLoginRegister();
    }

    handleLogin = async() => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.phoneNumber, this.state.password)
            console.log(data)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
                alert(this.state.errMessage)
            }
            if (data && data.errCode === 0) {
                //todo
                this.props.hideLoginRegister()
            }
        } catch(error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                    alert(this.state.errMessage)
                }
            }
            // console.log('hoidanit', error.response)
            
        }
    }

    render() {
        return ( 
            <React.Fragment>
                <div className="wrapper" hidden={this.props.isHiddenLogin}>
                    <span className="icon-close">
                        <i className="fas fa-times" onClick={() => {this.handleHideLoginRegister()}}></i>    
                    </span>
                    <div className="form-box login">
                        <h2>Đăng nhập</h2>
                        <form action="#">
                            <div className="input-box">
                                <span className="icon"><i className="fas fa-phone"></i></span>
                                <input 
                                    type="tel" 
                                    onChange={(event) => this.handleOnChangeInput(event, "phoneNumber")}
                                    required
                                />
                                <label >Số điện thoại</label>
                            </div>
                            <div className="input-box">
                                <span className="icon">
                                    <i className={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"}  onClick={() => {this.handleShowHidePassword()}}></i>    
                                </span>
                                <input 
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    onChange={(event) => this.handleOnChangeInput(event, "password")}
                                    required
                                />
                                <label >Mật khẩu</label>
                            </div>
                            <div className="remember-forgot">
                                <label>
                                    <input type="checkbox" name="" id=""/>
                                    Remember me
                                </label>
                                <a href="#">Bạn quên mật khẩu?</a>
                            </div>
                            <button 
                                type="submit" 
                                className="login-btn"
                                onClick={(event) => {this.handleLogin()}}
                            >
                                Đăng nhập
                            </button>
                            <div className="login-register">
                                <p>Bạn chưa có tài khoản?</p>
                                <a href="#" className="register-link" onClick={() => this.handleShowLoginRegister()}>Đăng ký ngay</a>
                            </div>
                        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginWrapper);