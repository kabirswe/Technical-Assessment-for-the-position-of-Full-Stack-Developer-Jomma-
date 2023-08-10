import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Invest from "../images/invest-icon.svg";
import upIcon from "../images/up-icon-small.svg";
import messageIcon from "../images/message.svg";
import './css/invest.scss';

const PortfolioValue = () => {
    return (
        <div className="invest-wrapper">
            <Container>
                <Row>
                    <div className="invest">
                        <div className="value-block">
                            <img src={Invest} alt="" />Invest
                        </div>
                        <div className="menu-block">
                            <div className="link active">
                                Stock
                            </div>
                            <div className="link">
                                Bonds
                            </div>
                            <div className="link">
                                Mutual Fund
                            </div>
                        </div>
                        <div className="content-block">
                            <p><span className="text">Portfolio Value ( Tk ) </span><span className="price">268.00</span></p>
                            <p><span className="text">Total Units</span><span className="price">15</span></p>
                            <p>since last week</p>
                            <p>0.87 % <img src={upIcon} alt="" /></p>
                        </div>
                        <img className="icon-fixed" src={messageIcon} alt="" />
                    </div>
                </Row>
            </Container>
        </div>
    );
}
  
export default PortfolioValue;