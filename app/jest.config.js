const environment = process.env.NODE_ENV || "development";

const config = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/spec/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
    "^config$": `<rootDir>/config/${environment}.ts`,
  },
  modulePathIgnorePatterns: ["<rootDir>/spec/__tests__/ignore"],
};

module.exports = config;
