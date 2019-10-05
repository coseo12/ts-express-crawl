module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfiog.json',
    },
  },
  moudleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/test/**/*.test.(ts|js)'],
  testEnviroment: 'node',
};
