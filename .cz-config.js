module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat: A new feature',
    },
    {
      value: 'fix',
      name: 'fix: A bug fix',
    },
    {
      value: 'chore',
      name: 'chore: Changes to the build process or auxiliary tools and libraries such as documentation generation',
    },
    {
      value: 'style',
      name: 'style: A code change that only effects UI styles, without logic',
    },
    {
      value: 'format',
      name: 'format: Changes that do not affect the meaning of the code',
    },
    {
      value: 'docs',
      name: 'docs: Documentation only changes',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes an issue/bug nor adds a feature',
    },
    {
      value: 'issue',
      name: 'issue: A issue fix',
    },
    {
      value: 'perf',
      name: 'perf: A code change that improves performance',
    },
    {
      value: 'revert',
      name: 'revert: Revert to a commit',
    },
    {
      value: 'test',
      name: 'test: Adding missing tests',
    },
  ],

  messages: {
    type: "Select the type of change that you're committing:",
    customScope: 'Denote the SCOPE of this change (optional):',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:',
    breaking: 'List any BREAKING CHANGES (optional):',
    footer: 'List any ISSUES CLOSED by this change (optional):',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'issue', 'refactor'],
  skipQuestions: [],
  subjectLimit: 80,
};
