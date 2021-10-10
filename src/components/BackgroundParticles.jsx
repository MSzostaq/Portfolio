import styled from "styled-components";
import Particles from "react-particles-js";

const StyledParticles = styled(Particles)`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  height: 100vh;
`;

const BackgroundParticles = () => {
  return (
    <>
      <StyledParticles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 400,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                color: "#f9ab00",
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable_auto: true,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1,
              condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

export default BackgroundParticles;
