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
        extend: {
            fontFamily: {
                pus: ['Playwrite US Trad'],
                mont: ['Montserrat'],
            },
            backgroundImage: {
                parallax:
                    "url('https://happywall-img-gallery.imgix.net/61817/wildflower_meadow_summer_by_ms_masked.jpg')",
                oilPaint:
                    "url('https://static.vecteezy.com/system/resources/previews/034/927/786/large_2x/ai-generated-watercolor-blob-clip-art-free-png.png')",
            },
            backdropBlur: {
                md: '12px',
            },
            colors: {
                'frosted-white': 'rgba(255, 255, 255, 0.70)',
                'frosted-yellow': 'rgba(254, 252, 232, 0.70)',
                'frosted-blue': 'rgba(147, 197, 253, 0.70)',
                'frosted-light-blue': 'rgba(219, 234, 254, .70)',
            },
        },
    },

    plugins: [forms],
};
