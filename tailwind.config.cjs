/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                grey: '0px 2px 10px rgba(0,0,0,0.25)',
            },
            fontFamily: {
                nunito: ['Nunito'],
            },
            colors: {
                black: {
                    50: '#32363F', // primary.darkBackground
                    100: '#1F242D', //primary.darkHeader
                    200: '#181818', // primary.black
                },
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: colors.white,
            gray: colors.slate,
            green: colors.emerald,
            purple: colors.violet,
            yellow: colors.amber,
            pink: colors.fuchsia,
        },
    },
    plugins: [],
}
