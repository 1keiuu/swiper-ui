const config = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  verbose: true,
  moduleNameMapper: {
    "^~/(.*)": "<rootDir>/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};

module.exports = config;
