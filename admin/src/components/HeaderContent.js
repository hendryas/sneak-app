import React, { Component } from 'react'
import TopbarContent from './TopbarContent'
import NavbarContent from './NavbarContent'

export default class HeaderContent extends Component {
    render() {
        return (
            <>
                <header id="topnav">
                    <TopbarContent />
                    {/* end topbar-main */}
                    {/* MENU Start */}
                    <NavbarContent />
                </header>
            </>
        )
    }
}
