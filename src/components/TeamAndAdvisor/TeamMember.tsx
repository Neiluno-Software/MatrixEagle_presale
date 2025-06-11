"use client";
interface TeamMemberProps {
  imageUrl: string;
  role: string;
  imageClassName?: string;
  containerClassName?: string;
}

export function TeamMember({
  imageUrl,
  role,
  imageClassName = "object-contain self-center max-w-full aspect-square rounded-[200px] w-[150px] ",
  containerClassName = "flex flex-col self-start mt-2.5 w-full",
}: TeamMemberProps) {
  return (
    <div className={containerClassName}>
        <div className="flex justify-center w-full">

      <img src={imageUrl} alt={role} className={imageClassName} />
        </div>
      <h1 className="mt-10 max-md:mt-10 text-center text-lg 2xl:text-2xl font-medium text-[#FFA100] max-md:text-2xl max-sm:text-xl">
        {role}
      </h1>
    </div>
  );
}
