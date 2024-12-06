import React from "react";
import "./style.css";
import { useTonConnectUI} from "@tonconnect/ui-react";
import { useMyTonWallet } from "../../context/TonWalletContext";

interface NavbarProps {
    navIcon: boolean;
    setNavIcon: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({navIcon, setNavIcon}) => {
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const {connected, address, disconnectTonWallet} = useMyTonWallet();

  const handleConnectWallet = async () => {
    try {
      if(!connected) {
        console.log(address);
        tonConnectUI.openModal();
      } else {
        await disconnectTonWallet();
      }
    } catch(error) {
      console.error("HandleConnectWallet Error:", error);
    }
  }

  return (
        <header className="w-full flex flex-row gap-2">
          {/* Desktop */}
          <nav className="basis-5/6 nav-wrapper relative h-[60px] bg-[#444444]">
            <div className="flex items-center nav-wrapper justify-between inset-[1px] absolute bg-[#1C1C1C] px-5">
              <div className="flex flex-row items-center justify-center gap-20 2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-10">
                <img src="./assets/chrle.svg" alt="logo" className="w-16 h-auto" />
              </div>
            </div>
          </nav>
          <div className="basis-1/6">
            <div className="connect-wrapper w-full h-[60px] bg-gradient relative hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="connect-wrapper inset-[3px] bg-white absolute">
                <div className="hidden 2xl:block xl:block lg:block md:block sm:hidden">
                  <button
                    className="text-white connect-wrapper inset-[1px] absolute bg-gradient flex items-center justify-center"
                    onClick={handleConnectWallet}
                  >
                    {connected ? `${address.substring(0, 10)}...` : "Connect wallet"}
                  </button>
                </div>
                <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
                  <button className="text-white connect-wrapper inset-[1px] absolute bg-gradient flex items-center justify-center">
                    <img
                      src={`./assets/${navIcon ? "times" : "burgar"}.svg`}
                      alt="navIcon"
                      className={`transition-all duration-300 ease-in-out transform`}
                      onClick={() => {
                        setNavIcon(!navIcon);
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
      </header>
  );
}

export default Navbar;