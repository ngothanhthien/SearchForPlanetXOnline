module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--text-default)",
          primary: "var(--primary-color)",
          secondary: "var(--secondary-color)",
          "dark-secondary": "var(--dark-secondary-color)",
          error: "var(--error-color)",
          success: "var(--success-color)",
        },
      },
      backgroundColor: {
        skin: {
          primary: "var(--primary-color)",
          primary30: "var(--primary-color-30)",
          primary10: "var(--primary-color-10)",
          "light-primary": "var(--light-primary-color)",
          "dark-primary": "var(--dark-primary-color)",
          secondary: "var(--secondary-color)",
          "light-secondary": "var(--secondary-color)",
          "dark-secondary": "var(--secondary-color)",
          surface: "var(--surface)",
          background: "var(--background)",
          neutral10: "var(--neutral-color-10)",
          neutral5: "var(--neutral-color-5)",
        },
      },
      accentColor: {
        skin: {
          primary: "var(--primary-color)",
        },
      },
      borderColor: {
        skin: {
          primary: "var(--primary-color)",
          secondary: "var(--secondary-color)",
          onSurface: "var(--onSurface)",
          onSurface30: "var(--onSurface-30)",
        },
      },
      ringColor: {
        skin: {
          primary: "var(--primary-color)",
        },
      },
      opacity: {
        high: ".87",
        medium: ".6",
      },
      backgroundOpacity: {
        high: ".87",
      },
    },
  },
  plugins: [],
};
