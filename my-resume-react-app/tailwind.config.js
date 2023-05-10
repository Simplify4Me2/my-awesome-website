module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)', backgroundColor: '#fff' },
        },
        draw_line: {
          '0%': { 'height': '0' },
          '50%': { 'border-left': '1px solid #fff' },
          '100%': { 'height': '100px', 'border-left': '1px solid #fff' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear forwards',
        'draw-cross': 'draw_line 2s linear infinite',
      }
    },
  },
  plugins: [],
}
