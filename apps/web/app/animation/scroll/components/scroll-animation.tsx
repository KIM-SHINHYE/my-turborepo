"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { DocSection, SubSection } from "@/components/layout/documentation/doc-section";
import { CodeBlock } from "@/components/layout/documentation/doc-template";

const scrollCode = `const verticalScrollContainerRef = useRef(null);
// useScroll hook은 스크롤 진행률을 반환(scrollX, scrollY, scrollXProgress, scrollYProgress)
// scrollYProgress는 스크롤 진행률
const { scrollYProgress } = useScroll({
  container: verticalScrollContainerRef 
});

const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
});

return (
  <div 
    ref={verticalScrollContainerRef} 
    className="relative overflow-auto" 
    style={{ height: "400px" }}
  >
    <motion.div 
      className="sticky top-0 h-2 bg-blue-500 origin-left z-10" 
      style={{ scaleX }} 
    />
    <div className="p-4 space-y-4">
      {Array.from({ length: 20 }).map((_, i) => (
        <p key={i} className="text-gray-700">
          Scroll content {i + 1}
        </p>
      ))}
    </div>
  </div>
)`;

const triggerCode = `<motion.div
  className="w-32 h-32 bg-blue-500 rounded-lg"
  initial={{ 
    opacity: 0, 
    y: 50 
  }}
  whileInView={{ 
    opacity: 1, 
    y: 0 
  }}
  viewport={{ once: true }} // 한 번만 실행
/>`;

const horizontalScrollCode = `// 가로 스크롤 컨테이너 참조
const containerRef = useRef(null);

// 가로 스크롤 진행률 추적
const { scrollXProgress } = useScroll({
  container: containerRef 
});

// 부드러운 스프링 효과 적용
const scaleY = useSpring(scrollXProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
});

return (
  <div ref={containerRef} 
    className="relative overflow-x-auto"
    style={{ width: "100%" }}
  >
    <motion.div 
      className="absolute left-0 h-full w-2 bg-blue-500 origin-top"
      style={{ scaleY }} 
    />
    <div className="flex gap-4 p-4 pl-8">
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i} 
          className="flex-none w-64 h-32 bg-gray-100 rounded-lg" 
        />
      ))}
    </div>
  </div>
)`;

export default function ScrollAnimations() {
  // 세로 스크롤용 ref와 애니메이션
  const verticalScrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: verticalScrollContainerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 가로 스크롤용 ref와 애니메이션
  const horizontalScrollContainerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: horizontalScrollContainerRef });
  const horizontalScaleY = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <DocSection
      title="Scroll Animations"
      description={[
        "Scroll Trigger: element가 뷰포트에 들어가거나 나갈 때 실행되는 일반 애니메이션",
        "Scroll Linked: 스크롤 진행률에 따라 실시간으로 변화하는 애니메이션",
      ]}
      listType="ol"
    >
      <SubSection
        title="Scroll-trigger"
        description="whileInView prop을 사용하여 요소가 화면에 보일 때 애니메이션 실행"
      >
        <CodeBlock code={triggerCode} variant="live-example">
          <motion.div
            className="w-32 h-32 bg-blue-500 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          />
        </CodeBlock>
      </SubSection>

      <SubSection title="Scroll-linked" description="useScroll hook을 사용하여 스크롤 진행률에 따른 애니메이션 구현">
        <SubSection title="Vertical Scroll" description="세로 스크롤 진행률에 따른 가로 프로그레스 바">
          <CodeBlock code={scrollCode} variant="scroll-example">
            <div ref={verticalScrollContainerRef} className="relative overflow-auto" style={{ height: "400px" }}>
              <motion.div className="sticky top-0 h-2 bg-blue-500 origin-left z-10" style={{ scaleX }} />
              <div className="p-4 space-y-4">
                {Array.from({ length: 20 }).map((_, i) => (
                  <p key={i} className="text-gray-700">
                    Scroll content {i + 1}
                  </p>
                ))}
              </div>
            </div>
          </CodeBlock>
        </SubSection>

        <SubSection title="Horizontal Scroll" description="가로 스크롤 진행률에 따른 세로 프로그레스 바">
          <CodeBlock code={horizontalScrollCode} variant="scroll-example">
            <div ref={horizontalScrollContainerRef} className="relative overflow-x-auto" style={{ width: "100%" }}>
              <motion.div
                className="absolute left-0 h-full w-2 bg-blue-500 origin-top"
                style={{ scaleY: horizontalScaleY }}
              />
              <div className="flex gap-4 p-4 pl-8">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="flex-none w-64 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    Scroll item {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </CodeBlock>
        </SubSection>
      </SubSection>
    </DocSection>
  );
}
