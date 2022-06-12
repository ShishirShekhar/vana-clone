module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'DM': ['DM Sans', 'sans-serif'],
      'syne': ['Syne', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'world-map': "url('/src/images/world-map.png')",
        'sun-mountain': "url('/src/images/sun_mountain.png')"
      }
    }
  },
  plugins: [],
}
