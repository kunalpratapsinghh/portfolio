import Title from "./Common/Title";
import data from "@/data/data.json";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <Title num={3} title="Education" />

      <div className="flex w-screen px-0 sm:px-4 space-x-4 sm:space-x-10 overflow-x-auto hideScrollBar snap-x snap-mandatory sm:ml-0 sm:w-full">
        {data.testimonials.map((testimonial, i) => (
          <div
            className="rotate-3 hover:rotate-0 cursor-pointer duration-100 backdrop-filter backdrop-blur-3xl shadow-2xl border-2 border-darkerBlue bg-white/5 px-5 sm:px-6 my-8 sm:my-10 pb-3 w-[92vw] sm:w-[440px] md:w-[480px] snap-start rounded-lg"
            key={i}
          >
            <h2 className="pt-5 text-sm sm:text-base md:text-lg">
              {testimonial.value}
            </h2>
            <a
              className="flex items-center space-x-4"
              href={testimonial.link}
              rel="noreferrer"
              target="_blank"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 overflow-hidden rounded-lg bg-white/10">
                <Image
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="contain"
                  src={testimonial.pfp}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="mt-4 text-white text-sm sm:text-base">
                  {testimonial.name}
                </h2>
                <h2 className="text-white text-xs sm:text-sm">
                  {testimonial?.relation}
                </h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
