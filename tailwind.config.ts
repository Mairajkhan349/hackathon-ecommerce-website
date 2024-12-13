import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'headerFont': '14px',  // Add your custom font size here
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        headerBlue: "rgba(37, 43, 66, 1)",
        headerskyblue:"rgba(35, 166, 240, 1)",
        headergrey:"rgba(115, 115, 115, 1)",

      },
    },
  },
  plugins: [],
};
export default config;
