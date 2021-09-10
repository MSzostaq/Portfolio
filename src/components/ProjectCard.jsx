import styled from "styled-components";

const ProjectCard = styled.div`
  background-color: rgba(0, 0, 102, 0.6);
  border-radius: 8px;
  margin: 4px;
  width: 70vw;
  height: 28vh;

  @media (min-width: 800px) {
    width: 30vw;
    height: 60vh;
  }
`;

export default ProjectCard;
