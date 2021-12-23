import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";
import Basic from "./Basic";
import Gestures from "./Gestures";
import Scroll from "./Scroll";
import Svg from "./Svg";
import Variants from "./Variants";

const Wrapper = styled.div`
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

const boxVariants = {};

function App() {
  const x = useMotionValue(0);
  // MotionValue는 업데이트될 때 Rendering Cycle을 발생시키지 않는다.
  // 즉, State가 아니라는 의미
  console.log(x);
  return (
    <Wrapper>
      {/* <Basic /> */}
      {/* <Variants /> */}
      {/* <Gestures /> */}
      {/* <Scroll /> */}
      <Svg />
    </Wrapper>
  );
}

export default App;
