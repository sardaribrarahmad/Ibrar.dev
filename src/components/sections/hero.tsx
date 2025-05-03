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
  const typingSpeed = 100;
  const pauseDuration = 1500; // Pause before erasing or retyping
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);

    const prefix = "Hi, I'm ";
    const name = "Sardar Ibrar Ahmad";
    const fullText = prefix + name;
    let index = prefix.length;
    let typing = true;

    const loopTyping = () => {
      if (typing) {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
        } else {
          typing = false;
          setTimeout(loopTyping, pauseDuration);
          return;
        }
      } else {
        if (index > prefix.length) {
          index--;
          setText(fullText.slice(0, index));
        } else {
          typing = true;
          setTimeout(loopTyping, typingSpeed);
          return;
        }
      }
      setTimeout(loopTyping, typingSpeed);
    };

    const timeout = setTimeout(loopTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, []);

  const prefix = "Hi, I'm ";
  const name = "Sardar Ibrar Ahmad";

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

              <span className="bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-2xl font-bold text-transparent md:text-5xl lg:text-5xl xl:text-5xl">
                {text.slice(prefix.length)}
              </span>
            </Typography>

            <div className="flex flex-col gap-2">
              {/* Content for small screens */}
              <Typography variant="h5" className="block md:hidden">
                I am a dynamic and results-driven web developer with hands-on
                experience in both front-end and back-end technologies. I
                specialize in creating scalable, user-centric web applications
                and have successfully delivered complex solutions using the MERN
                stack. My expertise includes designing efficient APIs, building
                responsive UIs, and managing NoSQL databases. I aspire to
                continue innovating in web development, leveraging cutting-edge
                technologies to deliver impactful digital experiences.
              </Typography>

              {/* Content for medium and larger screens */}
              <div className="hidden flex-wrap gap-2 md:flex">
                {[
                  "MERN Stack",
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "REST APIs",
                  "Responsive UI",
                  "Frontend & Backend",
                  "NoSQL Databases",
                  "Scalable Apps",
                  "Web Development",
                  "API Design",
                  "Agile Development",
                ].map((keyword, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
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
