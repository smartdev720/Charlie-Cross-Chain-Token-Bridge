import React from "react";
import "./style.css";

interface InputFieldProps {
    placeholder: string;
    value: string | null;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
    invalid: boolean;
    error: string | null;
}

const InputField: React.FC<InputFieldProps> = ({placeholder, value, name, onChange, disabled, invalid, error}) => {
    return (
        <div className="h-[50px] mt-5">
            <div className={`input-wrapper relative h-[36px] w-full ${invalid ? "bg-red-500" : "bg-[#2C2C2C]"} transition-all duration-300 ease-in-out mb-1`}>
                <div className={`inset-[1px] input-wrapper absolute flex items-center justify-center bg-[#212121]`}>
                    <input
                        type="text"
                        className={`bg-transparent outline-none border-none text-white w-[90%] text-base ${disabled ? "cursor-not-allowed" : "cursor-text"}`}
                        value={value ? value : ""}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        disabled={disabled}
                    />
                </div>
            </div>
            {invalid && <span className="text-red-500 font-normal text-sm">{error ? error : ""}</span>}
        </div>
        
    );
}

export default InputField;