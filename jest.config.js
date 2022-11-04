const esModules = ['testing-library__dom'].join('|');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // 指定要测试的文件类型的后缀
  testMatch: ['<rootDir>/**/*.test.[jt]s?(x)'],
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  // https://stackoverflow.com/a/50075709/9065011
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
};
