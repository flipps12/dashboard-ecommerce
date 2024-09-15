import { useState } from "react"

function AddProduct() {
    const [stockNec, setStockNec] = useState<boolean>(true)

    const handleClicStock = () => {
        setStockNec(!stockNec);
        let stock: HTMLInputElement | null = document.getElementById('stockInput') as HTMLInputElement;
        if (stock != null) {
            stock.disabled = !stockNec;
            if (!stockNec) stock.value = '0';
        }

    }

    return (
        <div className="mt-4 w-full">
            <form className="flex flex-col bg-white px-8 py-8 rounded-xl shadow">
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">Agrega un producto:</h4>
                <span>Nombre del producto:</span>
                <input className="px-2 border border-gray-300 rounded h-8 mb-3 mt-1" type="text" />
                <span>Precio:</span>
                <input className="px-2 border border-gray-300 rounded h-8 mb-3 mt-1" type="text" />
                <div className="flex flex-row items-center mb-3 mt-1">
                    <span className="mr-3">El stock es necesario: </span>
                    <input onClick={handleClicStock} className="border border-gray-300 rounded h-6 w-6" type="checkbox" />
                </div>
                <span>Stock</span>
                <input id="stockInput" className="px-2 border border-gray-300 rounded h-8 mb-3 mt-1" type="number" />
                <span>Limite por orden:</span>
                <input className="px-2 border border-gray-300 rounded h-8 mb-3 mt-1" type="number" />
                <span>Url de imagen:</span>
                <input defaultValue={"https://example.com"} className="px-2 border border-gray-300 rounded h-8 mb-3 mt-1" type="url" />
                <span>Descripcion:</span>
                <textarea maxLength={255} className="px-2 border border-gray-300 rounded h-14 mb-3 mt-1" id=""></textarea>
                <div className="text-white bg-zinc-950 text-center py-2 rounded hover:bg-zinc-800 transition-colors">Añadir producto</div>
            </form>
        </div>
    )
}

export default AddProduct