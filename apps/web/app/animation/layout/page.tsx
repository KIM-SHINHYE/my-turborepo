import { DocTemplate } from "@/components/layout/documentation/doc-template";
import LayoutAnimation from "./components/layout-animation";
import LayoutIdAnimation from "./components/layoutId-animation";

export default function LayoutPage() {
  return (
    <DocTemplate
      title="Layout"
      description={[
        "두 개의 레이아웃 간, 서로 다른 요소 간에도 쉽게 애니메이션 적용 가능",
        "layoutId prop을 통해 애니메이션 적용 가능",
        "애니메이션을 적용시킬 수 없었던 CSS 값에 애니메이션 적용 가능",
      ]}
    >
      <LayoutAnimation />
      <LayoutIdAnimation />
    </DocTemplate>
  );
}
