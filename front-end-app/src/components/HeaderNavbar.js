import React from "react";
import Container from 'react-bootstrap/Container';
import logo from '../images/logo.svg';
import person from "../images/person-icon.svg";
import './css/header.scss';

const HeaderNavbar = () => {
    return (
        <div className="header-navbar-wrapper">
            <Container fluid>
                <div className="header-navbar">
                    <div className="left-block">
                        <div className="navbar">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="logo">
                            <img src={logo} alt="" />
                            <span>Jomma</span>
                        </div>
                    </div>
                    <div className="center-block">
                        <span>Invest</span>
                        <span>Market</span>
                        <span>BO Prefund & Withdraw</span>
                    </div>
                    <div className="right-block">
                        <img src={person} alt="" />
                        <button type="button">Log Out</button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
  
export default HeaderNavbar;