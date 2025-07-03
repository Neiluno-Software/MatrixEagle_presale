"use client";
interface RoadmapIntroProps {
  title: string;
  description: string;
}

function RoadmapIntro({ title, description }: RoadmapIntroProps) {
  return (
    <header className="flex relative flex-col items-center mb-0 max-md:mb-2.5 max-md:max-w-full">
      <h1 className="text-6xl font-bold text-amber-500 max-md:text-4xl">
        {title}
      </h1>
      <p className="mt-8 text-3xl font-semibold text-center text-white max-md:max-w-full">
        {description}
      </p>
    </header>
  );
}

export default RoadmapIntro;
