import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'checked-color': '#0E224d', // Define your custom color
      },
      screens: {
        // Define your custom breakpoints here
        lg: '1024px', // Default large screens
        xl: '1440px', // Custom large screens
      'custom-lg': '1200px', // Custom size between lg and xl
      },
    },
  },
  plugins: [nextui()],
};
export default config;
