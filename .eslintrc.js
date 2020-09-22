module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-console': 'off',
  },
  globals: {
    breakpoint: true,
  },
  plugins: ['jest'],
};
