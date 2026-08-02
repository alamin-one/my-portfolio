import Link from 'next/link';
import Image from 'next/image';

import Button from '../ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background *:" id="hero">
      <div
        className="absolute inset-0 z-10 opacity-40 dark:opacity-0 bg-repeat"
        style={{ backgroundImage: "url('/pattern.afd33a3d.svg')" }}
      />

      <div className=" min-h-150 app-container flex flex-col justify-end lg:flex-row gap-15 mt-15 relative z-50">
        {/* left */}
        <div className="lg:w-1/2 flex flex-col justify-center items-start order-2 md:order-1">
          {/* tooltip */}
          <div className="flex justify-start items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full relative">
              <div className="w-3 h-3 rounded-full border-3 border-[#17302B] animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <p className="text-title-secondary uppercase ">
              available for new projects
            </p>
          </div>
          <h1 className="w-full  md:w-[80%] lg-w-full mt-5 mb-3 bg-linear-to-r from-text to-title-secondary bg-clip-text text-transparent">
            Building fast, secure full-stack products
          </h1>
          <p className=" md:text-[18px]">
            Full-stack developer specializing in Next.js, MongoDB and
            payment-integrated web apps — from database schema to checkout flow.
          </p>

          <div className="flex gap-4 mt-7">
            <Link href={'/#caseStudy'}>
              <Button>case study</Button>
            </Link>

            <Link href={'/#contact'}>
              <Button variant="secondary">Get in touch</Button>
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="lg:flex lg:w-1/2 justify-center items-center  order-1 md:order-2">
          <Image
            src={'/Programming-bro.svg'}
            alt="benar"
            width={1500}
            height={1500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
