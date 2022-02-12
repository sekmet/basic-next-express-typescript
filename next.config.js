/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});

module.exports = {
  useFileSystemPublicRoutes: true,
  env: {
    HOST: 'localhost',
    PORT: 4100,
    NEXTAUTH_URL: '',
    API_SERVER_URL: '',
    GRAPHQL_ENDPOINT: '',
    HASURA_SECRET: ''
  },
  withBundleAnalyzer
}
