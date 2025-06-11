const Vision = () => {
  return (
    <div className="px-2 md:px-4 2xl:px-7">
      <div className="flex justify-center mb-7 2xl:mb-8">
        <h2 className="text-xl 2xl:text-[28px] font-bold text-[#FFA100]">
          Vision and Mission
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Row 1 */}
        <div className="md:col-span-1 md:order-1">
          <img
            src="vision.png"
            alt="First"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-1 md:order-2 flex items-center">
          <div className="text-center">
            <h2 className="text-xl 2xl:text-[28px] font-bold text-[#FFA100]">
              Our Mission
            </h2>
            <p className="text-sm lg:text-lg">
              Our vision is to create a future where agricultural investment is
              easy, trusted, and open to everyone. We aim to use blockchain
              technology to remove barriers and build a new system where
              farmers, investors, and communities grow together. We want to lead
              the way in making agriculture more modern, transparent, and
              financially rewarding, not just in Colombia, but across Latin
              America and the world.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="md:order-3 flex items-center">
          <div className="md:col-span-1 md:order-2 flex items-center">
            <div className="text-center">
              <h2 className="text-xl 2xl:text-[28px] font-bold text-[#FFA100]">
                Our Vision
              </h2>
              <p className="text-sm lg:text-lg">
                Our mission is to connect farmers with global investors through
                a secure and transparent blockchain platform. We are committed
                to giving farmers better access to funding, tools, and support
                so they can grow their businesses.
              </p>
              <p className="text-lg">
                At the same time, we offer investors a way to earn income while
                making a real impact. By combining technology with real farming
                needs, we help both sides succeed and build stronger, more
                sustainable communities.
              </p>
            </div>
          </div>
        </div>
        <div className="md:order-4">
          <img
            src="/mission.png"
            alt="Second"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
