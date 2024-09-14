

function Products() {
    return (
        <div className="mt-4 w-full">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">Administrar productos:</h4>
            <div className="grid grid-cols-4">
                <span className="text-gray-600">Nombre</span>
                <span className="text-gray-600">Precio</span>
                <span className="text-gray-600">Stock</span>
                <span className="text-gray-600">Acciones</span>
            </div>
            <div className="grid grid-cols-4">
                <div className="flex items-center">Producto</div>
                <div className="flex items-center">$500</div>
                <div className="flex items-center">45 unidades</div>
                <div ><button className="px-2 py-1 mr-[3px] border border-gray-600 bg-white rounded">Editar</button><button className="px-2 py-1 border border-red-600 text-white bg-red-600 rounded">Eliminar</button></div>
            </div>
        </div>
    )
}

export default Products