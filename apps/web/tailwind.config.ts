// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  presets: [sharedConfig], // 공통 설정 preset에 셋팅,
  theme: {
    extend: {
      colors: {
        customColor: "#aa2c5e", // 프로젝트 내 추가하고 싶은 설정 추가
      },
    },
  },
  plugins: [
    // 프로젝트 전용 플러그인 추가
  ],
  content: ["./app/**/*.tsx"], // app 내 있는 tsx 파일을 포함
};

export default config;
