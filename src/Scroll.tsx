import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 300vh;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  margin: 30px 30px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Scroll() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const background = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(238, 234, 0), rgb(135, 238, 0))",
      "linear-gradient(135deg, rgb(0, 238, 206), rgb(0, 36, 238))",
    ]
  );
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  return (
    <Wrapper style={{ background }}>
      <Box drag="x" style={{ x, rotateZ, scale }} dragSnapToOrigin />
    </Wrapper>
  );
}

export default Scroll;
