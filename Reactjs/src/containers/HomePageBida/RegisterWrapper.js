import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginWrapper.scss';
import { emitter } from '../../utils/emitter';
import { path } from '../../utils/constant'; 
import { Link } from 'react-router-dom/cjs/react-router-dom';

class RegisterWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phoneNumber: '',
            password: '',
            isShowPassword: false,
            isCommited: false,
        }

        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                fullName: '',
                phoneNumber: '',
                password: '',
                isShowPassword: false,
                isCommited: false,
            })
        })
    }

    componentDidMount() {
    }

    handleOnChangeInput = (event, id) => {
        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
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

    handleCommit = () => {
        this.setState({
            isCommited: !this.isCommited
        })
    }

    checkValidateInput = () => {
        let arrInput = ['fullName', 'phoneNumber', 'password']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                alert('Missing parameter: ' + arrInput[i]);
                return false;
            }
        }
        return true;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid) {
            if (!this.state.isCommited) {
                alert('You must agree to the terms to register!!!');
            }
            else {
                // call API create modal
                this.props.createNewUser(this.state);
            }
        }
    }

    render() {
        return ( 
            <React.Fragment>
                <div className="wrapper" hidden={this.props.isHiddenRegister}>
                    <span className="icon-close">
                        <i className="fas fa-times" onClick={() => {this.handleHideLoginRegister()}}></i>    
                    </span>
                    <div class="form-box register">
                        <h2>Đăng ký</h2>
                        <form action="#">
                            <div class="input-box">
                                <span class="icon"><i className="far fa-user"></i></span>
                                <input 
                                    type="text" 
                                    onChange={(event) => {this.handleOnChangeInput(event, "fullName")}}
                                    value={this.state.fullName}
                                    required 
                                />
                                <label >Họ tên</label>
                            </div>
                            <div class="input-box">
                                <span class="icon"><i className="fas fa-phone"></i></span>
                                <input 
                                    type="text" 
                                    onChange={(event) => {this.handleOnChangeInput(event, "phoneNumber")}}
                                    value={this.state.phoneNumber}
                                    required 
                                />
                                <label >Số điện thoại</label>
                            </div>
                            <div class="input-box">
                                <span class="icon">
                                    <i className={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"} onClick={() => {this.handleShowHidePassword()}}></i>    
                                </span>
                                <input 
                                    type={this.state.isShowPassword ? 'text' : 'password'} 
                                    onChange={(event) => {this.handleOnChangeInput(event, "password")}}
                                    value={this.state.password}
                                    required 
                                />
                                <label >Mật khẩu</label>
                            </div>
                            <div class="remember-forgot">
                                <label>
                                    <input 
                                        type="checkbox" 
                                        name="" 
                                        id="" 
                                        onClick={() => {this.handleCommit()}}
                                        checked={this.state.isCommited}
                                    />
                                    Đồng ý với điều khoản dịch vụ của chúng tôi
                                </label>
                            </div>
                            <Link to={path.HOMEPAGE}>
                                <button 
                                    type="submit" 
                                    class="login-btn" 
                                    onClick={() => {this.handleAddNewUser()}}
                                >
                                    Đăng ký
                                </button>
                            </Link>
                            <div class="login-register">
                                <p>Bạn đã có tài khoản?</p>
                                <a href="#" class="register-link login-link" onClick={() => this.handleShowLoginRegister()}>Đăng nhập</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterWrapper);