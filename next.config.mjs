/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        prependData: `@import "src/sass/main.sass"`
    },
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.shopify.com',
                protocol: 'https'
            }
        ]
    }
};

export default nextConfig;
