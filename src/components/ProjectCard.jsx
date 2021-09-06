import styled from "styled-components";

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
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
