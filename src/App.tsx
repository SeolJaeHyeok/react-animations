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

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
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
  <Basic key={1} />,
  <Variants key={2} />,
  <Gestures key={3} />,
  <Scroll key={4} />,
  <Svg key={5} />,
  <SharedLayout key={6} />,
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
  },
};

function App() {
  const [visible, setVisible] = useState(0);
  const onNext = () => setVisible((prev) => (prev === 5 ? 5 : prev + 1));
  const onBack = () => setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  return (
    <AnimatePresence>
      {[0, 1, 2, 3, 4, 5].map((i) =>
        i === visible ? (
          <>
            <Tmp
              variants={boxVariants}
              initial="invisible"
              animate="visible"
              exit="leaving"
            >
              {components[i]}
            </Tmp>
            <BackBtn style={btnOpts} onClick={onBack}>
              <AiOutlineCaretLeft />
            </BackBtn>
            <NextBtn style={btnOpts} onClick={onNext}>
              <AiOutlineCaretRight />
            </NextBtn>
          </>
        ) : null
      )}
    </AnimatePresence>
  );
}

export default App;
