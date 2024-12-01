import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";
// import { Leva, useControls } from "leva"; //for leva controls
import { useMediaQuery } from "react-responsive";

import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Rings from "../components/Rings.jsx";
import Cube from "../components/Cube.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
  //for leva controls
  // const x = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 0.07,
  //     min: 0.01,
  //     max: 0.1,
  //   },
  // });

  const isSmall = useMediaQuery({ query: "(max-width: 400px)" });
  const isMobile = useMediaQuery({
    query: "(min-width: 400px) and (max-width: 640px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 1024px)",
  });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Ashutosh Kumar <span className="waving-hand">👋</span>{" "}
        </p>
        <p className="hero_tag text-gray_gradient">Web Developer !</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas id="canvas" className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 28]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                //for leva controls

                // position={[x.positionX, x.positionY, x.positionZ]}
                // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                // scale={[x.scale, x.scale, x.scale]}

                // for static values

                // position={isMobile ? [1.1, -2, 2] : [1.6, -8.5, 1.9]}
                // rotation={[0.2, -3.4, 0]}
                // scale={isMobile ? 0.07 : 0.1}

                // for dynamic values
                position={sizes.deskPosition}
                rotation={[0.2, -3.4, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button name="Contact Me" isBeam containerClass="sm:w-fit w-full sm:min-w-[96px]" />
        </a>

      </div>
    </section>
  );
};

export default Hero;
