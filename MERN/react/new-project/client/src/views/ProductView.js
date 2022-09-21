import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/product')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    return (
        <div>
            <ProductForm />
            <hr />
            <h1>All Products:</h1>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    );
}

export default Main;

