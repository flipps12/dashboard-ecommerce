import { useState } from 'react'
import Products from './aplications/products'

function App() {

  return (
    <div className="flex h-screen bg-gray-100 flex-row">
      {/* Sidebar */}
      <aside className="w-14 sm:w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800 hidden sm:block">Seller Dashboard</h2>
          <i className="fa-solid fa-house sm:hidden text-center text-xl"></i>
        </div>
        <nav className="mt-6">
          <a href="#" className="sm:block hidden py-2 px-4 text-gray-700 hover:bg-gray-200">Products</a>
          <a href="#" className="sm:block hidden py-2 px-4 text-gray-700 hover:bg-gray-200">Orders</a>
          <a href="#" className="sm:hidden py-2 px-4 hover:bg-gray-200"><i className="fa-solid fa-gear text-xl"></i></a>
          <a href="#" className="sm:hidden py-2 px-4 hover:bg-gray-200"><i className="fa-solid fa-list text-xl"></i></a>
        </nav>
      </aside>

      <div className='flex flex-col w-full m-6'>
        <header className='w-full'>
          <h3 className='text-3xl font-semibold text-gray-800 mb-6'>Bienvenido, name</h3>
          <div className='grid grid-rows-3 gap-2 w-full place-items-center sm:grid-cols-3 sm:grid-rows-1'>
            <div className='flex flex-col h-24 w-5/6 rounded-2xl shadow border bg-white min-w-32 sm:h-32 sm:w-5/6 p-4'>
              <div className='flex flex-row justify-between flex-1'><h5 className='text-xl font-medium'>Titulo</h5> <i>l</i></div>
              <div className='text-3xl font-bold w-full'>1234</div>
            </div>
            <div className='flex flex-col h-24 w-5/6 rounded-2xl shadow border bg-white min-w-32 sm:h-32 sm:w-5/6 p-4'>
              <div className='flex flex-row justify-between flex-1'><h5 className='text-xl font-medium'>Titulo</h5> <i>l</i></div>
              <div className='text-3xl font-bold w-full'>1234</div>
            </div>
            <div className='flex flex-col h-24 w-5/6 rounded-2xl shadow border bg-white min-w-32 sm:h-32 sm:w-5/6 p-4'>
              <div className='flex flex-row justify-between flex-1'><h5 className='text-xl font-medium'>Titulo</h5> <i>l</i></div>
              <div className='text-3xl font-bold w-full'>1234</div>
            </div>
          </div>
        </header>

        <div className='ml-4 mt-6'>
          <button className='text-base font-bold px-4 py-1 bg-white rounded-xl shadow'>Productos:</button>
          <button className='text-base font-bold px-4 py-1 text-gray-500 rounded-xl'>Añadir producto:</button>
        </div>

        <Products />
      </div>
    </div>
  )
}

export default App
