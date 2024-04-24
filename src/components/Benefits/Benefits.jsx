import ImageJeremySmall from '../../assets/images/image-jeremy-small.webp';
import ImageJeremyLarge from '../../assets/images/image-jeremy-large.webp';
import PatternCurvedLine from '../../assets/images/pattern-curved-line-2.svg';

function Benefits() {
  return (
    <>
      <div className="sm:m-auto sm:w-11/12 sm:max-w-[1111px]">
        <div className="mt-16">
          <section className="mt-60 flex min-h-[34rem] flex-col items-center gap-10 rounded-[15px] border-2 bg-dark-blue px-8 py-16 text-white lg:flex-row">
            <img
              src={ImageJeremySmall}
              alt="Man scrolling with a pen on his phone"
              className="-mt-60"
            />

            {/* <div className="bg-cream absolute left-0 right-0 top-20 h-56 w-full" /> */}
            <div className="h-[40px] w-[50px]">
              <img src={PatternCurvedLine} alt="curved line" />
            </div>
            <div className="flex flex-col items-center gap-10">
              <h2 className="text-[40px]">
                It just <span className="font-bold">works.</span>
              </h2>
              <p className="text-center text-lg">
                “I really like how it is an all-in-one solution that handle many
                of the tasks that you would normally need separate tools to do
                the same job. This thing is a miracle worker.”
              </p>
              <div>
                <h3 className="text-lg font-bold text-cream-white">
                  JEREMY ROBINSON
                </h3>
                <p className="text-center tracking-[2.5px] text-cream">
                  CMO, FYLO
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* <div className="h-screen bg-red-500"></div> */}
    </>
  );
}

export default Benefits;
