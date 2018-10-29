import React, { Component } from 'react';


import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar';
class Main_Layout extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="loader-bg">
                    <div className="loader-bar"></div>
                </div>

                <div id="pcoded" className="pcoded">
                    <div className="pcoded-overlay-box"></div>
                    <div className="pcoded-container navbar-wrapper">

                        <Header />



                        <div className="showChat_inner">
                            <div className="media chat-inner-header">
                                <a className="back_chatBox" href="#2">
                                    <i className="feather icon-x"></i> Josephin Doe
                        </a>
                            </div>
                            <div className="main-friend-chat">
                                <div className="media chat-messages">
                                    <a className="media-left photo-table" href="#!">
                                        <img className="media-object img-radius img-radius m-t-5" src="assets/images/avatar-2.jpg" alt="Generic placeholder" />
                                    </a>
                                    <div className="media-body chat-menu-content">
                                        <div className="">
                                            <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                                        </div>
                                        <p className="chat-time">8:20 a.m.</p>
                                    </div>
                                </div>
                                <div className="media chat-messages">
                                    <div className="media-body chat-menu-reply">
                                        <div className="">
                                            <p className="chat-cont">Ohh! very nice</p>
                                        </div>
                                        <p className="chat-time">8:22 a.m.</p>
                                    </div>
                                </div>
                                <div className="media chat-messages">
                                    <a className="media-left photo-table" href="#!">
                                        <img className="media-object img-radius img-radius m-t-5" src="assets/images/avatar-2.jpg" alt="Generic placeholder" />
                                    </a>
                                    <div className="media-body chat-menu-content">
                                        <div className="">
                                            <p className="chat-cont">can you come with me?</p>
                                        </div>
                                        <p className="chat-time">8:20 a.m.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-reply-box">
                                <div className="right-icon-control">
                                    <div className="input-group input-group-button">
                                        <input type="text" className="form-control" placeholder="Write hear . . " />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary waves-effect waves-light" type="button"><i className="feather icon-message-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="pcoded-main-container">
                            <div className="pcoded-wrapper">

                                <Sidebar />

                                <div className="pcoded-content">

                                    <div className="page-header card">
                                        <div className="row align-items-end">
                                            <div className="col-lg-8">
                                                <div className="page-header-title">
                                                    <i className="feather icon-home bg-c-blue"></i>
                                                    <div className="d-inline">
                                                        <h5>Dashboard</h5>
                                                        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="page-header-breadcrumb">
                                                    <ul className=" breadcrumb breadcrumb-title">
                                                        <li className="breadcrumb-item">
                                                            <a href="index.html"><i className="feather icon-home"></i></a>
                                                        </li>
                                                        <li className="breadcrumb-item"><a href="#!">Dashboard</a> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pcoded-inner-content">
                                        <div className="main-body">
                                            <div className="page-wrapper">
                                                <div className="page-body">

                                                    <div className="row">

                                                        {this.props.children}





                                                        {/* <!-- sale 2 card end --> */}



                                                    </div>
                                                    {/* <!-- [ page content ] end --> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- [ style Customizer ] start --> */}
                                <div id="styleSelector">
                                </div>
                                {/* <!-- [ style Customizer ] end --> */}
                            </div>
                        </div>
                    </div>
                </div>



            </div>



        );
    }
}

export default Main_Layout;