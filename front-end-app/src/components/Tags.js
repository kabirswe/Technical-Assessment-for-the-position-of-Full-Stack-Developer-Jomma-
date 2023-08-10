import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Close from "../images/close-icon.svg";
import './css/tags.scss';

const Tags = ({ products }) => {
    return (
        <div className="tags-wrapper">
            <Container>
                <Row>
                    <div className="tags">
                        {products && products.map(item => (
                            <span key={item.product_id + item.product_name}>{item.product_code} <img src={Close} alt="" /></span>
                        ))}
                    </div>
                </Row>
            </Container>
        </div>
    );
}
  
export default Tags;