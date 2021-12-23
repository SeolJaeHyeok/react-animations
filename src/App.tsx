import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import Basic from "./Basic";
import Gestures from "./Gestures";
import Scroll from "./Scroll";
import SharedLayout from "./SharedLayout";
import Svg from "./Svg";
import Variants from "./Variants";
import Slider from "./Slider";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Tmp = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BackBtn = styled.button`
  position: absolute;
  bottom: 30px;
  left: 45%;
`;

const NextBtn = styled.button`
  position: absolute;
  bottom: 30px;
  right: 45%;
`;

const btnOpts = {
  border: 0,
  outline: 0,
  background: "inherit",
  fontSize: "36px",
};

const components = [
  <Basic key={0} />,
  <Variants key={1} />,
  <Gestures key={2} />,
  <Scroll key={3} />,
  <Svg key={4} />,
  <SharedLayout key={5} />,
  <Slider key={6} />,
];

const boxVariants = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  leaving: {
    x: -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 1 },
  },
};

function App() {
  const [index, setIndex] = useState(0);
  const onNext = () => setIndex((prev) => (prev === 6 ? 6 : prev + 1));
  const onBack = () => setIndex((prev) => (prev === 0 ? 0 : prev - 1));
  return (
    <AnimatePresence>
      <>
        <Tmp
          variants={boxVariants}
          initial="invisible"
          animate="visible"
          exit="leaving"
          key={index}
        >
          {components[index]}
        </Tmp>
        <BackBtn style={btnOpts} onClick={onBack}>
          <AiOutlineCaretLeft />
        </BackBtn>
        <NextBtn style={btnOpts} onClick={onNext}>
          <AiOutlineCaretRight />
        </NextBtn>
      </>
    </AnimatePresence>
  );
}

export default App;
