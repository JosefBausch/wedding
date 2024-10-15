import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        screens: {
            'break': {'max': '800px'},
        },
        extend: {
            fontFamily: {
                "pus": ["Playwrite US Trad"],
                "mont": ["Montserrat"]
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                rosePink: '#ED9FA6',
                josefBlue: '#A2BFFE',
                backgroundWhite: 'rgba(255,255,255,.5)'
            }
        },
    },

    plugins: [forms],
};
