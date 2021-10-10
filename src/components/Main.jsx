import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Contact from "views/Contact";
import Projects from "views/Projects";
import Skills from "views/Skills";
import Welcome from "views/Welcome";
import BackgroundParticles from "components/BackgroundParticles";
import DownloadCvButton from "components/DownloadCvButton";
import Navbar from "components/Navbar";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const Views = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  height: 100vh;
  width: 100%;
`;

const Main = () => {
  const [currentViewId, setCurrentViewId] = useState("welcome");

  const views = [
    { id: "welcome", name: "nav-welcome" },
    { id: "skills", name: "nav-skills" },
    { id: "projects", name: "nav-projects" },
    { id: "contact", name: "nav-contact" },
  ];
  const viewsRef = useRef();

  useEffect(() => {
    const view = document.getElementById(currentViewId);
    const top = view.offsetTop;
    viewsRef.current.scrollTo({ top, behavior: "smooth" });
  }, [currentViewId]);

  function onScroll(event) {
    if (event.target.scrollTop > 40) {
    }
  }

  function onNavbarItemClick(event, item) {
    event.preventDefault();
    window.history.pushState({}, "", `#${item.id}`);
    setCurrentViewId(item.id);
  }

  return (
    <Wrapper>
      <BackgroundParticles />
      <Views onScroll={onScroll} ref={viewsRef}>
        <Navbar
          items={views}
          onItemClick={onNavbarItemClick}
          activeId={currentViewId}
        />
        <Welcome />
        <Skills />
        <Projects />
        <Contact />
      </Views>
      <DownloadCvButton />
    </Wrapper>
  );
};

export default Main;
