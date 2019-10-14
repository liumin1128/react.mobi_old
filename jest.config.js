module.exports = {
  setupFiles: [ '<rootDir>/jest.setup.js' ], // 运行测试前可执行的脚本（比如注册enzyme的兼容）
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    // '^.+\\.css$': '<rootDir>/__test__/css-transform.js',
  },
  testPathIgnorePatterns: [ '<rootDir>/.next/', '<rootDir>/node_modules/' ], // 转换时需忽略的文件
  testURL: 'http://localhost/', // 运行环境下的URl

  //   collectCoverage: true, // 是否收集测试时的覆盖率信息（默认是false,同package配置的--coverage参数）
  //   collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,mjs}'], // 哪些文件需要收集覆盖率信息
  //   coverageDirectory: '<rootDir>/test/coverage', // 输出覆盖信息文件的目录
  //   coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/index.jsx'], // 统计覆盖信息时需要忽略的文件
  //   moduleNameMapper: { // 需要mock处理掉的文件，比如样式文件 },
  //   testMatch: [ // 匹配的测试文件
  //     '<rootDir>/test/**/?(*.)(spec|test).{js,jsx,mjs}',
  //     '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
  //   ],

};
