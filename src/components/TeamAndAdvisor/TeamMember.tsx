"use client";
interface TeamMemberProps {
  role: string;
  imageUrl?: string;
  imageClassName?: string;
  containerClassName?: string;
  name: string;
  description: string;
}

export function TeamMember({
  imageUrl,
  role,
  name,
  description,
  imageClassName = "object-contain self-center max-w-full aspect-square rounded-[200px] w-[110px] border-2 border-white ",
  containerClassName = "flex flex-col self-start mt-2.5 w-full bg-[#171717] max-h-[300px] min-h-[250px] py-3 md:py-4 2xl:py-8 rounded-[10px] ",
}: TeamMemberProps) {
  return (
    <div className={containerClassName}>
      <div className="flex justify-center w-full">
        {imageUrl ? (
          <img src={imageUrl} alt={role} className={imageClassName} />
        ) : (
          <div className="w-[110px] h-[110px] bg-black rounded-full"></div>
        )}
      </div>
      <h1 className="mt-3  text-center text-lg 2xl:text-2xl text-[#0CE847] font-semibold max-md:text-2xl max-sm:text-xl">
        {name}
      </h1>
      <h1 className="text-center text-base 2xl:text-[21px] font-medium text-[#FFA100] ">
        {role}
      </h1>
      <h1 className="text-center text-sm 2xl:text-[18px] font-medium text-[#fff] max-md:text-2xl max-sm:text-xl">
        {description}
      </h1>
    </div>
  );
}
