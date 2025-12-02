import type { Config } from "tailwindcss";

import { primaryColors } from './src/lib/colors';

const generateColorClasses = () => {
  const colors: Record<string, string> = {};
  primaryColors.forEach((color, index) => {
    colors[`theme-${index}`] = color;
  });
  return colors;
};

const generateSafelist = () => {
  const list: string[] = [];
  for (let i = 0; i < primaryColors.length; i++) {
    list.push(`bg-theme-${i}`);
    list.push(`border-theme-${i}`);
  }
  return list;
};

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: generateSafelist(),
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: generateColorClasses(),
      borderColor: generateColorClasses(),
    },
  },
  plugins: [
    require('tailwind-fontawesome')
  ],
} satisfies Config;
