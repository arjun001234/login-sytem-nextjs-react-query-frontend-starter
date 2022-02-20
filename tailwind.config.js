module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          keyframes: {
            "grow-shrink": {
              "0%": {
                height: "0%"
              },
              "100%": {
                height: "100%"
              }
            },
            "top-down": {
              "0%": {
                transform: "translate(-50%)"
              },
              "100%": {
                transform: "translate(50%)"
              }
            }
          },
          animation: {
              "grow-shrink-1": "grow-shrink 1s ease infinite",
              "grow-shrink-2": "grow-shrink 1s ease infinite 0.3s",
              "grow-shrink-3": "grow-shrink 1s ease infinite 0.7s",
              "top-down-1": "top-down 1s ease-in-out infinite",
              "top-down-2": "top-down 1s ease-in-out infinite 0.3s",
              "top-down-3": "top-down 1s ease-in-out infinite 0.7s"
          }
        },
      transitionProperty: {
        'height': 'height'
      }
  },
  plugins: [],
}
