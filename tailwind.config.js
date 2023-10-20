/** @type {import('tailwindcss').Config} */
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
    extend: {},
  },
  plugins: [require("daisyui")],
}
