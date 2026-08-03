import Image from 'next/image';

import Badeg from '../ui/badeg';
import Lable from '../ui/lable';

const About = () => {
  return (
    <section
      className=" bg-linear-to-r from-background-secondary to-background"
      id="about"
    >
      <div className="app-container flex flex-col justify-between items-center lg:flex-row gap-10 ">
        {/* left */}
        <div className=" w-full lg:max-w-87.5">
          <Image
            src={'/about_.webp'}
            width={450}
            height={450}
            alt="about-image"
            className="border border-border/0 rounded-xl w-full"
          />
        </div>
        <div className="w-full  flex-1">
          <Lable>-- About Me</Lable>

          <h2>A Developer Who Loves to Share</h2>
          <p className="mt-2 mb-3">
            I&apos;m Md. Alamin — a Full-Stack developer with hands-on
            experience building websites and web applications. I genuinely love
            what I do, and I&apos;m always looking for ways to grow and improve
            as a developer.
          </p>
          <p className="mb-3">
            Over the past year, I&apos;ve worked on a range of local projects,
            taking them from idea to a working, real-world product — sharpening
            my skills across the full stack along the way. Every project has
            been a chance to learn something new and push myself a little
            further. Great developers never stop learning. That&apos;s what
            drives me every day.
          </p>
          <p>
            Right now, I&apos;m expanding into Node.js and Express to become an
            even stronger full-stack developer — one project, one skill at a
            time.
          </p>
          <div className="mt-5 space-x-2 space-y-2">
            <Badeg variant="techStack">4+ Projects Shipped</Badeg>
            <Badeg variant="techStack">100% Real Payments</Badeg>
            <Badeg variant="techStack">6+ Core Skills</Badeg>
            <Badeg variant="techStack">Learning: Node/Express</Badeg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
