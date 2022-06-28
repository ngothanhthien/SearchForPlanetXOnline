module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}","./preloadTailwind.html"],
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
          "dark-text-default": "var(--dark-text-default)",
          "dark-text-muted": "var(--dark-text-muted)",
          "player-green": "var(--player-green)",
          "player-purple": "var(--player-purple)",
          "player-yellow": "var(--player-yellow)",
          "player-red": "var(--player-red)"
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
          "dark-background": "var(--dark-background)",
          "dark-surface": "var(--dark-surface)",
          "dark-button-background": "var(--dark-button-background)",
          "dark-button-background-hover": "var(--dark-button-background-hover)",
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
