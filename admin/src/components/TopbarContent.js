import React, { Component } from 'react'

export default class TopbarContent extends Component {
    render() {
        return (
            <>
                <div className="topbar-main">
                    <div className="container-fluid">
                        {/* Logo container*/}
                        <div className="logo">
                            {/* Image Logo */}
                            <a href="index.html" className="logo">
                                <img src="assets/images/logo-sm.png" alt="img-logo" height={32} className="logo-small" />
                                <img src="assets/images/logo.png" alt="img-logo" height={20} className="logo-large" />
                            </a>
                        </div>
                        {/* End Logo container*/}
                        <div className="menu-extras topbar-custom">
                            <ul className="list-inline float-right mb-0">
                                {/* Search */}
                                <li className="list-inline-item dropdown notification-list d-none d-sm-inline-block">
                                    <form role="search" className="app-search">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" placeholder="Search.." />
                                            <button type="submit"><i className="fa fa-search" /></button>
                                        </div>
                                    </form>
                                </li>
                                {/* Messages*/}
                                <li className="list-inline-item dropdown notification-list">
                                    <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <i className="mdi mdi-email-outline noti-icon" />
                                        <span className="badge badge-danger badge-pill noti-icon-badge">5</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-animated dropdown-menu-lg">
                                        {/* item*/}
                                        <div className="dropdown-item noti-title">
                                            <span className="badge badge-danger float-right">367</span>
                                            <h5>Messages</h5>
                                        </div>
                                        <div className="slimscroll" style={{ maxHeight: 230 }}>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon"><img src="assets/images/users/user-2.jpg" alt="user-img" className="img-fluid rounded-circle" /> </div>
                                                <p className="notify-details"><b>Charles M. Jones</b><span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                            </a>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon"><img src="assets/images/users/user-3.jpg" alt="user-img" className="img-fluid rounded-circle" /> </div>
                                                <p className="notify-details"><b>Thomas J. Mimms</b><span className="text-muted">You have 87 unread messages</span></p>
                                            </a>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon"><img src="assets/images/users/user-4.jpg" alt="user-img" className="img-fluid rounded-circle" /> </div>
                                                <p className="notify-details">Luis M. Konrad<span className="text-muted">It is a long established fact that a reader will</span></p>
                                            </a>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon"><img src="assets/images/users/user-5.jpg" alt="user-img" className="img-fluid rounded-circle" /> </div>
                                                <p className="notify-details"><b>Kendall E. Walker</b><span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                            </a>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon"><img src="assets/images/users/user-6.jpg" alt="user-img" className="img-fluid rounded-circle" /> </div>
                                                <p className="notify-details"><b>David M. Ryan</b><span className="text-muted">You have 87 unread messages</span></p>
                                            </a>
                                        </div>
                                        {/* All*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-all">
                                            View All
                                        </a>
                                    </div>
                                </li>
                                {/* notification*/}
                                <li className="list-inline-item dropdown notification-list">
                                    <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <i className="mdi mdi-bell-outline noti-icon" />
                                        <span className="badge badge-success badge-pill noti-icon-badge">3</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-menu-lg">
                                        {/* item*/}
                                        <div className="dropdown-item noti-title">
                                            <span className="badge badge-danger float-right">84</span>
                                            <h5>Notification</h5>
                                        </div>
                                        <div className="slimscroll" style={{ maxHeight: 230 }}>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-primary"><i className="mdi mdi-cart-outline" /></div>
                                                <p className="notify-details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                                            </a>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-success"><i className="mdi mdi-message" /></div>
                                                <p className="notify-details">New Message received<span className="text-muted">You have 87 unread messages</span></p>
                                            </a>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-warning"><i className="mdi mdi-martini" /></div>
                                                <p className="notify-details">Your item is shipped<span className="text-muted">It is a long established fact that a reader will</span></p>
                                            </a>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-danger"><i className="mdi mdi-message" /></div>
                                                <p className="notify-details">New Message received<span className="text-muted">You have 87 unread messages</span></p>
                                            </a>
                                            {/* item*/}
                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                                <div className="notify-icon bg-info"><i className="mdi mdi-martini" /></div>
                                                <p className="notify-details">Your item is shipped<span className="text-muted">It is a long established fact that a reader will</span></p>
                                            </a>
                                        </div>
                                        {/* All*/}
                                        <a href="javascript:void(0);" className="dropdown-item notify-all">
                                            View All
                                        </a>
                                    </div>
                                </li>
                                {/* User*/}
                                <li className="list-inline-item dropdown notification-list">
                                    <a className="nav-link dropdown-toggle arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                        <img src="assets/images/users/user-1.jpg" alt="user" className="rounded-circle" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown ">
                                        <a className="dropdown-item" href="#"><i className="mdi mdi-account-circle m-r-5 text-muted" /> Profile</a>
                                        <a className="dropdown-item" href="#"><span className="badge badge-success mt-1 float-right">5</span><i className="mdi mdi-settings m-r-5 text-muted" /> Settings</a>
                                        <a className="dropdown-item" href="#"><i className="mdi mdi-lock-open-outline m-r-5 text-muted" /> Lock screen</a>
                                        <a className="dropdown-item" href="#"><i className="mdi mdi-logout m-r-5 text-muted" /> Logout</a>
                                    </div>
                                </li>
                                <li className="menu-item list-inline-item">
                                    {/* Mobile menu toggle*/}
                                    <a className="navbar-toggle nav-link">
                                        <div className="lines">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    </a>
                                    {/* End mobile menu toggle*/}
                                </li>
                            </ul>
                        </div>
                        {/* end menu-extras */}
                        <div className="clearfix" />
                    </div> {/* end container */}
                </div>
            </>
        )
    }
}
