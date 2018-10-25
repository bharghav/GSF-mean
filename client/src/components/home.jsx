import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                

    {/* <div className="loader-bg">
        <div className="loader-bar"></div>
    </div> */}
   
    <div id="pcoded" className="pcoded">
        <div className="pcoded-overlay-box"></div>
        <div className="pcoded-container navbar-wrapper">
            
            <nav className="navbar header-navbar pcoded-header">
                <div className="navbar-wrapper">
                    <div className="navbar-logo">
                        <a href="index.html">
                            <img className="img-fluid" src="assets/images/logo.png" alt="Theme-Logo" />
                        </a>
                        <a className="mobile-menu" id="mobile-collapse" href="#!">
                            <i className="feather icon-menu icon-toggle-right"></i>
                        </a>
                        <a className="mobile-options waves-effect waves-light">
                            <i className="feather icon-more-horizontal"></i>
                        </a>
                    </div>
                    <div className="navbar-container container-fluid">
                        <ul className="nav-left">
                            <li className="header-search">
                                <div className="main-search morphsearch-search">
                                    <div className="input-group">
                                        <span className="input-group-prepend search-close">
										<i className="feather icon-x input-group-text"></i>
									</span>
                                        <input type="text" className="form-control" placeholder="Enter Keyword"/>
                                        <span className="input-group-append search-btn">
										    <i className="feather icon-search input-group-text"> </i>
									    </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#!" onclick="javascript:toggleFullScreen()" className="waves-effect waves-light">
                                <i className="full-screen feather icon-maximize"></i>
                            </a>
                            </li>
                        </ul>
                        <ul className="nav-right">
                            <li className="header-notification">
                                <div className="dropdown-primary dropdown">
                                    <div className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="feather icon-bell"></i>
                                        <span className="badge bg-c-red">5</span>
                                    </div>
                                    <ul className="show-notification notification-view dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                        <li>
                                            <h6>Notifications</h6>
                                            <label className="label label-danger">New</label>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img className="img-radius" src="assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                                                <div className="media-body">
                                                    <h5 className="notification-user">John Doe</h5>
                                                    <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                    <span className="notification-time">30 minutes ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img className="img-radius" src="assets/images/avatar-3.jpg" alt="Generic placeholder image"/>
                                                <div className="media-body">
                                                    <h5 className="notification-user">Joseph William</h5>
                                                    <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                    <span className="notification-time">30 minutes ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <img className="img-radius" src="assets/images/avatar-4.jpg" alt="Generic placeholder image"/>
                                                <div className="media-body">
                                                    <h5 className="notification-user">Sara Soudein</h5>
                                                    <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                                    <span className="notification-time">30 minutes ago</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="header-notification">
                                <div className="dropdown-primary dropdown">
                                    <div className="displayChatbox dropdown-toggle" data-toggle="dropdown">
                                        <i className="feather icon-message-square"></i>
                                        <span className="badge bg-c-green">3</span>
                                    </div>
                                </div>
                            </li>
                            <li className="user-profile header-notification">

                                <div className="dropdown-primary dropdown">
                                    <div className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="assets/images/avatar-4.jpg" className="img-radius" alt="User-Profile-Image"/>
                                        <span>John Doe</span>
                                        <i className="feather icon-chevron-down"></i>
                                    </div>
                                    <ul className="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                        <li>
                                            <a href="#!">
                                            <i className="feather icon-settings"></i> Settings

                                        </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <i className="feather icon-user"></i> Profile

                                            </a>
                                        </li>
                                        <li>
                                            <a href="email-inbox.html">
                                            <i className="feather icon-mail"></i> My Messages

                                            </a>
                                        </li>
                                        <li>
                                            <a href="auth-lock-screen.html">
                                            <i className="feather icon-lock"></i> Lock Screen

                                            </a>
                                        </li>
                                        <li>
                                            <a href="auth-sign-in-social.html">
                                            <i className="feather icon-log-out"></i> Logout

                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div id="sidebar" className="users p-chat-user showChat">
                <div className="had-container">
                    <div className="p-fixed users-main">
                        <div className="user-box">
                            <div className="chat-search-box">
                                <a className="back_friendlist">
                                    <i className="feather icon-x"></i>
                                </a>
                                <div className="right-icon-control">
                                    <div className="input-group input-group-button">
                                        <input type="text" id="search-friends" name="footer-email" className="form-control" placeholder="Search Friend" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary waves-effect waves-light" type="button"><i class="feather icon-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-friend-list">
                                <div className="media userlist-box waves-effect waves-light" data-id="1" data-status="online" data-username="Josephin Doe">
                                    <a className="media-left" href="#!">
                                                <img className="media-object img-radius img-radius" src="assets/images/avatar-3.jpg" alt="Generic placeholder image " />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                    <div className="media-body">
                                        <div className="chat-header">Josephin Doe</div>
                                    </div>
                                </div>
                                <div className="media userlist-box waves-effect waves-light" data-id="2" data-status="online" data-username="Lary Doe">
                                    <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="assets/images/avatar-2.jpg" alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                    <div className="media-body">
                                        <div className="f-13 chat-header">Lary Doe</div>
                                    </div>
                                </div>
                                <div className="media userlist-box waves-effect waves-light" data-id="3" data-status="online" data-username="Alice">
                                    <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                    <div className="media-body">
                                        <div className="f-13 chat-header">Alice</div>
                                    </div>
                                </div>
                                <div className="media userlist-box waves-effect waves-light" data-id="4" data-status="offline" data-username="Alia">
                                    <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="assets/images/avatar-3.jpg" alt="Generic placeholder image" />
                                                <div className="live-status bg-default"></div>
                                            </a>
                                    <div className="media-body">
                                        <div className="f-13 chat-header">Alia<small className="d-block text-muted">10 min ago</small></div>
                                    </div>
                                </div>
                                <div className="media userlist-box waves-effect waves-light" data-id="5" data-status="offline" data-username="Suzen">
                                    <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="assets/images/avatar-2.jpg" alt="Generic placeholder image" />
                                                <div className="live-status bg-default"></div>
                                            </a>
                                    <div className="media-body">
                                        <div className="f-13 chat-header">Suzen<small className="d-block text-muted">15 min ago</small></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="showChat_inner">
                <div className="media chat-inner-header">
                    <a className="back_chatBox">
                                <i className="feather icon-x"></i> Josephin Doe
                            </a>
                </div>
                <div className="main-friend-chat">
                    <div className="media chat-messages">
                        <a className="media-left photo-table" href="#!">
                                        <img className="media-object img-radius img-radius m-t-5" src="assets/images/avatar-2.jpg" alt="Generic placeholder image" />
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
                                        <img className="media-object img-radius img-radius m-t-5" src="assets/images/avatar-2.jpg" alt="Generic placeholder image" />
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
                    
                    <nav className="pcoded-navbar">
                        <div className="nav-list">
                            <div className="pcoded-inner-navbar main-menu">
                                <div className="pcoded-navigation-label">Navigation</div>
                                <ul className="pcoded-item pcoded-left-item">
                                    <li className="pcoded-hasmenu active pcoded-trigger">
                                        <a href="javascript:void(0)" className="waves-effect waves-dark">
            								<span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                            <span className="pcoded-mtext">Dashboard</span>
                                        </a>
                                        <ul className="pcoded-submenu">
                                            <li className="active">
                                                <a href="index.html" className="waves-effect waves-dark">
                                                    <span className="pcoded-mtext">Default</span>
                                                </a>
                                            </li>
                                            <li clclassNameass="">
                                                <a href="dashboard-crm.html" className="waves-effect waves-dark">
                                                    <span className="pcoded-mtext">CRM</span>
                                                </a>
                                            </li>
                                            <li className="">
                                                <a href="dashboard-analytics.html" className="waves-effect waves-dark">
                                                    <span className="pcoded-mtext">Analytics</span>
                                                    <span className="pcoded-badge label label-info ">NEW</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    
                                    
                                   

                                    
                                </ul>
                                
                                
                                
                                
                                
                                
                                
                                
                            </div>
                        </div>
                    </nav>
                    
                    <div class="pcoded-content">
                        
                        <div class="page-header card">
                            <div class="row align-items-end">
                                <div class="col-lg-8">
                                    <div class="page-header-title">
                                        <i class="feather icon-home bg-c-blue"></i>
                                        <div class="d-inline">
                                            <h5>Dashboard</h5>
                                            <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="page-header-breadcrumb">
                                        <ul class=" breadcrumb breadcrumb-title">
                                            <li class="breadcrumb-item">
                                                <a href="index.html"><i class="feather icon-home"></i></a>
                                            </li>
                                            <li class="breadcrumb-item"><a href="#!">Dashboard</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="pcoded-inner-content">
                            <div class="main-body">
                                <div class="page-wrapper">
                                    <div class="page-body">
                                        
                                        <div class="row">

                                            
                                            {/* <!-- <div class="col-md-12 col-xl-8">
                                                <div class="card sale-card">
                                                    <div class="card-header">
                                                        <h5>Deals Analytics</h5>
                                                    </div>
                                                    <div class="card-block">
                                                        <div id="sales-analytics" class="chart-shadow" style="height:380px"></div>
                                                    </div>
                                                </div>
                                            </div> --> */}
                                            {/* <!-- <div class="col-md-12 col-xl-4">
                                                <div class="card comp-card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col">
                                                                <h6 class="m-b-25">Impressions</h6>
                                                                <h3 class="f-w-700 text-c-blue">1,563</h3>
                                                                <p class="m-b-0">May 23 - June 01 (2017)</p>
                                                            </div>
                                                            <div class="col-auto">
                                                                <i class="fas fa-eye bg-c-blue"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card comp-card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col">
                                                                <h6 class="m-b-25">Goal</h6>
                                                                <h3 class="f-w-700 text-c-green">30,564</h3>
                                                                <p class="m-b-0">May 23 - June 01 (2017)</p>
                                                            </div>
                                                            <div class="col-auto">
                                                                <i class="fas fa-bullseye bg-c-green"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card comp-card">
                                                    <div class="card-body">
                                                        <div class="row align-items-center">
                                                            <div class="col">
                                                                <h6 class="m-b-25">Impact</h6>
                                                                <h3 class="f-w-700 text-c-yellow">42.6%</h3>
                                                                <p class="m-b-0">May 23 - June 01 (2017)</p>
                                                            </div>
                                                            <div class="col-auto">
                                                                <i class="fas fa-hand-paper bg-c-yellow"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> --> */}
                                            
                                            <div class="col-xl-12">
                                                <div class="card proj-progress-card">
                                                    <div class="card-block">
                                                        <div class="row">
                                                            <div class="col-xl-3 col-md-6">
                                                                <h6>Published Project</h6>
                                                                <h5 class="m-b-30 f-w-700">532<span class="text-c-green m-l-10">+1.69%</span></h5>
                                                                <div class="progress">
                                                                    <div className="progress-bar bg-c-red" ></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 col-md-6">
                                                                <h6>Completed Task</h6>
                                                                <h5 class="m-b-30 f-w-700">4,569<span class="text-c-red m-l-10">-0.5%</span></h5>
                                                                <div class="progress">
                                                                    <div class="progress-bar bg-c-blue" ></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 col-md-6">
                                                                <h6>Successfull Task</h6>
                                                                <h5 class="m-b-30 f-w-700">89%<span class="text-c-green m-l-10">+0.99%</span></h5>
                                                                <div class="progress">
                                                                    <div class="progress-bar bg-c-green" ></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-3 col-md-6">
                                                                <h6>Ongoing Project</h6>
                                                                <h5 class="m-b-30 f-w-700">365<span class="text-c-green m-l-10">+0.35%</span></h5>
                                                                <div class="progress">
                                                                    <div class="progress-bar bg-c-yellow" ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="col-xl-4 col-md-12">
                                                <div class="card latest-update-card">
                                                    <div class="card-header">
                                                        <h5>What’s New</h5>
                                                        <div class="card-header-right">
                                                            <ul class="list-unstyled card-option">
                                                                <li class="first-opt"><i class="feather icon-chevron-left open-card-option"></i></li>
                                                                <li><i class="feather icon-maximize full-card"></i></li>
                                                                <li><i class="feather icon-minus minimize-card"></i></li>
                                                                <li><i class="feather icon-refresh-cw reload-card"></i></li>
                                                                <li><i class="feather icon-trash close-card"></i></li>
                                                                <li><i class="feather icon-chevron-left open-card-option"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="card-block">
                                                        <div class="scroll-widget">
                                                            <div class="latest-update-box">
                                                                <div class="row p-t-20 p-b-30">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <img src="assets/images/avatar-4.jpg" alt="user image" class="img-radius img-40 align-top m-r-15 update-icon" />
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>Your Manager Posted.</h6></a>
                                                                        <p class="text-muted m-b-0">Jonny michel</p>
                                                                    </div>
                                                                </div>
                                                                <div class="row p-b-30">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <i class="feather icon-briefcase bg-c-red update-icon"></i>
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>You have 3 pending Task.</h6></a>
                                                                        <p class="text-muted m-b-0">Hemilton</p>
                                                                    </div>
                                                                </div>
                                                                <div class="row p-b-30">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <i class="feather icon-check f-w-600 bg-c-green update-icon"></i>
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>New Order Received.</h6></a>
                                                                        <p class="text-muted m-b-0">Hemilton</p>
                                                                    </div>
                                                                </div>
                                                                <div class="row p-b-30">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <img src="assets/images/avatar-4.jpg" alt="user image" class="img-radius img-40 align-top m-r-15 update-icon" />
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>Your Manager Posted.</h6></a>
                                                                        <p class="text-muted m-b-0">Jonny michel</p>
                                                                    </div>
                                                                </div>
                                                                <div class="row p-b-30">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <i class="feather icon-briefcase bg-c-red update-icon"></i>
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>You have 3 pending Task.</h6></a>
                                                                        <p class="text-muted m-b-0">Hemilton</p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <i class="feather icon-check f-w-600 bg-c-green update-icon"></i>
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>New Order Received.</h6></a>
                                                                        <p class="text-muted m-b-0">Hemilton</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-4 col-md-6">
                                                <div class="card latest-update-card">
                                                    <div class="card-header">
                                                        <h5>Latest Activity</h5>
                                                        <div class="card-header-right">
                                                            <ul class="list-unstyled card-option">
                                                                <li class="first-opt"><i class="feather icon-chevron-left open-card-option"></i></li>
                                                                <li><i class="feather icon-maximize full-card"></i></li>
                                                                <li><i class="feather icon-minus minimize-card"></i></li>
                                                                <li><i class="feather icon-refresh-cw reload-card"></i></li>
                                                                <li><i class="feather icon-trash close-card"></i></li>
                                                                <li><i class="feather icon-chevron-left open-card-option"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="card-block">
                                                        <div class="scroll-widget">
                                                            <div class="latest-update-box">
                                                                <div class="row p-t-20 p-b-30">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <i class="b-primary update-icon ring"></i>
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>Devlopment & Update</h6></a>
                                                                        <p class="text-muted m-b-0">Lorem ipsum dolor sit amet, <a href="#!" class="text-c-blue"> More</a></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row p-b-30">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <i class="b-primary update-icon ring"></i>
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>Showcases</h6></a>
                                                                        <p class="text-muted m-b-0">Lorem dolor sit amet, <a href="#!" class="text-c-blue"> More</a></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row p-b-30">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <i class="b-success update-icon ring"></i>
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>Miscellaneous</h6></a>
                                                                        <p class="text-muted m-b-0">Lorem ipsum dolor sit ipsum amet, <a href="#!" class="text-c-green"> More</a></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row p-b-30">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <i class="b-danger update-icon ring"></i>
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>Your Manager Posted.</h6></a>
                                                                        <p class="text-muted m-b-0">Lorem ipsum dolor sit amet, <a href="#!" class="text-c-red"> More</a></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row p-b-30">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <i class="b-primary update-icon ring"></i>
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>Showcases</h6></a>
                                                                        <p class="text-muted m-b-0">Lorem dolor sit amet, <a href="#!" class="text-c-blue"> More</a></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-auto text-right update-meta p-r-0">
                                                                        <i class="b-success update-icon ring"></i>
                                                                    </div>
                                                                    <div class="col p-l-5">
                                                                        <a href="#!"><h6>Miscellaneous</h6></a>
                                                                        <p class="text-muted m-b-0">Lorem ipsum dolor sit ipsum amet, <a href="#!" class="text-c-green"> More</a></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
 
export default Home;