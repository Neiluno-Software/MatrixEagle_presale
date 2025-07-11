"use client";

import { useTranslation } from "react-i18next";
import ImageTicker from "../ImageTicker";

export default function GallerySection() {
  const { t } = useTranslation();

  const galleryImages = Array.from({ length: 24 }, (_, index) => ({
    src: `/galleryImages/gallery${index + 1}.png`,
    alt: t(`gallery.alt.${index}`),
  }));

  const topRowImages = galleryImages.slice(0, 12);
  const bottomRowImages = galleryImages.slice(12);

  return (
    <section className="bg-transparent py-10 sm:py-16 px-0 2xl:pt-[60px] 3xl:pt-[149px] pl-0 pr-0 ml-0 mr-0">
      <div className="max-w-7xl xl:max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-4xl md:text-5xl xl:text-[40px] 2xl:text-[56px] 3xl:text-[87px] font-bold mb-4 sm:mb-6 2xl:mb-8"
            style={{ color: "#FFEB31" }}
          >
            {t("gallery.title")}
          </h2>
          <p className="text-sm sm:text-lg md:text-xl xl:text-[16px] 2xl:text-[24px] 3xl:text-[40px] font-medium max-w-[90vw] sm:max-w-4xl 2xl:max-w-[80%] mx-auto leading-relaxed">
            {t("gallery.description")}
          </p>
        </div>

        {/* Gallery Tickers */}
        <div className="space-y-6 sm:space-y-8 2xl:space-y-[94px] sm:mt-10 2xl:mt-[81px]">
          <ImageTicker images={topRowImages} direction="left" />
          <ImageTicker images={bottomRowImages} direction="right" />
        </div>
      </div>
    </section>
  );
}
