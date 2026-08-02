import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Hero from '@/components/home/Hero';
import Project from '@/components/home/Project';
import Skills from '@/components/home/Skills';
import WhatIDo from '@/components/home/WhatIDo';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
