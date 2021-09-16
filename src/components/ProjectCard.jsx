import styled from "styled-components";

const ProjectCard = styled.div`
  background-color: rgba(0, 0, 102, 0.3);
  border-radius: 8px;
  margin: 4px;
  padding: 4px;
  width: 70vw;
  height: 27vh;

  @media (min-width: 800px) {
    width: 26vw;
    height: 36vh;
    margin: 8px;
  }
`;

export default ProjectCard;
