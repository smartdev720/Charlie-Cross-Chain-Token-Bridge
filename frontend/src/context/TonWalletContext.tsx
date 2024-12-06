import React, {createContext, useContext, useEffect, useState, ReactNode} from "react";
import {useTonAddress, useTonConnectUI} from "@tonconnect/ui-react";

interface TonWalletContextProps {
    address: string | any;
    rawAddress: string | any;
    connected: boolean;
    disconnectTonWallet: () => Promise<void>;
}

const TonWalletContext = createContext<TonWalletContextProps | undefined>(undefined);

export const useMyTonWallet = (): TonWalletContextProps => {
    const context = useContext(TonWalletContext);
    if(!context) {
        throw new Error("useTonWallet must be within a TonWalletProvider");
    }
    return context;
}

interface TonWalletProviderProps {
    children: ReactNode
}

export const TonWalletProvider: React.FC<TonWalletProviderProps> = ({children}) => {
    const [tonConnectUI] = useTonConnectUI();
    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);

    const disconnectTonWallet = async () => {
        try {
            await tonConnectUI.disconnect();
        } catch(error) {
            console.error("Disconnect Error:", error);
        }
    } 

    return (
        <TonWalletContext.Provider 
            value={{
                connected: tonConnectUI.connected,
                address: userFriendlyAddress,
                rawAddress: rawAddress,
                disconnectTonWallet
            }}
        >
            {children}
        </TonWalletContext.Provider>
    );
}