import React, {useState} from "react";
import Decrease from "../images/decrease-icon.svg";
import UpIcon from "../images/up-icon.svg";
import SelectedIcon from "../images/selected-icon.svg";
import AddIcon from "../images/add-icon.svg";
import './css/tableRow.scss';

const TableRow = ({product, handleSetSelectedProducts}) => {
    const {product_id, product_name, product_code, unit_price, gain_loss, year_to_date, active_status} = product;

    const [activeStatus, setActiveStatus] = useState(active_status);

    const handleSelect = () => {
        if(activeStatus) {
            setActiveStatus(0);
            handleSetSelectedProducts(product);
        }
    }

    return (
        <div className="table-row" key={product_id + product_name}>
            <div className="item text"><span>{product_code}</span><br />{product_name}</div>
            <div className="item price">{unit_price}<br /> <span><img src={Decrease} alt="" />{gain_loss}%</span> </div>
            <div className="item year"> <img src={UpIcon} alt="" />{year_to_date}%</div>
            <div className="item action">
                <img onClick={handleSelect} src={activeStatus ? AddIcon : SelectedIcon} alt="" />
            </div>
        </div>
    );
}
  
export default TableRow;