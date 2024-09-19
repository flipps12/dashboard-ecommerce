import { useState, useEffect } from 'react';
import axios from 'axios';
import { StatusResponse } from '../../interface/StatusResponse';



function StatusGlobal() {

    const [status, setStatus] = useState<StatusResponse>()

    useEffect(() => {
        axios.get("http://localhost:8080/server")
            .then((response) => {
                let status: StatusResponse = response.data;
                setStatus(status);
            })
            .catch((error) => {
                console.log(error);
                alert("Servidor principal (aparentemente) caído")
            });
    }, []);

    console.log(status);

    const isAnyServiceOffline = (status: StatusResponse): boolean => {
        return Object.values(status).some(value => value !== "online");
    }


    if (status == undefined) return
    if (!isAnyServiceOffline(status)) return (<></>)

    return (
        <div className='absolute w-screen h-screen bg-slate-400/70'>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-8 w-[70vw] h-[90vh] sm:h-72 rounded-xl">
                <div className='flex flex-col w-full h-full items-center justify-between sm:flex-row'>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20' src={status.gateway == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>Gateway</span>
                    </div>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20' src={status.auth == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>Auth</span>
                    </div>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20' src={status.mercado_pago == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>M. Pago</span>
                    </div>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20' src={status.notification == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>Email</span>
                    </div>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20' src={status.order == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>Order</span>
                    </div>
                    <div className='flex flex-col text-white items-center bg-slate-800 rounded-lg p-[1px]'>
                        <img className='w-20' src={status.product == "online" ? "./server.svg" : "./serveroffline.svg"} alt="" />
                        <span>Product</span>
                    </div>
                </div>
                <div className='w-full text-white text-center text-xl' onClick={() => setStatus(undefined)}>Ignorar</div>
            </div>
        </div>
    )
}

export default StatusGlobal;