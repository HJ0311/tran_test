import React from 'react';

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[800px] h-[600px] bg-black">
                <h1 className="text-MainTitleColor font-['SuperPixel'] sm:text-6xl mt-20 text-center">PING PONG</h1>
                <h1 className="text-MainTitleColor font-['SuperPixel'] sm:text-6xl mt-3 text-center">GANG</h1>
                <div className="text-white font-['QuinqueFive'] flex justify-center mt-12 text-sm">
                    <p>EMAIL:</p>
                    <input className="bg-black w-[250px]"/>
                </div>
                <div className="text-white font-['QuinqueFive'] flex justify-center mt-8 sm:text-sm">
                    <p>PW:</p>
                    <input className="bg-black w-[200px]" type="password"/>
                </div>
                <div className="flex flex-col items-center mt-8 text-sm space-y-4">
                    <button className="w-[200px] text-white font-['QuinqueFive'] text-left flex items-center justify-start ml-2 relative group">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ➡️
                    </span>
                    LOGIN
                    </button>
                    <button className="w-[200px] text-white font-['QuinqueFive'] text-left flex items-center justify-start ml-2 relative group">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ➡️
                    </span>
                    REGISTER
                    </button>
                </div>
                <div className="text-sm flex justify-center text-center mt-16 tracking-[5px] leading-[27px]">
                    <p className="font-['QuinqueFive'] text-white">
                    TH & C 1980 1993 NAMCO LTD.<br/>NAMCO HOMETEK, INC.<br/>LICENSED BY NINTENDO
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Home;