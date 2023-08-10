import React, {useState, useEffect} from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import TableRow from "./TableRow";
import NextLink from './NextLink';
import Tags from './Tags';
import NextActive from "../images/next-active-icon.svg";
import PrevInactive from "../images/previous-inactive-icon.svg";
import Filter from "../images/filter-icon.svg";
import logo from '../images/logo.svg';
import './css/dataTable.scss';

const client = axios.create({
    baseURL: "http://localhost:8000/api"
});
const postUrl = "http://localhost:8000/api/items";

const DataTable = () => {
    const [products, setProducts] = useState(null);
    const [searchProducts, setSearchProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [message, setMessage] = useState('');
    const [nameSort, setNameSort] = useState(false);
    const [priceSort, setPriceSort] = useState(false);
    const [yearSort, setYearSort] = useState(false);
    const [filterSort, setFilterSort] = useState(false);
    const [show, setShow] = useState(false);

    const handleSetSelectedProducts = (item) => {
        console.log(item);
        selectedProducts.push(item)
    }

    const handleNameSort = () => {
        const newProductList = [...products];
        const newArr = newProductList.sort((a, b) => {
            const nameA = a.product_name.toUpperCase();
            const nameB = b.product_name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        setSearchProducts([]);
        if(nameSort) {
            setSearchProducts([...products]);
        } else {
            setSearchProducts([...newArr]);
        }
        setNameSort(!nameSort);
    }

    const handlePriceSort = () => {
        const newProductList = [...products];
        const newArr = newProductList.sort((a, b) => {
            if(priceSort) {
                return b.unit_price - a.unit_price;
            } else {
                return a.unit_price - b.unit_price;
            }
        });
        setSearchProducts([]);
        setSearchProducts([...newArr]);
        setPriceSort(!priceSort);
    }
    const handleYearSort = () => {
        const newProductList = [...products];
        const newArr = newProductList.sort((a, b) => {
            if(yearSort) {
                return b.year_to_date - a.year_to_date;
            } else {
                return a.year_to_date - b.year_to_date;
            }
        });
        setSearchProducts([]);
        setSearchProducts([...newArr]);
        setYearSort(!priceSort);
    }
    const handleFilterSort = () => {
        const newProductList = [...products];
        const newArr = newProductList.sort((a, b) => {
            if(filterSort) {
                return b.active_status - a.active_status;
            } else {
                return a.active_status - b.active_status;
            }
        });
        setSearchProducts([]);
        setSearchProducts([...newArr]);
        setFilterSort(!priceSort);
    }

    const handleSearchText = (e) => {
        const text = e.target.value.split(' ');
        const newProductList = [...products];
        const newArr = newProductList.filter(item => {
            return text.every(el => {
                return item.product_name.toLowerCase().includes(el);
            });
        });
        setSearchProducts([]);
        setSearchProducts([...newArr]);
    }

    const handleSaveProducts = async () => {
        if(selectedProducts.length === 0) {
            setMessage('You forgot to select products !');
            setShow(true)
        } else {
            axios.post(postUrl, {
                data: selectedProducts
            })
            .then((response) => {
                setMessage(response.data.response);
                setSelectedProducts([]);
                setShow(true)
            });
        }
    }

    useEffect(() => {
        async function getProducts() {
            const response = await client.get("/items");
            setProducts(response.data.response);
            setSearchProducts(response.data.response);
        }
        getProducts();
    }, []);
    
    return (
        <>
            <div className="data-table-wrapper">
                <Container>
                    <Row>
                        <div className="data-table">
                            <div className="menu-block">
                                <div className="link active">
                                    Buy Requests
                                </div>
                                <div className="link">
                                    Sell Requests
                                </div>
                            </div>
                            <div className="search-block">
                                <input type="text" placeholder="Select Stock" onChange={handleSearchText} />
                                <button>Clear</button>
                            </div>
                            <div className="table-block">
                                <div className="table-header">
                                    <div className="item" onClick={handleNameSort}>Stocks</div>
                                    <div className="item" onClick={handlePriceSort}>Unit Price (Tk)<br />Gain/ Loss (%)</div>
                                    <div className="item" onClick={handleYearSort}>Year to Date<br />(%)</div>
                                    <div className="item" onClick={handleFilterSort}>
                                        <img src={Filter} alt="" />
                                        Filter
                                    </div>
                                </div>
                                {!searchProducts ? (
                                    <div className="loader-block">
                                        <div className="loader"></div>
                                    </div>
                                    ) : (
                                        searchProducts.map(obj => (
                                        <TableRow key={obj.product_id} product={obj} handleSetSelectedProducts={handleSetSelectedProducts} />
                                    ))
                                )}

                            </div>
                            <div className="pagination-block">
                                <img src={PrevInactive} alt="" />
                                <p className="active">1-10</p>
                                <p>11-20</p>
                                <p>21-30</p>
                                <p>31-40</p>
                                <img src={NextActive} alt="" />
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <Tags products={products} />
            <Toast onClose={() => setShow(false)} show={show} delay={5000} animation={false} autohide>
                <Toast.Header>
                    <img
                        src={logo}
                        className="me-2"
                        alt=""
                    />
                    <strong className="me-auto">Jomma</strong>
                    <small>Few seconds ago</small>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
                </Toast>
            <NextLink handleSaveProducts={handleSaveProducts} />
        </>
    );
}
  
export default DataTable;