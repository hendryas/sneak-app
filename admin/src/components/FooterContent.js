import React, { Component } from 'react'

export default class FooterContent extends Component {
    render() {
        return (
            <>
                {/* Footer */}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <span className="d-none d-sm-inline-block">Crafted with <i className="mdi mdi-heart text-danger" /> by Team 5</span>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* End Footer */}

            </>
        )
    }
}
