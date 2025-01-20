    ('change', './src/pages/**/*.{js,ts,jsx,tsx}', () => {
        require.cache[require.resolve('./src/pages/_app.js')].exports = App;
    })