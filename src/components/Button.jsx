import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  margin: 8px 0;
  padding: 8px;
`;

export default Button;
