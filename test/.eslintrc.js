module.exports = {
  env: {
    'mocha': true,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'no-unused-expressions': 'off',
  },
};
