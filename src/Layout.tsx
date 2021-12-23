import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxOpts = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};

const btnStyle = {
  border: 0,
  borderRadius: "5px",
  outline: 0,
  backgroundColor: "#B8F3B8	",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "24px",
};

function Layout() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };
  return (
    <Wrapper>
      {/* AnimatePresence를 사용하려면 AnimatePresence Component로 감싸고 자식으로 조건문이 와야 한다. */}
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxOpts}
            initial="initial"
            animate="visible"
            exit="leaving"
          >
            I'm Here!
          </Box>
        ) : null}
      </AnimatePresence>
      <button style={btnStyle} onClick={toggleShowing}>
        {showing ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </button>
    </Wrapper>
  );
}

export default Layout;
