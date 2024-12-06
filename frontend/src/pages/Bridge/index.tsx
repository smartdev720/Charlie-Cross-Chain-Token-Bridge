import React, { useState } from "react";
import "./style.css";
import InputField from "../../components/InputField";

const Bridge = () => {
    const [input, setInput] = useState<any>(null);
    const [inputErrors, setInputErrors] = useState<any>(null);
    const [isSwapToggle, setIsSwapToggle] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInput({ ...input, [e.target.name]: e.target.value });

    const handleSwap = () => {
        setIsSwapToggle((prev) => !prev);
        setInput(null);
        setInputErrors(null);
    };

    return (
        <div className="2xl:w-[90%] xl:x-[90%] lg:w-full mx-auto mt-20">
            {/* Title bar */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold">BRIDGE</h1>
                <p className="text-base font-normal text-center text-white/50 mt-2">
                    From TON To CHRLE, From CHRLE To TON
                </p>
            </div>
            {/* Swap */}
            <div className="w-[34%] mx-auto p-2">
                {/* Header */}
                <div className="w-full">
                    <div className="flex items-center justify-between h-[190px] overflow-hidden">
                        {/* Conditionally render images */}
                        <img
                            src={isSwapToggle ? "./assets/chrle.svg" : "https://cryptologos.cc/logos/toncoin-ton-logo.svg?v=035"}
                            alt={isSwapToggle ? "chrle" : "ton"}
                            className={`${isSwapToggle ? "w-40 h-auto -rotate-[30deg]" : "w-24 h-24 ml-8 mr-5"} hover:scale-110 transition-all duration-300 ease-in-out`}
                        />
                        <button
                            onClick={handleSwap}
                        >
                            <img src="./assets/swap.png" alt="swap" className="w-14 h-14 hover:scale-125 transition-all duration-300 ease-in-out" />
                        </button>
                        <img
                            src={isSwapToggle ? "https://cryptologos.cc/logos/toncoin-ton-logo.svg?v=035" : "./assets/chrle.svg"}
                            alt={isSwapToggle ? "ton" : "chrle"}
                            className={`${isSwapToggle ? "w-24 h-24 mr-8 ml-5" : "w-40 h-auto -rotate-[30deg]"} hover:scale-110 transition-all duration-300 ease-in-out`}
                        />
                    </div>
                    <div className="mt-2">
                        <p className="text-white/50 font-semibold text-md text-center">You are {isSwapToggle ? "selling" : "buying"} your CHRLE with TONcoin</p>
                    </div>
                </div>
                {/* Form */}
                <div className="filter-wrapper relative bg-[#444444] h-[250px] mt-2">
                    <div className="filter-wrapper inset-[1px] absolute bg-[#1C1C1C] px-8 py-2">
                        <InputField
                            name="amount"
                            placeholder="Amount"
                            value={input && input.amount}
                            onChange={handleInputChange}
                            invalid={inputErrors && inputErrors.amount}
                            error={inputErrors && inputErrors.amount}
                            disabled={false}
                        />
                        <InputField
                            name="address"
                            placeholder={`${isSwapToggle ? "Destination TON Address" : "Destination Base Address"}`}
                            value={input && input.address}
                            onChange={handleInputChange}
                            invalid={inputErrors && inputErrors.address}
                            error={inputErrors && inputErrors.address}
                            disabled={false}
                        />
                        <div className="transfer-wrapper w-full h-[50px] bg-gradient relative mt-6 transition-all duration-300 ease-in-out">
                            <div className="transfer-wrapper inset-[3px] bg-white absolute">
                                <button
                                    className="text-white transfer-wrapper inset-[1px] absolute bg-gradient flex items-center justify-center"
                                >
                                    Transfer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bridge;
