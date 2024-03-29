import React from 'react';

const FooterLayout = () => (
    <>
        <div className="sidenav-overlay"></div>
        <div className="drag-target"></div>

        <footer className="footer footer-static footer-light">
            <p className="clearfix blue-grey lighten-2 mb-0">
                <span className="float-md-left d-block d-md-inline-block mt-25">
                    COPYRIGHT &copy; 2021<a className="text-bold-800 grey darken-2" href="https://mbanking.dgb.co.kr" target="_blank">administrator,</a>All rights Reserved
                </span>
                <button className="btn btn-primary btn-icon scroll-top" type="button"><i className="feather icon-arrow-up"></i></button>
            </p>
        </footer>
    </>
)

export default FooterLayout;