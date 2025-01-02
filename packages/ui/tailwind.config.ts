import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        commonColor: "#562db6",
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.tsx"],
};

export default config;
