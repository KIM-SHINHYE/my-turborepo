// "use client";

// import { motion } from "framer-motion";
import { CodeBlock } from "@/components/layout/documentation/doc-template";
import { DocSection } from "@/components/layout/documentation/doc-section";

const basicCode = `import { motion } from "framer-motion"

<motion.div/>`;

export function BasicAnimations() {
  return (
    <DocSection
      title="Basic animations"
      description="You'll perform almost all animations on a motion component. This is basically a DOM element with motion superpowers."
    >
      <CodeBlock code={basicCode} variant="default" />
    </DocSection>
  );
} 