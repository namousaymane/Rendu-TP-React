const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Support pour .wasm (seulement utile sur web)
config.resolver.assetExts.push('wasm');

// Applique les headers COOP/COEP SEULEMENT pour le serveur web
const isWeb = process.env.EXPO_PUBLIC_PLATFORM === 'web' || process.argv.includes('--web');

if (isWeb) {
  config.server = {
    ...config.server,
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
        res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
        next();
      };
    },
  };
}

module.exports = config;