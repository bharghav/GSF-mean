import React, { Component } from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';


import '../login/Login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submitted: false,
            email_error: '',
            password_error: '',
            error: null,
            error_msg: '',
            has_error: false,
            success: false
        };
    }

    onChangeUsername(evt) {
        const value = evt.target.value.trim();
        const regex_email = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
        this.setState({ username: evt.target.value });
        let has_error = false;
        let email_error = '';
        if (value.length < 1) { has_error = true; email_error = 'Email is required'; }
        if (!has_error && value.length > 100) { has_error = true; email_error = 'Maximum 100 characters'; }
        if (!has_error && !regex_email.test(value)) { has_error = true; email_error = 'Invalid email address'; }

        this.setState({ email_error: email_error }, () => {
            this.validate();
        });
    }

    onChangePassword(evt) {
        const value = evt.target.value.trim();
        this.setState({ password: evt.target.value });
        let has_error = false;
        let password_error = '';

        if (value.length < 8) { has_error = true; password_error = 'Minimum 8 characters required'; }
        if (!has_error && /[a-z]/.test(value) === false) { has_error = true; password_error = 'Required at least one lowercase character'; }
        if (!has_error && /[A-Z]/.test(value) === false) { has_error = true; password_error = 'Required at least one uppercase character'; }
        if (!has_error && /[0-9]/.test(value) === false) { has_error = true; password_error = 'Required at least one numeric character'; }

        this.setState({ password_error: password_error }, () => {
            this.validate();
        });
    }

    validate() {
        const { username, password } = this.state;
        let has_error = true;
        if (this.state.email_error.length === 0 && this.state.password_error.length === 0) {
            has_error = false;
        }

        if (username.length === 0 || password.length === 0) {
            has_error = true;
        }
        this.setState({ has_error: has_error });
    }

    handleSubmit(event) {
        //event.preventDefault();
        event.persist();
        const { username, password } = this.state;

        if ((username === '' || username === null) || (password === '' || password === null))
            this.validate();

        if (!this.state.has_error) {
            const formData = {
                "email": username,
                "password": password
            };

            //console.log(process.env.API_URL)
            fetch('http://localhost:4500/auth/login/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.statusCode === 200) {
                        localStorage.setItem("token", responseJson.token);
                        this.setState({ success: true });
                    } else {
                        this.setState({ error_msg: responseJson.StatusText });
                    }
                })
                .catch((error) => {
                    console.error("error:" + error);
                });
        }

    }


    render() {
        if (this.state.success) {
            return <Redirect to={'/users'} />
        }

        if (localStorage.getItem('token')) {
            return <Redirect to={'/users'} />
        }
        const pStyle = {
            border: '0px solid red',
            marginTop: '40px',
            width: '35%',
            margin: 'auto'
        };
        const emailGroupClass = classNames('form-group ',
            { 'has-danger': this.state.email_error }
        );
        const passwordGroupClass = classNames('form-group ',
            { 'has-danger': this.state.password_error }
        );
        let errormsg;

        if (this.state.error_msg) {
            errormsg = <p className="form-group has-danger"><span className="form-control-feedback">{this.state.error_msg}</span></p>
        }
        return (
            <div>
                <div className="theme-loader" >
                    <div className="loader-track">
                        <div className="preloader-wrapper">
                            <div className="spinner-layer spinner-blue">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                            <div className="spinner-layer spinner-red">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                            <div className="spinner-layer spinner-yellow">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                            <div className="spinner-layer spinner-green">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="login_content">
                    <section className="login-block" style={pStyle}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <form className="md-float-material form-material" name="loginForm">

                                        <div className="auth-box card">
                                            <div className="card-block">
                                                <div className="row m-b-20">
                                                    <div className="col-md-12">
                                                        <h3 className="text-center txt-primary">Sign In</h3>
                                                    </div>
                                                </div>
                                                <p className="text-muted text-center p-b-5">Sign in with your regular account</p>

                                                {errormsg}
                                                <div className={emailGroupClass}  style={{ marginBottom: "10px" }}>
                                                    <input type="text" id="username" name="username" autoComplete="username" placeholder="Email" className="form-control" onChange={this.onChangeUsername.bind(this)}  style={{ margin: 0 }} />
                                                    <span className="form-bar">{this.state.email_error}</span>

                                                    <div className="form-control-feedback"></div>
                                                </div>
                                                <div className={passwordGroupClass}  style={{ marginBottom: "10px" }}>
                                                    <input type="password" name="password" autoComplete="current-password" placeholder="Password" className="form-control" onChange={this.onChangePassword.bind(this)}  style={{ margin: 0 }} />
                                                    <span className="form-bar">{this.state.password_error}</span>

                                                    <div className="form-control-feedback"></div>
                                                </div>
                                                <div className="row m-t-25 text-left">
                                                    <div className="col-12">
                                                        <div className="checkbox-fade fade-in-primary">
                                                            <label>
                                                                <input type="checkbox" value="" />
                                                                <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                                                <span className="text-inverse">Remember me</span>
                                                            </label>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="row m-t-30">
                                                    <div className="col-md-12">
                                                        <button type="button" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" disabled={this.state.has_error} onClick={(evt) => {
                                                            if (evt !== undefined && evt.preventDefault) { evt.preventDefault(); }
                                                            this.setState({
                                                                has_error: false,
                                                                email_error: '',
                                                                password_error: '',
                                                                error: null,
                                                                error_msg: ''
                                                            }, () => {
                                                                this.handleSubmit(evt);
                                                            });
                                                        }} >LOGIN</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default Login;