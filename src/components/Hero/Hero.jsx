/* eslint-disable no-octal-escape */
function Hero() {
  return (
    <main className="mt-14 grid grid-cols-1 gap-16 sm:grid-cols-5 sm:gap-0 sm:gap-y-24 lg:h-[600px] lg:grid-cols-6">
      {/* Presentation */}
      <section className="flex flex-col justify-center gap-10 rounded-lg sm:col-span-3 sm:h-[482px]">
        <h1 className="break-normal text-4xl sm:text-[3.5rem] sm:leading-[4rem] sm:tracking-wide">
          A
          <span className="absolute z-10 font-bold text-dark-blue before:content-['\00a0']">
            super solution
          </span>
          <br />
          for your
          <span className="absolute z-10 font-bold before:content-['\00a0']">
            business.
          </span>
        </h1>
        <p className="max-w-[340px] text-grey">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>
        <button
          type="button"
          className="self-start rounded-lg bg-dark-blue px-8 py-4 font-bold text-cream-white"
        >
          Request Beta Access
        </button>
      </section>

      {/* Phone image */}
      <div className="z-0 h-[240px] rounded-[15px] bg-hero-landscape bg-cover bg-no-repeat sm:col-span-2 sm:h-full sm:bg-hero-portrait" />

      {/* Features */}
      <section className="flex flex-col justify-around gap-8 border border-sky-400 sm:col-span-full sm:flex-row lg:col-span-1 lg:flex-col">
        <div className="text-center uppercase">
          <p className="text-5xl font-bold leading-[3.5rem] text-dark-blue">
            2K +
          </p>
          <p className="text-base font-normal tracking-[0.156rem] text-grey">
            companies
          </p>
        </div>
        <div className="text-center uppercase">
          <p className="text-5xl font-bold leading-[3.5rem] text-dark-blue">
            8
          </p>
          <p className="text-base font-normal tracking-[0.156rem] text-grey">
            Languages
          </p>
        </div>
        <div className="text-center uppercase">
          <p className="text-5xl font-bold leading-[3.5rem] text-dark-blue">
            1.2M
          </p>
          <p className="text-base font-normal tracking-[0.156rem] text-grey">
            Leads
          </p>
        </div>
      </section>
    </main>
  );
}

export default Hero;
