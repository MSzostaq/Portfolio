import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Contact from "views/Contact";
import Hello from "views/Hello";
import Projects from "views/Projects";
import Skills from "views/Skills";
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
  const [currentViewId, setCurrentViewId] = useState("hello");

  const views = [
    { id: "hello", name: "nav_hello" },
    { id: "skills", name: "nav_skills" },
    { id: "projects", name: "nav_projects" },
    { id: "contact", name: "nav_contact" },
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
        <Hello />
        <Skills />
        <Projects />
        <Contact />
      </Views>
      <DownloadCvButton />
    </Wrapper>
  );
};

export default Main;
