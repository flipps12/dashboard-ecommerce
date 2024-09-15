
function Product ({ name, price, stock, sku }: any) {
    return (
        <div className="grid grid-cols-4">
            <div className="flex items-center">{ name }</div>
            <div className="flex items-center">${ price }</div>
            <div className="flex items-center">{ stock }</div>
            <div ><button className="px-2 py-1 mr-[3px] border border-gray-600 bg-white rounded">Editar</button><button className="px-2 py-1 border border-red-600 text-white bg-red-600 rounded">Eliminar</button></div>
        </div>
    )
}

export default Product;