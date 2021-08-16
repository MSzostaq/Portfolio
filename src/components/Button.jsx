import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  background-color: #d3d3d3;
  border-radius: 24px;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 24px;
  margin: 8px;
  padding: 8px;
  width: 240px;
  height: 48px;
`;

export default Button;
