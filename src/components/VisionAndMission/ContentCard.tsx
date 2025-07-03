import React from 'react';

interface ContentCardProps {
  title: string;
  content: string;
  backgroundImage: string;
  className?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  content,
  backgroundImage,
  className = ""
}) => {
  return (
    <article className={`flex relative flex-col px-16 pt-16 pb-28 w-full min-h-[600px] max-md:px-5 max-md:pb-24 max-md:max-w-full ${className}`}>
      <img
        src={backgroundImage}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <h2 className="relative text-6xl font-bold leading-none text-sky-300 max-md:text-4xl">
        {title}
      </h2>
      <p className="relative mt-14 mb-0 text-3xl font-medium tracking-wider leading-10 text-white max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        {content}
      </p>
    </article>
  );
};
