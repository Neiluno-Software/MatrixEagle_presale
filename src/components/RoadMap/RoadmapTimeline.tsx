"use client";

export default function RoadmapTimeline() {
  const roadmapData = [
    {
      title: "Q1 2025:",
      points: [
        "Build the platform design and tokenomics",
        "Recruit the core team",
      ],
      image: "/phase2.png",
    },
    {
      title: "Q2 2025:",
      points: [
        "Launch presale of Etata token",
        "Begin marketing and community efforts",
        "Onboard initial farm partners",
      ],
      image: "/phase1.png",
    },
    {
      title: "Q3 2025:",
      points: [
        "Launch staking program",
        "Enable mobile wallet integration",
        "Expand Telegram and support channels",
      ],
      image: "/phase3.png",
    },
    {
      title: "Q4 2025:",
      points: [
        "Launch STO for equity-based investments",
        "Strengthen platform features and UI",
        "Begin outreach for global strategic partnerships",
      ],
      image: "/phase4.png",
    },
  ];
  return (
    <div>
      <div className="w-full mt-[90px] lg:mt-[152px] 2xl:mt-[143px] mb-[32px] px-2 sm:px-8  ">
        <div className="text-[#FFA100] font-bold  text-2xl lg:text-[32px] 2xl:text-[64px] w-full flex justify-center">
          {/* <div className="bg-[#FFA100] px-5 rounded-2xl text-black"> */}
          ROAD MAP
          {/* </div> */}
        </div>
        <div className="flex justify-center text-base lg:text-lg 2xl:text-[28px] font-semibold text-center 2xl:mt-10">
          The roadmap outlines our project milestones and future goals
        </div>
      </div>
      <div className="relative w-full  py-10 text-white">
        {/* Vertical Line */}
        <div className="my-3 hidden sm:block absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-[#FFFFFF]" />

        <div className="space-y-20  mx-auto">
          {roadmapData.map((phase, index) => (
            <div
              key={index}
              className={` w-full  relative flex flex-col md:flex-row ${
                index % 2 === 0
                  ? "md:flex-row justify-center"
                  : "md:flex-row-reverse"
              } items-center gap-6`}
            >
              {/* Dot */}
              <div className="hidden sm:block absolute left-1/2  -translate-y-11 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FFA100] z-10 border-4 border-[#FFA100]" />

              {/* Content */}
              <div className="  md:w-1/2 space-y-2 text-center md:text-left  flex flex-col items-center">
                <div className="flex w-[70%] flex-col  items-center 2xl:text-[28px]">
                  <h3 className="text-xl font-semibold text-[#FFA100] text-center 2xl:mb-[22px] 2xl:text-[32px]">
                    {phase.title}
                  </h3>
                  <ul className="[&>li]:pl-5 [&>li]:-indent-5 list-disc text-left list-disc list-inside text-sm text-gray-300 font-semibold 2xl:text-[28px]">
                    {phase.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={phase.image}
                  alt={phase.title}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-full md:w-[50%] text-center text-sm lg:text-lg px-2 md:px-0">
          This roadmap provides a clear step-by-step plan for building and
          growing the project. It starts with setting up the foundation,
          platform design, team, and tokenomics and moves toward launching the
          presale, marketing, and farming partnerships. <br />
          Each quarter focuses on real progress like launching staking,
          expanding features, and growing community reach. By following this
          timeline, Matrix Eagle can grow steadily and build trust with
          investors. It shows we have a clear vision and are ready to deliver.
        </div>
      </div>
    </div>
  )
}
