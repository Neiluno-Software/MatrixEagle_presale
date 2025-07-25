import { useTranslation } from "react-i18next";
import {useState} from "react";
import HowToBuy from '../HowToBuy/HowToBuy';

const NavLinks = () => {
  const { t } = useTranslation();
  const navItems = [
    { key: "howToBuy", link: "#contactUs", target: "_self" },
    { key: "whitepaper", link: "/Whitepaper Matrix Eagle (Etata).pdf", target: "_blank" },
    { key: "tokenomicsNav", link: "#tokenomics", target: "_self" },
    { key: "roadmapNav", link: "#roadmap", target: "_self" },
    { key: "FAQ", link: "#faq", target: "_self" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-x-2 lg:gap-x-4 xl:gap-x-6 2xl:gap-x-8 3xl:gap-x-10">
      {navItems.map((item) => (
        <a
          key={item.key}
          href = {item.key != 'howToBuy' ? item.link : undefined}
          onClick = {item.key == 'howToBuy' ? handleOpen : undefined}
          target={item.target}
          className="text-[10px] md:text-sm lg:text-base xl:text-base 2xl:text-xl 3xl:text-2xl font-bold tracking-normal leading-6 text-white cursor-pointer transition-colors duration-300 hover:text-[#ffb833a2] py-2 px-2 lg:px-3 2xl:px-4"
        >
          {t(item.key)}
        </a>
      ))}
      <HowToBuy isOpen={isOpen} onClose={handleClose}></HowToBuy>
    </div>
  );
};

export default NavLinks;