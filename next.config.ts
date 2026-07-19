import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisation des images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an
  },

  // Compression automatique
  compress: true,

  // Headers de sécurité et SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Sécurité
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Performance & Caching
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache long pour les assets statiques
      {
        source: "/(.*).(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirections SEO (www vers non-www, http vers https)
  async redirects() {
    return [
      // Redirect des anciennes URLs si nécessaire
      {
        source: "/accueil",
        destination: "/",
        permanent: true,
      },
      // Variantes de mots-clés (pour capturer les recherches)
      {
        source: "/creation-site-internet-abidjan",
        destination: "/creation-site-web-abidjan",
        permanent: true,
      },
      {
        source: "/developpeur-web-abidjan",
        destination: "/creation-site-web-abidjan",
        permanent: true,
      },
      {
        source: "/creation-site-cote-ivoire",
        destination: "/creation-site-web-cote-divoire",
        permanent: true,
      },
      // Redirections pour "agence web"
      {
        source: "/agence-web-cote-divoire",
        destination: "/agence-web-abidjan",
        permanent: true,
      },
      {
        source: "/agence-digitale-abidjan",
        destination: "/agence-web-abidjan",
        permanent: true,
      },
      {
        source: "/agence-creation-site-abidjan",
        destination: "/agence-web-abidjan",
        permanent: true,
      },
    ];
  },

  // Experimental features pour la performance
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
