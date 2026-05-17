import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: "/check-token",
                destination:
                    "https://token-exchange-backend.onrender.com/check-token",
            },
        ];
    },
};

export default nextConfig;