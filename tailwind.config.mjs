/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#365902',
        secondary: '#F20505',
        background: '#ffffff',
        surface: '#f8fafc',
        onBackground: '#222222',
        onSurface: '#334155',
        onPrimary: '#365902',
        onSecondary: '#365902',

        darkBackground: '#121212',
        darkSurface: '#1E1E1E',
        darkOnBackground: '#E0E0E0',
        darkOnSurface: '#B0B0B0',
        darkOnPrimary: '#ffffff',
        darkOnSecondary: '#ffffff',

        textColor: '#0f172a',
        subHeadingColor: '#111827',

        // Desaturated dark mode colors
        darkPrimary: '#2d4601',  // Desaturated primary
        darkSecondary: '#d90404',  // Desaturated secondary
      }
    }
  },
  plugins: [],
}
