import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavbarContent extends Component {
    render() {
        return (
            <>
                <div className="navbar-custom">
                    <div className="container-fluid">
                        <div id="navigation">
                            {/* Navigation Menu*/}
                            <ul className="navigation-menu">
                                <li className="has-submenu">
                                    <Link to=""><i className="dripicons-meter" />Dashboard</Link>
                                </li>
                                <li className="has-submenu">
                                    <Link to="#"><i className="dripicons-view-thumb" />Management</Link>
                                    <ul className="submenu">
                                        <li className="has-submenu">
                                            <Link to="#">Master</Link>
                                            <ul className="submenu">
                                                <li><Link to="">Carousel</Link></li>
                                                <li><Link to="/navigationmaster">Navigation</Link></li>
                                                <li><Link to="form-advanced.html">Bank</Link></li>
                                                <li><Link to="form-editors.html">Rekening</Link></li>
                                                <li><Link to="form-uploads.html">Role</Link></li>
                                                <li><Link to="form-mask.html">Status Pembayaran</Link></li>
                                                <li><Link to="form-summernote.html">User</Link></li>
                                                <li><Link to="form-xeditable.html">Alamat Penerima User</Link></li>
                                                <li><Link to="form-xeditable.html">Brand</Link></li>
                                                <li><Link to="form-xeditable.html">Category</Link></li>
                                                <li><Link to="form-xeditable.html">Sepatu</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu">
                                            <Link to="#">Rekap Admin</Link>
                                            <ul className="submenu">
                                                <li><Link to="icons-material.html">Rekap Pembayaran Pembeli</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-submenu">
                                            <Link to="#">Laporan </Link>
                                            <ul className="submenu">
                                                <li><Link to="tables-basic.html">Laporan Penjualan</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            {/* End navigation menu */}
                        </div> {/* end #navigation */}
                    </div> {/* end container */}
                </div> {/* end navbar-custom */}
            </>
        )
    }
}
