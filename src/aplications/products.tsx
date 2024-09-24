import { useState, useEffect } from 'react';
import { products } from '../interface/productsResponse';
import Product from './componet/product';
import axios from 'axios';


axios.defaults.withCredentials = true;

const api = 'http://servidor1.store:8080/api/product/seller/products';

function Products() {
    const [productsList, setProductsList] = useState<Array<products>>([])

    useEffect(() => {
        axios.get(api, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                const data: products[] = response.data;
                setProductsList(data);
            })
            .catch((error) => {
                //alert("Error");
                console.log(error);
            });
    }, []);

    return (
        <div className="mt-4 w-full">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">Administrar productos:</h4>
            <div className="grid grid-cols-4">
                <span className="text-gray-600">Nombre</span>
                <span className="text-gray-600">Precio</span>
                <span className="text-gray-600">Stock</span>
                <span className="text-gray-600">Acciones</span>
            </div>
            {productsList.map((product) => (
                <Product key={product.id} name={product.name} price={product.price} stock={product.stock} id={product.id} />
            ))}
        </div>
    )
}

export default Products