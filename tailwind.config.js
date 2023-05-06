module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        xxs: '12px',
        xs: '13px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '22px',
        heading: '32px',
        clampHeading: 'clamp(38px, 8vw, 80px)',
      },
      colors: {
        red:{
          DEFAULT: "#D2122E",
          light: "#FF3800"
        },
        navyBlue: {
          dark: "#020c1b",
          DEFAULT: "#0a192f",
          light: "#112240",
          lightest: "#233554",
        },
        slate: {
          dark: '#495670',
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },
        green: {
          DEFAULT: "#64ffda",
          tint: "#64ffda1a",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
      boxShadow: {
        navyBlue: "0 10px 100px -10px rgba(2,12,27,0.7)",
        sidebar: "-10px 0px 30px -15px rgba(2,12,27,0.7)",
        header: "0 10px 30px -10px rgba(2,12,27,0.7)",
        form: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086),
        0 100px 80px rgba(0, 0, 0, 0.12)`
      },
      transitionTimingFunction: {
        transition: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
    },
  },
  plugins: [],
};
