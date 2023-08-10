import React from "react";
import './css/nextLink.scss';

const NextLink = ({handleSaveProducts}) => {
    return (
        <div className="next-link-wrapper">
            <button onClick={handleSaveProducts}>Next</button>
        </div>
    );
}
  
export default NextLink;