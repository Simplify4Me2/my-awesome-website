const {defaults} = require('jest-config');
module.exports = {
    collectCoverage: false,
    globals: {
        window: {},
    },
    verbose: true,

    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
     }
};

    