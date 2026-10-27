/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#85003F',
          50: '#FDF2F6',
          100: '#FBE6ED',
          200: '#F7C0D2',
          300: '#F090B0',
          400: '#E45686',
          500: '#D12865',
          600: '#B00E4A',
          700: '#85003F',
          800: '#65002F',
          900: '#4D0024',
          950: '#320017',
        },
        navy: {
          DEFAULT: '#1D3443',
          dark: '#142530',
          light: '#2E4C60',
        },
        body: '#536273',
        surface: {
          DEFAULT: '#F5F6F7',
          light: '#FAFAFB',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(29, 52, 67, 0.06), 0 2px 6px -1px rgba(29, 52, 67, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(133, 0, 63, 0.12), 0 4px 12px -2px rgba(29, 52, 67, 0.06)',
      }
    },
  },
  plugins: [],
}
