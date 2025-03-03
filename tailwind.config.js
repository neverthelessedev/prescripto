/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        originalColor: "var(--originalColor)",
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
        successColor: "var(--successColor)",
        dangerColor: "var(--dangerColor)",
        tertiaryColor: "var(--tertiaryColor)",
        upgradeColor: "var(--upgradeColor)",
      },
    },
  },

  plugins: [],
};
