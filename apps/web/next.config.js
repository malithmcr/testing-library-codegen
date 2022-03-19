const withTM = require("next-transpile-modules")(["testing-library-codegen"]);

module.exports = withTM({
  reactStrictMode: true,
});
