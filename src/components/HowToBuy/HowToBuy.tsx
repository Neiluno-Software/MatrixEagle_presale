//import React from 'react';
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HowToBuy({ isOpen, onClose }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div 
        className="flex flex-col bg-gray-900/90 rounded-2xl shadow-md w-[80%] h-[80%] z-50 text-center justify-center items-center border border-[#00D962] md:border-2 2xl:border-4 p-4 md:p-6 xl:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[28px] md:text-[30px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] text-center font-bold mb-4 md:mb-5 2xl:mb-8 text-[#FFEB31]">How to Buy ETATA</p>
        <div className={`h-[70%] w-[96%] md:w-full xl:w-full grow text-left mb-3 md:mb-5 2xl:mb-8 overflow-auto text-[16px] md:text-[18px]`}>
          <p className=""><b>Note:</b> ETATA is currently in its presale phase and is not available on Uniswap,
            PancakeSwap, or any other decentralized exchanges (DEXs). Please be cautious and avoid purchasing any fake
            ETATA tokens that may be circulating on DEXs, as they are scams.</p>

          <p className="text-[22px] md:text-[24px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[30px] text-center font-bold mt-3 md:mt-4 2xl:mt-5 mb-2 md:mb-3 2xl:mb-4 text-[#FFEB31]">How to Buy</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">Step 1: Prepare Your Wallet</p>
          <p>Before participating in the ETATA presale, ensure you have a wallet supported by Wallet Connect. We
            recommend using MetaMask or Trust Wallet, but any decentralized wallet compatible with Wallet Connect will
            work.</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">Step 2: Get BNB, USDT or USDC</p>
          <p>Make sure you have BNB in your wallet, as it is required for small gas fees on the Binance Smart Chain network,
            regardless of whether you are purchasing with USDT or USDC.</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">Step 3: Connect to the DApp</p>
          <p className="mb-0">1. Open your preferred web browser and visit <a href="https://etata.com">https://etata.com.</a></p>
          <p className="mb-0">2. Click the "Connect Wallet" button.</p>
          <p className="mb-0">3. Ensure you are on the Binance Smart Chain (ERC20).</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">Step 4: Choose Payment Option</p>
          <p>On the ETATA presale dashboard, select your preferred payment option by clicking the appropriate button (BNB, USDT or
            USDC).</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">Step 5: Enter Purchase Amount</p>
          <p className="mb-0">1. Enter the amount of BNB, USDT or USDC you want to invest in the ETATA presale.</p>
          <p className="mb-0">2. The dashboard will display how many ETATA tokens you will receive for the selected amount.
          </p>
          <p className="mb-0">3. Confirm your selection and click the "Buy" button to proceed.</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">Step 6: Verify and Confirm Transaction</p>
          <p className="mb-0">1. Your wallet (e.g., MetaMask) will display the transaction details.</p>
          <p className="mb-0">2. Verify that the transaction details are correct, including the amount and recipient
            address.</p>
          <p className="mb-0">3. Confirm the transaction within your wallet.</p>
          <p className="mb-0">4. Wait for the transaction to be confirmed on the Binance Smart Chain network, it takes few seconds.</p>

          <p className="mb-0 mt-3"><b>IMPORTANT TO NOTE:</b> When purchasing with USDT or USDT, users must complete two
            transactions:</p>
          <p className="mb-0">1. The first transaction is to approve the USDT or USDC contract.</p>
          <p className="mb-0">2. The second transaction is for the actual purchase amount.</p>
          <p className="mb-0">Ensure both steps are completed to finalize your transaction.</p>

          <p className="text-[22px] md:text-[24px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[30px] text-center font-bold mt-2 md:mt-3 2xl:mt-4 mb-2 md:mb-3 2xl:mb-4 text-[#FFEB31]">Buy ETATA With Card</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">New to DeFi?</p>
          <p>New users can easily purchase ETATA using a credit or debit card without needing verification or KYC
            processes.</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">Step 1: Purchase BNB with Card</p>
          <p>Visit one of the following on-ramp websites:</p>

          <ul className="mb-4 ps-4">
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i> <a href="#0">• Transak</a></li>
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i> <a href="#0">• MoonPay</a></li>
          </ul>

          <p>Buy BNB and send it directly to your wallet. Follow the on-screen instructions provided on the
            platform.</p>

          <p><b>Tip:</b> We recommend purchasing a minimum of $50 worth of BNB to cover all expenses, including gas
            fees, for buying ETATA.</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">Step 2: Buy ETATA with Acquired BNB</p>
          <p>Once you've acquired BNB in your wallet, you can proceed to purchase ETATA using the same wallet.</p>
          <p>Follow the steps outlined earlier in the "How to Buy ETATA" section, starting from
            connecting your wallet to the ETATA website.</p>
          <p><b>Note:</b> Ensure you have enough BNB in your wallet to cover the amount of ETATA you wish to purchase,
            as well as any associated gas fees.</p>

          <p className="text-[22px] md:text-[24px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[30px] text-center font-bold mt-2 md:mt-3 2xl:mt-4 mb-2 md:mb-3 2xl:mb-4 text-[#FFEB31]">Add ETATA In Your Wallet</p>
          <p>To see your ETATA tokens in your wallet, add ETATA as a custom token by using the following
            details:</p>

          <ul className="mb-4 ps-4">
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i>
            <b>• Token Name:</b> ETATA for Collaborating Agriculture </li>
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i>
            <b>• Symbol:</b> ETATA</li>
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i>
            <b>• Network:</b> Binance Smart Chain</li>
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i>
            <b>• Decimals:</b> 18</li>
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i>
            <b>• Contract Address:</b> 0xddc2CbF96836f55ca40b819078F3ecbf1b270315</li>
          </ul>
        </div>
        <button 
          className="cursor-pointer w-[150px] bg-[#00D962] hover:bg-[#00D962]/90 text-[#01273E] text-xs sm:text-base md:text-lg 2xl:text-[20px] font-bold py-1 2xl:py-2 rounded-[10px] transition-colors"
          onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

