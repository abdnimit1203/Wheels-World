

/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#ffd83b",
                    
            "secondary": "#185f96",
                    
            "accent": "#96d5f7",
                    
            "neutral": "#44403c",
                    
            "base-100": "#ffffff",
                    
            "info": "#fda4af",
                    
            "success": "#18b47b",
                    
            "warning": "#f0d447",
                    
            "error": "#f41042",
        },
      },
      "light",
      {
        "dark":{
          "primary": "#ffd83b",
                    
          "secondary": "#39abe7",
                  
          "accent": "#96d5f7",
                  
          "neutral": "#ffffff",
                  
          "base-100": "#1d212a",
                  
          "info": "#fda4af",
                  
          "success": "#18b47b",
                  
          "warning": "#f0d447",
                  
          "error": "#f41042",
        }
      },
      "cyberpunk"
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [require("daisyui"),
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),
],
}
