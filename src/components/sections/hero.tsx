"use client";
import Image from "next/image";
import { MapPin } from "lucide-react";
import React, { useState, useEffect } from "react";
import SardarImg from "/public/images/Herolatest.png";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Sardar Ibrar Ahmad ";
  const delay = 100; // Delay in milliseconds between characters
  const [imageLoaded, setImageLoaded] = useState(false); // Add this state
  const prefix = "Hi, I'm ";
  const name = " Sardar Ibrar Ahmad ";
  useEffect(() => {
    setImageLoaded(true);
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div
          className={`flex transform items-center justify-center transition-all duration-1000 md:order-last md:flex-grow md:justify-end ${
            imageLoaded
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image src={SardarImg} alt="sardar Image" />
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent md:text-5xl lg:text-5xl xl:text-5xl">
                {text.slice(0, prefix.length)}
              </span>

              <span className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-5xl xl:text-5xl">
                {text.slice(prefix.length)}
              </span>
            </Typography>
            <Typography variant="h5">
              I am a dynamic and results-driven web developer with hands-on
              experience in both front-end and back-end technologies. I
              specialize in creating scalable, user-centric web applications and
              have successfully delivered complex solutions using the MERN
              stack. My expertise includes designing efficient APIs, building
              responsive UIs, and managing NoSQL databases. I aspire to continue
              innovating in web development, leveraging cutting-edge
              technologies to deliver impactful digital experiences.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Faisalabad, Pakistan</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
