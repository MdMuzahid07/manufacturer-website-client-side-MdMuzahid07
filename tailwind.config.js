module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    light: {
      "primary": "#FEBD17",
          
      "secondary": "#FF6720",
               
      "accent": "#37CDBE",
               
      "neutral": "#3D4451",
               
      "base-100": "#FFFFFF",
               
      "info": "#3ABFF8",
               
      "success": "#36D399",
               
      "warning": "#FBBD23",
               
      "error": "#dc2626",
    },
  },
  plugins: [require("daisyui")],
}
