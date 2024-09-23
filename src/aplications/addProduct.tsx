import { useState } from "react"
import axios from "axios"
import { AddProductInterface } from "../interface/addProductRequest";

axios.defaults.withCredentials = true;

const api = "https://servidor1.store:8080/api/product/seller";

function AddProduct() {
    const [data, setData] = useState<string>()
    const [dataRequest, setDataRequest] = useState<AddProductInterface>()
    const [stockNec, setStockNec] = useState<boolean>(true)

    const handleClicStock = () => {
        setStockNec(!stockNec);
        let stock: HTMLInputElement | null = document.getElementById('stockInput') as HTMLInputElement;
        if (stock != null) {
            stock.disabled = !stockNec;
            if (!stockNec) stock.value = '0';
        }

    }


    const setValues = () => {
        setDataRequest({
            sku: (document.getElementById("sku") as HTMLInputElement)?.value ?? "",
            name: (document.getElementById("name") as HTMLInputElement)?.value ?? "",
            price: parseFloat((document.getElementById("price") as HTMLInputElement)?.value ?? 0),
            description: (document.getElementById("description") as HTMLInputElement)?.value ?? "",
            stock: parseFloat((document.getElementById("stockInput") as HTMLInputElement)?.value ?? 0),
            stockNecessary: (document.getElementById("stockNecessary") as HTMLInputElement)?.checked ?? false,
            limitPerOrder: parseFloat((document.getElementById("limitPerOrder") as HTMLInputElement)?.value ?? 1),
            pictureUrl: (document.getElementById("pictureUrl") as HTMLInputElement)?.value ?? ""
        });
        console.log(dataRequest)
        axios.post(api, dataRequest, { withCredentials: true })
            .then((response) => {
                const data: string = response.data;
                setData(data);
                if (data == "auth") alert("producto agregado")
            })
            .catch((error) => {
                // alert("Error");
                console.log(error);
            });
        console.log(data)
    };



    return (
        <div className="mt-4 w-full">
            <form className="flex flex-col bg-white px-8 py-8 rounded-xl shadow">
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">Agrega un producto:</h4>
                <span>Nombre del producto:</span>
                <input id="name" className="px-2 border border-gray-300 rounded h-8 mb-3 mt-1" type="text" />
                <span>Precio:</span>
                <input id="price" className="px-2 border border-gray-300 rounded h-8 mb-3 mt-1" type="number" />
                <span>SKU del producto:</span>
                <input id="sku" className="px-2 border border-gray-300 rounded h-8 mb-3 mt-1" type="text" />
                <span>Precio:</span>
                <div className="flex flex-row items-center mb-3 mt-1">
                    <span className="mr-3">El stock es necesario: </span>
                    <input id="stockNecessary" onClick={handleClicStock} className="border border-gray-300 rounded h-6 w-6" type="checkbox" />
                </div>
                <span>Stock</span>
                <input id="stockInput" className="px-2 border border-gray-300 rounded h-8 mb-3 mt-1" type="number" />
                <span>Limite por orden:</span>
                <input id="limitPerOrder" className="px-2 border border-gray-300 rounded h-8 mb-3 mt-1" type="number" />
                <span>Url de imagen:</span>
                <input id="pictureUrl" defaultValue={"https://example.com"} className="px-2 border border-gray-300 rounded h-8 mb-3 mt-1" type="url" />
                <span>Descripcion:</span>
                <textarea id="description" maxLength={255} className="px-2 border border-gray-300 rounded h-14 mb-3 mt-1"></textarea>
                <div onClick={setValues} className="text-white bg-zinc-950 text-center py-2 rounded hover:bg-zinc-800 transition-colors">Añadir producto</div>
            </form>
        </div>
    )
}

export default AddProduct