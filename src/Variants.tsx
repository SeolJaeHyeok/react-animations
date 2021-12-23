import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  width: 70px;
  height: 70px;
  place-self: center;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxOpts = {
  start: {
    opacity: 0,
    scale: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  leaving: {
    opacity: 0,
    scale: 0,
  },
};

const circleOpts = {
  start: {
    y: 30,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
  },
};

function Variants() {
  return (
    <Box variants={boxOpts} initial="start" animate="end" exit="leaving">
      {/* motion은 기본적으로 부모에 있는 initial, animate props의 값을 자식들에게 상속한다. */}
      <Circle variants={circleOpts} />
      <Circle variants={circleOpts} />
      <Circle variants={circleOpts} />
      <Circle variants={circleOpts} />
    </Box>
  );
}

export default Variants;
