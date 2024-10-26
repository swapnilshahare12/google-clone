module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                c: "0 1px 1px rgba(0,0,0,.1)",
                c2: "0 1px 1px rgb(0 0 0 / 10%)",
                c3: "0 1px 6px rgb(32 33 36 / 28%)",
            },
        },
    },
    plugins: [],
};


// box-shadow: 0 1px 1px rgba(0,0,0,.1);