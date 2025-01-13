"use client";

import { SubSection } from "@/components/layout/documentation/doc-section";
import { CodeBlock } from "@/components/layout/documentation/doc-template";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LayoutAnimation() {
  const [isLowOn, setIsLowOn] = useState(false);
  const [isHighOn, setIsHighOn] = useState(false);

  const sampleCode = `const [isOn, setIsOn] = useState(false);

return (
  <div
    className={\`w-40 h-24 bg-gray-500 bg-opacity-40 flex \${
      isOn ? "justify-end" : "justify-start"
    } rounded-full p-2 cursor-pointer\`}
    onClick={() => setIsOn(!isOn)}
  >
    <motion.div
      className="w-20 h-20 bg-white rounded-full"
      layout
      // type: "spring"은 스프링 애니메이션 사용
      // stiffness: 100은 스프링의 강성 설정, 값이 클수록 더 빠른 반응
      // damping: 스프링의 감쇠 설정, 값이 클수록 튕김 정도가 큼
      transition={{ type: "spring", stiffness: 900, damping: 30 }}
    />
    <motion.div
      className="w-20 h-20 bg-white rounded-full"
      layout
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    />
  </div>
)`;

  return (
    <SubSection title="기본 사용">
      <CodeBlock code={sampleCode} variant="live-example">
        <div
          className={`w-40 h-24 bg-gray-500 bg-opacity-40 flex ${isLowOn ? "justify-end" : "justify-start"} rounded-full p-2 cursor-pointer`}
          onClick={() => setIsLowOn(!isLowOn)}
        >
          <motion.div
            className="w-20 h-20 bg-white rounded-full"
            layout
            transition={{ type: "spring", stiffness: 900, damping: 10 }}
          />
        </div>
        <div
          className={`w-40 h-24 bg-gray-500 bg-opacity-40 flex ${isHighOn ? "justify-end" : "justify-start"} rounded-full p-2 cursor-pointer`}
          onClick={() => setIsHighOn(!isHighOn)}
        >
          <motion.div
            className="w-20 h-20 bg-white rounded-full"
            layout
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
        </div>
      </CodeBlock>
    </SubSection>
  );
}
