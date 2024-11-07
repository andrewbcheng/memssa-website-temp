module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                dm: '"Intent"',
                open: '"Open Sans"',
            },
            screens: {
                mb: { max: '512px' },
                sm: { max: '768px' },
            },
            colors: {
                black: "#000000",
                white: "#ffffff",
            },
            backgroundColor: {
                body: "#ffffff",
                box: "#ffffff",
            },
            textColor: {
                primary: "#000000",
            },
            borderRadius: {
              box: "0.5rem",
            },
            boxShadow: {
                card: '0 10px 29px 0 rgba(68, 88, 144, 0.1)',
                'card-hover': '0 10px 36px 0 rgba(68, 88, 144, 0.3)',
            },
        },
    },
    plugins: [],
}