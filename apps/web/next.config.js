const withTM = require('next-transpile-modules')(['ui', 'domains']);

module.exports = withTM({
  reactStrictMode: true
});
