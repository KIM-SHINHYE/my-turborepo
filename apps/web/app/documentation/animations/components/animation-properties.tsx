"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/layout/documentation/doc-template";
import { DocSection } from "@/components/layout/documentation/doc-section";

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
    <DocSection
      title="Animation Properties"
      description="You'll perform almost all animations on a motion component. This is basically a DOM element with motion superpowers."
    >
      <div className="relative mt-8">
        <CodeBlock code={exampleCode} variant="live-example">
          <motion.div
            className="w-20 h-20 bg-blue-500 rounded-lg"
            animate={{ opacity: [0, 1], scale: [0.8, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          />
        </CodeBlock>
      </div>
    </DocSection>
  );
}
