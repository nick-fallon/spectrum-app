import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'sf-black': '#171f1d',
      'sf-gray': '#403D3E',
      'sf-light-gray': '#a9a9a9', // lighter shade for backgrounds
      'sf-dark-gray': '#2e2e2e', // darker shade for text or borders
      'sf-white': '#eaecf0',
      'sf-pink': '#FE65C3',
      'sf-pink-light': '#FF8EDF', // lighter pink
      'sf-pink-dark': '#D14E9B', // darker pink
      'sf-purple': '#A263D8',
      'sf-purple-light': '#B98BE8', // lighter purple
      'sf-purple-dark': '#814BB4', // darker purple

    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
