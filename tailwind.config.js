module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        default: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      boxShadow: {
        searchForm:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      },
      flex: {
        slider: "1 0 35%",
        searchForm: "1 1 12rem",
      },
    },
  },
  plugins: [],
};
