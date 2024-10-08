/** @type {import('next').NextConfig} */


const nextConfig = {
    sassOptions: {
        prependData: `@import "src/sass/main.sass"`
    },
};

export default nextConfig;
