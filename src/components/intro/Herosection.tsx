import React, { FC } from 'react';
import Section1 from '../../assets/Section-Banner1.jpg';
import bg1 from '../../assets/Background1.jpg'
import bg2 from '../../assets/Background2.jpg'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
const HeroSection: FC = () => {
  return (
    <section
      className="relative flex h-screen w-full flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <div className="absolute inset-1 bg-black/20" />

      <h1 className="fasthand-regular relative px-5 text-center text-4xl leading-relaxed text-[white] md:text-5xl">
        You better go now,
        <br />
        Or night will fall
      </h1>

      {/* Socials + Scroll indicator */}
      <div className="absolute top-1/2 right-6 z-10 flex flex-col gap-4 text-xl text-white">
        <a href="#">
          <FaYoutube />
        </a>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <div className="mx-auto my-2 h-24 w-px bg-white" />
        <div className="animate-bounce text-2xl">↓</div>
      </div>
    </section>
  );
};

export default HeroSection;
