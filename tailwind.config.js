/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-custom': '#050505',
                'surface-custom': '#0f0f0f',
                'surface-border': '#1f1f1f',
                'primary-custom': '#00f2ff',
                'secondary-custom': '#7000ff',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                outfit: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'glow-primary': '0 0 20px rgba(0, 242, 255, 0.4)',
                'glow-secondary': '0 0 20px rgba(112, 0, 255, 0.4)',
            }
        },
    },
    plugins: [],
}
