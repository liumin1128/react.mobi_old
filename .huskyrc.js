module.exports = {
  hooks: {
    // git message 格式控制，参见下面的 git commit message 校验部分，如果不需要可删除
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',

    // commit 之前执行的命令
    'pre-commit': 'lint-staged',
  },
};
