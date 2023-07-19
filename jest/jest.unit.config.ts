module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.unit.spec.ts'],
  setupFiles: ['<rootDir>/jest/jest.setup.ts'],
  rootDir: '../',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|js)$': [
      'ts-jest',
      {
        diagnostics: false,
      },
    ],
  },
};
