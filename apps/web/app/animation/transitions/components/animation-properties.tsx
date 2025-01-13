"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/layout/documentation/doc-template";
import { DocSection, SubSection } from "@/components/layout/documentation/doc-section";

const exampleCode = `<motion.div
  className="w-20 h-20 bg-blue-500 rounded-lg"
  animate={{ 
    opacity: [0, 1], 
    scale: [0.8, 1] 
  }}
  transition={{ 
    duration: 1, 
    repeat: Infinity, 
    repeatType: "reverse" 
  }}
/>`;

export function AnimationProperties() {
  return (
    <DocSection title="속성">
      <SubSection title="animate, transition" description="Create a smooth progress bar that tracks scroll position.">
        <div className="relative mt-8">
          <CodeBlock code={exampleCode} variant="live-example">
            <motion.div
              className="w-20 h-20 bg-blue-500 rounded-lg"
              animate={{ opacity: [0, 1], scale: [0.8, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            />
          </CodeBlock>
        </div>
      </SubSection>
    </DocSection>
  );
}
