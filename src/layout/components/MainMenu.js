import React from 'react';

const MainMenuLayout = () => (
    <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
        <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
                <li className="nav-item mr-auto">
                    <a className="navbar-brand" href="/">
                        <div className="brand-logo"></div>
                        <h2 className="brand-text mb-0">admin</h2>
                    </a>
                </li>
                <li className="nav-item nav-toggle">
                    <a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
                        <i className="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i>
                        <i className="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div className="shadow-bottom"></div>
        <div className="main-menu-content">
            <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                <li className=" navigation-header"><span>Apps</span></li>
                {
                /*
                <li className=" nav-item"><a href="app-calender.html"><i className="feather icon-calendar"></i><span
                    className="menu-title" data-i18n="Calender">Calender</span></a>
                </li>
                */
                }
                <li className="nav-item"><a href="#"><i className="feather icon-user"></i><span
                    className="menu-title" data-i18n="Ecommerce">사용자관리</span></a>
                    <ul className="menu-content">
                        <li>
                            <a onClick={()=>{alert(3)}}><i className="feather icon-circle"></i>
                                <span className="menu-item" data-i18n="Shop">사용자조회</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
)

export default MainMenuLayout;