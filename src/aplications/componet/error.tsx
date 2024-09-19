import { useState } from 'react';

interface ErrorTargetProps {
    error: string;
}

function ErrorTarget({ error }: ErrorTargetProps) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }
    
    return (
        <div className='absolute w-screen h-screen bg-slate-400/70'>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-12 w-[80vw] h-[50vh] sm:h-72 sm:w-[40vw] rounded-xl">
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-white text-center font-bold text-2xl">{error}</h1>
                    <img className="animate-pulse w-4/5 sm:w-1/4" src="serveroffline.svg" alt="server, online, offline" />
                    <button onClick={handleClose} className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl px-3 py-2 text-white">Ignorar</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorTarget;