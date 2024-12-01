import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import PropTypes from 'prop-types';

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 28], 0.25, delta);

    if (!isMobile) {
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return (
    <group ref={group}>
      {/* pass children */}
      {children}
    </group>
  );
};

HeroCamera.propTypes = {
  children: PropTypes.node,
  isMobile: PropTypes.bool.isRequired,
};

export default HeroCamera;
