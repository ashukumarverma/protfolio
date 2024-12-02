import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  return (
    <section className="c-space my-20">
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
              <p className="grid-subtext"> small Introoduction </p>
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
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">Tech Stack</p>
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
                pointAltitude={0.5}
              />
            </div>
            <div>
              <p className="grid-headtext"> Open to work, remotly</p>
              <p className="grid-subtext">
                I am currently persuing B.Tech from MIT Muzaffarpur.
              </p>
            </div>
            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
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

      </div>
    </section>
  );
};

export default About;