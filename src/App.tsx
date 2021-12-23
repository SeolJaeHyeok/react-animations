import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import Basic from "./Basic";
import Gestures from "./Gestures";
import Scroll from "./Scroll";
import Layout from "./Layout";
import Svg from "./Svg";
import Variants from "./Variants";
import Slider from "./Slider";
import SharedLayout from "./SharedLayout";
import AnimatedSharedLayout from "./AnimatedSharedLayout";

const Tmp = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BackBtn = styled.button`
  position: absolute;
  bottom: 40px;
  left: 45%;
`;

const NextBtn = styled.button`
  position: absolute;
  bottom: 40px;
  right: 45%;
`;

const components = [
  <Basic key={0} />,
  <Variants key={1} />,
  <Gestures key={2} />,
  <Scroll key={3} />,
  <Svg key={4} />,
  <Layout key={5} />,
  <Slider key={6} />,
  <SharedLayout key={7} />,
  <AnimatedSharedLayout key={8} />,
];

const btnOpts = {
  border: 0,
  borderRadius: "5px",
  outline: 0,
  backgroundColor: "#B8F3B8	",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
};

const boxVariants = {
  entry: (isBack: boolean) => {
    return {
      x: isBack ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 1 },
  }),
};

function App() {
  const [back, setBack] = useState(false);
  const [index, setIndex] = useState(0);

  const onNext = () => {
    setBack(false);
    setIndex((prev) => (prev === 8 ? 0 : prev + 1));
  };
  const onBack = () => {
    setBack(true);
    setIndex((prev) => (prev === 0 ? 8 : prev - 1));
  };
  return (
    <AnimatePresence custom={back}>
      <>
        <Tmp
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
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
