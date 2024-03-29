/** @type {import('tailwindcss').Config} */

const colors = {
    black: {
        12: 'rgba(0, 0, 0, .12)',
        38: 'rgba(0, 0, 0, .38)',
        60: 'rgba(0, 0, 0, .60)',
        87: 'rgba(0, 0, 0, .87)',
        DEFAULT: '#000000',
    },
    white: {
        30: 'rgba(255, 255, 255, 0.3)',
        50: 'rgba(255, 255, 255, 0.5)',
        70: 'rgba(255, 255, 255, 0.7)',
        DEFAULT: '#FFFFFF',
    },
    lavender: {
        100: '#e7dff3',
        200: '#d7caeb',
        300: '#c7b5e3',
        400: '#bba5dd',
        DEFAULT: '#af95d7',
        600: '#a88dd3',
        700: '#9f82cd',
        800: '#9678c7',
        900: '#8667be',
    },
    peach: {
        100: '#f6e5dc',
        200: '#f0d4c5',
        300: '#e9c3ad',
        400: '#e5b69c',
        DEFAULT: '#e0a98a',
        600: '#dca282',
        700: '#d89877',
        800: '#d38f6d',
        900: '#cb7e5a',
    },
    eucalyptus: {
        100: '#d7e1e4',
        200: '#bccdd2',
        300: '#a1b9bf',
        400: '#8caab2',
        DEFAULT: '#789ba4',
        600: '#70939c',
        700: '#658992',
        800: '#5b7f89',
        900: '#486d78',
    },
    raspberry: {
        100: '#f2dde0',
        200: '#eac6cb',
        300: '#e1afb6',
        400: '#da9da7',
        DEFAULT: '#d48c97',
        600: '#cf848f',
        700: '#c97984',
        800: '#c36f7a',
        900: '#b95c69',
    },
    periwinkle: {
        100: '#dde2ee',
        200: '#c6cfe3',
        300: '#afbcd7',
        400: '#9dadcf',
        DEFAULT: '#8c9fc6',
        600: '#8497c0',
        700: '#798db9',
        800: '#6f83b1',
        900: '#5c72a4',
    },
    'pink-lavender': {
        100: '#f0e6ef',
        200: '#e7d6e4',
        300: '#ddc6d9',
        400: '#d5b9d0',
        DEFAULT: '#ceadc8',
        600: '#c9a6c2',
        700: '#c29cbb',
        800: '#bc93b4',
        900: '#b083a7',
    },
    'soft-orange': {
        100: '#f9eee7',
        200: '#f6e2d8',
        300: '#f2d6c8',
        400: '#efcebc',
        DEFAULT: '#ecc5b0',
        600: '#eabfa9',
        700: '#e7b8a0',
        800: '#e4b097',
        900: '#dfa387',
    },
    ivory: {
        100: '#fffffb',
        200: '#fffff8',
        300: '#fffff5',
        400: '#fffff2',
        DEFAULT: '#fffff0',
        600: '#ffffee',
        700: '#ffffec',
        800: '#ffffe9',
        900: '#ffffe5',
    },
    isabelline: {
        100: '#fcfbfa',
        200: '#faf9f6',
        300: '#f8f6f2',
        400: '#f7f4f0',
        DEFAULT: '#f5f2ed',
        600: '#f4f0eb',
        700: '#f2eee8',
        800: '#f0ece5',
        900: '#eee8e0',
    },
    crail: {
        DEFAULT: '#872a38',
        100: '#faeae9',
        200: '#f6d5d5',
        300: '#eeb3b3',
        400: '#e48889',
        500: '#d65d63',
        600: '#c2414d',
        700: '#a12f3d',
        800: '#872a38',
        900: '#742735',
    },
    stromboli: {
        100: '#dfece1',
        200: '#c1d9c7',
        300: '#98bda3',
        400: '#6b9c7c',
        500: '#4b7e5e',
        600: '#386349',
        DEFAULT: '#4b7e5e',
        700: '#305640',
        800: '#254030',
        900: '#1f3529',
    },

}

const makeOpacity = () => {
    let o = {}
    for (let i = 0; i < 100; i++) {
        o[`${i}`] = `${i / 100}`
    }
    return o
}

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors,
        fontFamily: {
            sans: ["Josefin Sans", "sans-serif"],
            serif: ["Playfair Display", "serif"],
        },
        extend: {
            // opacity: {
            //     '15': '.15',
            //   }
            opacity: makeOpacity()
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: colors.crail.DEFAULT,
                    secondary: colors['pink-lavender'].DEFAULT,
                    accent: colors['soft-orange'].DEFAULT,
                    neutral: colors.ivory.DEFAULT,
                    'base-100': colors.isabelline.DEFAULT,
                    info: colors.periwinkle.DEFAULT,
                    success: colors.eucalyptus.DEFAULT,
                    warning: colors.peach.DEFAULT,
                    error: colors.raspberry.DEFAULT,
                    raspberry: colors.raspberry.DEFAULT
                },
            },
        ],
    },
    plugins: [require('daisyui')],
}
