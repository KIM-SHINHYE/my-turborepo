"use client";

import { DocTemplate } from "@/components/layout/documentation/doc-template";
import { AnimationProperties } from "@/app/animation/transitions/components/animation-properties";

export default function TransitionsPage() {
  return (
    <DocTemplate
      title="Animation"
      description={[
        "Motion 컴포넌트에 애니메이션 적용을 위해 animate prop에 값을 전달해 적용 가능",
        "기본적으로 transition 값이 설정되어 있지만 추가하여 적용 가능",
      ]}
    >
      <AnimationProperties />
    </DocTemplate>
  );
}
