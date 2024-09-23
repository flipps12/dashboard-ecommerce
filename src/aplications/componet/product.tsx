import axios from "axios";
import { useState } from "react";

axios.defaults.withCredentials = true;

const api = "https://servidor1.store:8080/api/product/seller/delete/"

function Product({ name, price, stock, id }: any) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }


    const deleteProduct = () => {
        axios.get(api + id)
            .then((response) => {
                const data = response.data;
                console.log(data)
                if (data == "Eliminado") handleClose();
            })
            .catch((error) => {
                // alert("Error");
                console.log(error);
            });
    }

    return (
        <div className="grid grid-cols-4 mb-1">
            <div className="flex items-center">{name}</div>
            <div className="flex items-center">${price}</div>
            <div className="flex items-center">{stock}</div>
            <div ><button className="px-2 py-1 mr-[3px] border border-gray-600 bg-white rounded">Editar</button><button onClick={deleteProduct} className="px-2 py-1 border border-red-600 text-white bg-red-600 rounded">Eliminar</button></div>
        </div>
    )
}

export default Product;