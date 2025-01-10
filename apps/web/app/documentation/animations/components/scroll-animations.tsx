"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { DocSection, SubSection } from "@/components/layout/documentation/doc-section";
import { CodeBlock } from "@/components/layout/documentation/doc-template";

const scrollCode = `const containerRef = useRef(null);
const { scrollYProgress } = useScroll({ container: containerRef });
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
});

return (
  <div ref={containerRef} className="h-[400px] overflow-auto relative">
    <motion.div 
      className="sticky top-0 h-2 bg-blue-500 origin-left"
      style={{ scaleX }} 
    />
    {/* 스크롤 콘텐츠 */}
  </div>
)`;

export function ScrollAnimations() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <DocSection
      title="Scroll Animations"
      description={[
        "Motion offers powerful scroll-linked animations.",
        "Track scroll position in any scrollable element.",
        "Create smooth progress indicators and parallax effects."
      ]}
    >
      <SubSection 
        title="Progress Indicator"
        description="Create a smooth progress bar that tracks scroll position."
      >
        <CodeBlock code={scrollCode} variant="scroll-example">
          <div 
            ref={containerRef} 
            className="relative overflow-auto"
            style={{ height: '400px' }}
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
        </CodeBlock>
      </SubSection>
    </DocSection>
  );
} 