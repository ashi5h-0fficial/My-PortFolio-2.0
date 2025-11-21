// "use client";

// import Lottie from "lottie-react";

// const AnimationLottie = ({ animationPath, width }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationPath,
//     style: {
//       width: '95%',
//     }
//   };

//   return (
//     <Lottie {...defaultOptions} />
//   );
// };

// export default AnimationLottie;

// /app/components/helper/animation-lottie.jsx
"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AnimationLottie({ animationData, width = "95%" }) {
  if (!animationData) return null;

  // lottie-react supports props directly
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width }}
    />
  );
}
