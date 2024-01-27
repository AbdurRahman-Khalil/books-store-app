/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// Define your custom font families within the fontFamily 
// key: tailwind.config.js export default { 
//   theme: { 
//     extend: { 
//       fontFamily: { 
//         customFont: ['"Custom Font"', "sans-serif"], 
//         // Add more custom font families as needed 
//       } 
//     }
//   } // Other Tailwind configuration settings };
//  }