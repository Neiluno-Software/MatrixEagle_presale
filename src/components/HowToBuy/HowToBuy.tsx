//import React from 'react';
import { useTranslation } from "react-i18next";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HowToBuy({ isOpen, onClose }: DialogProps) {
  if (!isOpen) return null;
  const { t } = useTranslation();

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div 
        className="flex flex-col bg-gray-900/90 rounded-2xl shadow-md w-[80%] h-[80%] z-50 text-center justify-center items-center border border-[#00D962] md:border-2 2xl:border-4 p-4 md:p-6 xl:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[28px] md:text-[30px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] text-center font-bold mb-4 md:mb-5 2xl:mb-8 text-[#FFEB31]">{t("howToBuySection.how_to_buy_etata")}</p>
        <div className={`h-[70%] w-[96%] md:w-full xl:w-full grow text-left mb-3 md:mb-5 2xl:mb-8 overflow-auto text-[16px] md:text-[18px]`}>
          <p className=""><b>{t("howToBuySection.note")}</b> {t("howToBuySection.etata_presale_note")}</p>

          <p className="text-[22px] md:text-[24px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[30px] text-center font-bold mt-3 md:mt-4 2xl:mt-5 mb-2 md:mb-3 2xl:mb-4 text-[#FFEB31]">{t("howToBuySection.buy_etata_with_crypto")}</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">{t("howToBuySection.step_1_prepare_wallet")}</p>
          <p>{t("howToBuySection.prepare_wallet_text")}</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">{t("howToBuySection.step_2_get_bnb")}</p>
          <p>{t("howToBuySection.get_bnb_text")}</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">{t("howToBuySection.step_3_connect_dapp")}</p>
          <p className="mb-0">{t("howToBuySection.connect_dapp_step_1")} <a href="https://etata.com" className="text-[#FFEB31]">https://etata.com.</a></p>
          <p className="mb-0">{t("howToBuySection.connect_dapp_step_2")}</p>
          <p className="mb-0">{t("howToBuySection.connect_dapp_step_3")}</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">{t("howToBuySection.step_4_choose_payment")}</p>
          <p>{t("howToBuySection.choose_payment_text")}</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">{t("howToBuySection.step_5_enter_amount")}</p>
          <p className="mb-0">{t("howToBuySection.enter_amount_step_1")}</p>
          <p className="mb-0">{t("howToBuySection.enter_amount_step_2")}</p>
          <p className="mb-0">{t("howToBuySection.enter_amount_step_3")}</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">{t("howToBuySection.step_6_verify_transaction")}</p>
          <p className="mb-0">{t("howToBuySection.verify_transaction_step_1")}</p>
          <p className="mb-0">{t("howToBuySection.verify_transaction_step_2")}</p>
          <p className="mb-0">{t("howToBuySection.verify_transaction_step_3")}</p>
          <p className="mb-0">{t("howToBuySection.verify_transaction_step_4")}</p>

          <p className="mb-0 mt-3"><b>{t("howToBuySection.important_note")}</b> {t("howToBuySection.important_note_text")}</p>
          <p className="mb-0">{t("howToBuySection.important_note_content1")}</p>
          <p className="mb-0">{t("howToBuySection.important_note_content2")}</p>
          <p className="mb-0">{t("howToBuySection.important_note_content3")}</p>

          <p className="text-[22px] md:text-[24px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[30px] text-center font-bold mt-2 md:mt-3 2xl:mt-4 mb-2 md:mb-3 2xl:mb-4 text-[#FFEB31]">{t("howToBuySection.buy_etata_with_card")}</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">{t("howToBuySection.new_to_defi")}</p>
          <p>{t("howToBuySection.new_to_defi_text")}</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">{t("howToBuySection.step_1_purchase_bnb")}</p>
          <p>{t("howToBuySection.purchase_bnb_text")}</p>

          <ul className="mb-4 ps-4">
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i> <a href="https://transak.com">{t("howToBuySection.transak")}</a></li>
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i> <a href="https://moonpay.com">{t("howToBuySection.moonpay")}</a></li>
          </ul>

          <p>{t("howToBuySection.buy_bnb_text")}</p>

          <p><b>{t("howToBuySection.tip")}</b> {t("howToBuySection.tip_text")}</p>

          <p className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] font-bold mt-1 2xl:mt-2 mb-1 text-[#FBC5A0]">{t("howToBuySection.step_2_buy_etata")}</p>
          <p>{t("howToBuySection.buy_etata_text")}</p>
          <p>{t("howToBuySection.follow_steps")}</p>
          <p><b>{t("howToBuySection.note_2")}</b> {t("howToBuySection.note_2_text")}</p>

          <p className="text-[22px] md:text-[24px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[30px] text-center font-bold mt-2 md:mt-3 2xl:mt-4 mb-2 md:mb-3 2xl:mb-4 text-[#FFEB31]">{t("howToBuySection.add_etata_wallet")}</p>
          <p>{t("howToBuySection.add_etata_text")}</p>

          <ul className="mb-4 ps-4">
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i>
            <b>{t("howToBuySection.token_name")}</b> {t("howToBuySection.token_name_value")}</li>
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i>
            <b>{t("howToBuySection.token_symbol")}</b> ETATA</li>
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i>
            <b>{t("howToBuySection.token_network")}</b> {t("howToBuySection.token_network_value")}</li>
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i>
            <b>{t("howToBuySection.token_decimals")}</b> 18</li>
            <li className="d-flex align-items-center gap-2"><i className="fa-solid fa-circle" style={{fontSize: "5px"}}></i>
            <b>{t("howToBuySection.contract_address")}</b> 0xddc2CbF96836f55ca40b819078F3ecbf1b270315</li>
          </ul>
        </div>
        <button 
          className="cursor-pointer w-[150px] bg-[#00D962] hover:bg-[#00D962]/90 text-[#01273E] text-xs sm:text-base md:text-lg 2xl:text-[20px] font-bold py-1 2xl:py-2 rounded-[10px] transition-colors"
          onClick={onClose}>
          {t("howToBuySection.close")}
        </button>
      </div>
    </div>
  );
}

