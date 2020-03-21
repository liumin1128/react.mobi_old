module.exports = {
  linters: {
    '*.{ts,tsx}': ['eslint --fix', 'git add'],
    '*.{js,jsx}': ['eslint --fix', 'git add'],
    '*.{md,html,json}': ['prettier --write', 'git add'],
    '*.{css,scss,less}': ['prettier --write', 'git add'],
  },
};
