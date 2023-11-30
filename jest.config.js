import "@testing-library/jest-dom/jest-globals";

module.exports = {
  globals: {
    TextEncoder: require("util").TextEncoder,
    TextDecoder: require("util").TextDecoder,
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
};
