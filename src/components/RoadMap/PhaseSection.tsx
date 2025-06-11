
// import { PhaseIndicator } from "./PhaseIndicator";
import { PhaseImage } from "./PhaseImage";
interface PhaseSectionProps {
  title: string;
  description?: string;
  imageSrc: string;
  imagePosition: "left" | "right";
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  descriptionClassName?: string;
}

export function PhaseSection({
  title,
  description,
  imageSrc,
  imagePosition,
  className = "",
  contentClassName = "",
  imageClassName = "",
  descriptionClassName = ""
}: PhaseSectionProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className={className}>
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {isImageLeft && (
            <div className="w-[31%] max-md:ml-0 max-md:w-full">
              <PhaseImage
                src={imageSrc}
                className={`grow mt-2.5 w-full max-md:mt-10 ${imageClassName}`}
              />
            </div>
          )}

          <div className={`${isImageLeft ? "ml-5 w-[69%]" : "w-[73%]"} max-md:ml-0 max-md:w-full`}>
            <div className={`flex flex-col ${isImageLeft ? "" : "self-stretch my-auto"} w-full font-semibold max-md:mt-10 max-md:max-w-full ${contentClassName}`}>
              <div className="flex flex-wrap gap-10 text-3xl text-[#FFA100] max-md:max-w-full">
                {!isImageLeft && (
                  <h2 className="grow shrink w-[717px] max-md:max-w-full">
                    {title}
                  </h2>
                )}
                {/* <PhaseIndicator /> */}
                {isImageLeft && (
                  <h2 className="flex-auto max-md:max-w-full">
                    {title}
                  </h2>
                )}
              </div>
            </div>
          </div>

          {!isImageLeft && (
            <div className="ml-5 w-[27%] max-md:ml-0 max-md:w-full">
              <PhaseImage
                src={imageSrc}
                className={`object-contain grow w-full max-md:mt-10 ${imageClassName}`}
              />
            </div>
          )}
        </div>
      </div>

      {description && (
        <p className={`text-3xl font-semibold text-center text-white ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </section>
  );
}
