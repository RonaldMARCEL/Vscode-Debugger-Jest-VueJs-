const path = require("path");

module.exports = {
    rootDir: path.resolve(__dirname, "../../"),
    moduleFileExtensions: ["js", "json", "vue"],
    moduleNameMapper: {
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "^@tu/(.*)$": "<rootDir>/test/unit/$1",
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    transform: {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
    },
    snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
    setupFiles: ["<rootDir>/test/unit/setup"],
    verbose: true
};
