import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import upIcon from "../images/up-icon-small.svg";
import './css/portfolioValue.scss';

const PortfolioValue = () => {
    return (
        <div className="portfolio-wrapper">
            <Container>
                <Row>
                    <div className="portfolio">
                        <div className="value-block">
                            <p>since last week</p>
                            <p>portfolio Value</p>
                            <p>৳ 0.00 <img src={upIcon} alt="" /></p>
                            <p>BO A/C Balance(Cash)</p>
                            <p>৳ <span>0.00</span></p>
                        </div>
                        <button type="button">Prefund Now</button>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
  
export default PortfolioValue;