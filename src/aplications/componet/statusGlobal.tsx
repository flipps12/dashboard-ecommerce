import { useState, useEffect } from 'react';
import axios from 'axios';
import { StatusResponse } from '../../interface/StatusResponse';
import ErrorTarget from './error';



function StatusGlobal() {

    const [status, setStatus] = useState<StatusResponse>()
    const [error, setError] = useState<string>()

    useEffect(() => {
        axios.get("https://servidor1.store:8080/server")  // http://localhost:8080/server // https://servidor1.store:8080/server
            .then((response) => {
                let status: StatusResponse = response.data;
                setStatus(status);
            })
            .catch((error) => {
                console.log(error);
                setError(error.message)
            });
    }, []);

    console.log(status);

    const isAnyServiceOffline = (status: StatusResponse): boolean => {
        return Object.values(status).some(value => value !== "online");
    }


    if (error !== undefined) return <ErrorTarget error={error} />

    if (status == undefined) return
    if (!isAnyServiceOffline(status)) return (<></>)

    return (
        <div className='absolute w-screen h-screen bg-slate-400/70'>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-8 w-[70vw] h-[50vh] sm:h-72 rounded-xl">
                <h1 className='text-center text-white text-2xl font-bold'>Servidor(es) Offline</h1>
                <div className='grid grid-cols-3 grid-rows-2 gap-1 w-full h-3/4 items-center justify-between sm:flex-row'>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20 sm:w-12' src={status.gateway == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>Gateway</span>
                    </div>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20 sm:w-12' src={status.auth == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>Auth</span>
                    </div>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20 sm:w-12' src={status.mercado_pago == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>M. Pago</span>
                    </div>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20 sm:w-12' src={status.notification == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>Email</span>
                    </div>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20 sm:w-12' src={status.order == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>Order</span>
                    </div>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20 sm:w-12' src={status.product == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>Product</span>
                    </div>
                </div>
                <div className='flex justify-center w-full'><div className='text-white text-center text-xl bg-gray-800 border border-gray-600 px-3 py-2 rounded-md' onClick={() => setStatus(undefined)}>Ignorar</div></div>
            </div>
        </div>
    )
}

export default StatusGlobal;