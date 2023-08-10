import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Fb from "../images/fb-icon.svg";
import Li from "../images/ln-icon.svg";
import Tw from "../images/t-icon.svg";
import Ig from "../images/ig-icon.svg";
import './css/footer.scss';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <Container>
                <Row>
                    <div className="footer">
                        <div className="footer-top">
                            <div className="left-block">
                                <div className="left-icon-block">
                                    <img src={Fb} alt="" />
                                    <img src={Li} alt="" />
                                    <img src={Tw} alt="" />
                                    <img src={Ig} alt="" />
                                </div>
                                <p>Privacy Policy</p>
                                <p>Terms & Conditions</p>
                            </div>
                            <div className="middle-block">
                                <p>Invest</p>
                                <p>Market</p>
                                <p>BO Prefund & Withdraw</p>
                                <p>Financial Planner</p>
                                <p>FAQs</p>
                            </div>
                            <div className="right-block">
                                <p>Write to Us with your questions</p>
                                <button>Go to Help Page</button>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            Jomma is a service of Jomma Limited, a private limited company registered under the Companies Act 1994. Trade License: 000223
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
  
export default Footer;