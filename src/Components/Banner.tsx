import DevStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="px-4 py-12 md:py-24">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-7 md:flex-row md:justify-between">
        <div className="text-center md:max-w-xl md:text-left">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Build Your Ideal{" "}
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1><br />
          <p className="text-sm leading-6 mt-4 text-slate-600 md:text-base ">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p><br />
          <div className="mt-7 flex gap-5">
            <button className="flex-1 text-xs font-semibold text-white rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-4 md:flex-none">
              Explore Technologies
            </button>
            <button className="flex-1 rounded-md border border-slate-300 px-4 py-3 text-xs md:flex-none">
              Learn More{" "}
            </button>
          </div>
        </div>
        {/* Left Side Image  */}
        <div className="w-full max-w-xl h-[400px]">
            <img src={DevStack} alt="" className=" w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
