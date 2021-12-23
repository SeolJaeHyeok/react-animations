import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxOpts = {
  click: { opacity: 0.5 },
  hover: { scale: 1.1 },
};

function Gestures() {
  // ref는 특정 HTML Element에 접근할 수 있게끔 만드는 props
  // 따라서 wrapperRef를 등록하게 되면 dragConstraints props는 Wrapper에 종속된다.
  const wrapperRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper ref={wrapperRef}>
      <Box
        drag
        dragSnapToOrigin // 드래그가 끝나면 원점으로 돌아가게끔
        dragElastic={0.5} // 기본값은 0.5
        dragConstraints={wrapperRef} // 드래그에 제약을 걸 수 있다. ex) 어떤 공간 안에서만 드래그가 가능하게끔
        variants={boxOpts}
        whileHover="hover"
        whileTap="click"
      />
    </Wrapper>
  );
}

export default Gestures;
