/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Outfit', 'Noto Sans KR', 'sans-serif'],
                sans: ['Outfit', 'Noto Sans KR', 'sans-serif'],
                serif: ['Noto Serif KR', 'serif'],
            },
        },
    },
    plugins: [],
}
