# My Animations

## Overview

[framer-motion](https://www.framer.com/motion/) 을 이용하여 Click, Drag, Scroll 등으로 이용할 수 있는 다양한 애니메이션 구현

You can see this App [Here](https://quizzical-wescoff-7fb38c.netlify.app/)

## Features

- [x] motion
- [x] Variants
- [x] useMotionValue
- [x] AnimatePresence
- [x] Slider, AnimatedSharedLayout, Gestures, Drag, Scroll, Path

## Dependency

- [x] TypeScript
- [x] framer-motion
- [x] styled-components

## 회고

한 마디로 표현하면 충격이었다.

다른 애니메이션들도 정말 쉽게 구현할 수 있기에 놀라웠지만 특히 Slider와 AnimatedSharedLayout을 구현할 때 정말 놀랐다. 예전에 진행했던 프로젝트 [Hyeokflix](https://blissful-colden-d3fd0d.netlify.app/) 에서 존재하는 라이브러리를 사용하지 않고 Slider를 구현해보고자 마음을 먹었지만 구현 난이도가 높아서 결국 실패하고 [pure-react-carousel](https://www.npmjs.com/package/pure-react-carousel) 패키지를 이용해 구현했던 적이 있었다. 이 패키지를 이용할 때도 인터넷에 존재하는 많은 레퍼런스들을 참고하며 맞왜틀을 외치면서 구현을 했었는데  framer-motion을 이용하여 슬라이더를 구현해보니 이전에 구현했던 슬라이더 훨씬 더 아름다운 애니메이션을 가진 슬라이더가 됐다. `motion` 이 제공하는 `initial`, `animate`, `exit` 또는 `AnimatePresence` 컴포넌트 등을 이용하여 간단히 구현할 수 있는 게 framer-motion의 장점인 것 같다. 공식 문서 또한 잘 정돈되어 있어 쉽게 보고 배울 수 있었고 응용할 수 있었고 `styled-component` 를 지원하는 것도 장점인 것 같다.

AnimatedSharedLayout의 경우도 놀라웠는데 `layoutId` 를 이용하여 서로 다른 컴포넌트 사이의 애니메이션을 아주 쉽게 구현할 수 있었다. 아마 일반적인 React로 구현하려 했으면 머리가 빠졌을 것 같다는 생각이 든다. 

이러한 좋은 패키지들이 있다면 유용하게 사용할 수 있는 것도 개발자의 중요한 역량이라고 생각한다. 하지만 새로운 것을 받아들일 때 단순 사용법만을 받아들이는 것이 아닌 어떠한 식으로 구현할 수 있고 응용할 수 있으며 다른 사람들은 어떻게 사용했고 나 또한 직접 적용해보는 과정이 수반되어야 진정 내 것으로 받아들일 수 있고 발전할 수 있다고 생각한다.