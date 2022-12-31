const defaultTheme = {
	primary: '#eab308',
    "primary-content": "#000",
	secondary: '#65a30d',
    "secondary-content": "#000",
	accent: '#67e8f9',
    "accent-content": "#000",
	info: '#06b6d4',
	success: '#84cc16',
	warning: '#fb923c',
	error: '#f87171'
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    ...defaultTheme,
                    neutral: '#d1d5db',
	                'base-100': '#ebebeb',
                    'base-200': '#e5e5e5',
                    'base-300': '#d6d6d6'
                }
            }
        ]
    }
};
