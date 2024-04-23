import HeroPortrait from '../../assets/images/image-hero-portrait.webp';
import HeroLandscape from '../../assets/images/image-hero-landscape.webp';

function Hero() {
  return (
    <main className="space-y-16">
      <section className="flex flex-col gap-8">
        <h1 className="text-4xl">
          A <span className="text-dark-blue font-bold">super solution</span> for
          your <span className="font-bold">business.</span>
        </h1>
        <p className="text-grey">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>
        <button
          type="button"
          className="bg-dark-blue text-cream-white self-start rounded-md px-8 py-4 font-bold"
        >
          Request Beta Access
        </button>
      </section>
      <section>
        <div className="h-60 w-full">
          <img
            src={HeroLandscape}
            alt="hero protrait"
            className="rounded-[15px] object-cover object-bottom"
          />
        </div>
      </section>
    </main>
  );
}

export default Hero;
