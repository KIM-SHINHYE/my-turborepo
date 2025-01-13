"use client";

import { useState } from "react";
import { SubSection } from "@/components/layout/documentation/doc-section";
import { CodeBlock } from "@/components/layout/documentation/doc-template";
import { motion, AnimatePresence } from "framer-motion";
import { items } from "../data";

const sampleCode = `const [selectedId, setSelectedId] = useState<string | null>(null);

return (
  <div className="relative">
    <ul className="flex flex-wrap flex-start gap-4 h-96 overflow-auto">
      {items.map((card) => (
        <li
          key={card.id}
          onClick={() => setSelectedId(card.id)}
          className={\`cursor-pointer relative p-6 h-1/3 flex-none w-full bg-blue-\${card.pointOfInterest} rounded-lg\`}
        >
          <motion.div className="card-content" layoutId={\`card-container-\${card.id}\`}>
            <motion.div className="title-container" layoutId={\`title-container-\${card.id}\`}>
              <span className="category text-white text-lg">category: {card.category}</span>
              <h2>title: {card.title}</h2>
            </motion.div>
          </motion.div>
        </li>
      ))}
    </ul>

    <AnimatePresence>
      {selectedId && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {items.map(card => card.id === selectedId && (
              <motion.div
                key={card.id}
                layoutId={\`card-container-\${card.id}\`}
                className="bg-white rounded-lg p-6 w-full h-full cursor-pointer"
                onClick={() => setSelectedId(null)}
              >
                <motion.div className="title-container" layoutId={\`title-container-\${card.id}\`}>
                  <span className="text-lg text-gray-600">{card.category}</span>
                  <h2 className="text-2xl font-bold">{card.title}</h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4"
                >
                  <p>Lorem ipsum dolor sit amet...</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </AnimatePresence>
  </div>
)`;

export default function LayoutAnimation() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <SubSection title="layoutId의 Item 사용" description={["layoutId를 사용해 두 요소를 일치시키고 애니메이션 적용 가능"] }>
      <CodeBlock code={'<motion.li layoutId="item" />'} />
      <CodeBlock code={sampleCode} variant="live-example">
        <div className="relative">
          <ul className="flex flex-wrap flex-start gap-4 h-96 overflow-auto">
            {items.map((card) => (
              <li
                key={card.id}
                onClick={() => setSelectedId(card.id)}
                className={`cursor-pointer relative p-6 h-1/3 flex-none w-full bg-blue-${card.pointOfInterest} rounded-lg`}
              >
                <motion.div className="card-content" layoutId={`card-container-${card.id}`}>
                  <motion.div className="title-container" layoutId={`title-container-${card.id}`}>
                    <span className="category text-white text-lg">category: {card.category}</span>
                    <h2>title: {card.title}</h2>
                  </motion.div>
                </motion.div>
              </li>
            ))}
          </ul>

          <AnimatePresence>
            {selectedId && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {items.map(
                    (card) =>
                      card.id === selectedId && (
                        <motion.div
                          key={card.id}
                          layoutId={`card-container-${card.id}`}
                          className="bg-white rounded-lg p-6 w-full h-full cursor-pointer"
                          onClick={() => setSelectedId(null)}
                        >
                          <motion.div className="title-container" layoutId={`title-container-${card.id}`}>
                            <span className="text-lg text-gray-600">{card.category}</span>
                            <h2 className="text-2xl font-bold">{card.title}</h2>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="mt-4"
                          >
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                          </motion.div>
                        </motion.div>
                      )
                  )}
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </CodeBlock>
    </SubSection>
  );
}
