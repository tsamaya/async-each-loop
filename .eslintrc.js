module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jest', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    node: true,
    'jest/globals': true,
  },
};
