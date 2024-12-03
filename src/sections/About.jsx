import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("ashu10.6p@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 md:grid-col-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext ">Hi, I am Ashutosh</p>
              <p className="grid-subtext"> Undergraduate 4th Year Student. Persuing B.Tech degree in Information Technology from MIT Muzaffarpur. I like to code and develope things.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack & Tools</p>
              <p className="grid-subtext">Development Tech Stack: HTML, CSS, JavaScript, TypeScript ReactJS, NextJS, TailwindCSS</p>
              <p className="grid-subtext">Tools: Git/GitHub, MongoDB,  </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 26.1413,
                    lng: 85.3654,
                    text: "Muzaffarpur, Bihar, India",
                    color: "white",
                    size: 15,
                  },
                ]}
                pointsData={[
                  {
                    lat: 26.1413,
                    lng: 85.3654,
                    color: "red",
                    size: 1,
                  },
                ]}
                pointAltitude={0.2}
              />
            </div>
            <div>
              <p className="grid-headtext"> Open to work, remotly</p>
              <p className="grid-subtext">
                I am currently persuing B.Tech from MIT Muzaffarpur.
              </p>
            </div>
            <Button name="Contact Me" isBeam containerClass="w-full mt-2" />
            <p className="grid-subtext text-center">Connect with me on</p>
            <div className="flex gap-2 w-full justify-center mb-5">
              <a href="https://in.linkedin.com/in/ashutosh-kumar-157663223" className="btn w-full">
                <BsLinkedin />
              </a>
              <a href="https://github.com/ashukumarverma" className="btn w-full">
                <FaGithubSquare />
              </a>
              <a href="https://www.instagram.com/ashukumarverma" className="btn w-full">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. I
                enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  ashu10.6p@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
