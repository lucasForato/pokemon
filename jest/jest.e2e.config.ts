module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.e2e.spec.ts'],
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
