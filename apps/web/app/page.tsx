import { DocSection } from "@/components/layout/documentation/doc-section";
import { CodeBlock, DocTemplate } from "@/components/layout/documentation/doc-template";

export default function RootPage() {
  const basicCode = `
    /* 설치하기 */
    pnpm add motion

    /* 불러오기 및 사용하기 */
    import { motion } from "motion/react";

    export default function App() {
      return <motion.div />
    }
  `;

  const basicMotionCode = `
    <motion.div />
    <motion.section>
    <motion.li>
    <motion.button>
  `;
  return (
    <DocTemplate
      title="Motion"
      description={[
        "애니메이션을 쉽게 구현할 수 있도록 도와주는 라이브러리",
        "<motion />에 애니메이션 적용을 위해 animate prop에 값을 전달해 적용 가능",
      ]}
      // quote={true}
    >
      <DocSection title="기본 사용">
        <CodeBlock code={basicCode} variant="default" />
      </DocSection>
      <DocSection
        title="motion 컴포넌트"
        description={[
          "motion은 HTML 요소에 접두사로 붙여 사용",
          "motion 컴포넌트는 일반 HTML 요소처럼 동작하므로 크기나 내용이 있어야 화면에 표시",
          "모든 HTML/SVG 요소에 motion을 적용할 수 있음 (예: motion.div, motion.button, motion.path)",
          "className, style 등 기존 HTML 속성을 모두 사용 가능",
          "추가로 animate, transition, variants 등 애니메이션 관련 prop을 사용할 수 있음"
        ]}
      >
        <CodeBlock code={`// 기본적인 motion 컴포넌트 사용
<motion.div className="w-20 h-20 bg-blue-500" />
<motion.button className="px-4 py-2 bg-green-500">
  Click me
</motion.button>

// SVG 요소에도 적용 가능
<motion.svg>
  <motion.path d="M0 0h100v100H0z" />
</motion.svg>`} variant="default" />
      </DocSection>
    </DocTemplate>
  );
}
