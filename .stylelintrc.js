module.exports = {
  fix: true,
  formatter: 'verbose',
  syntax: 'scss',
  processors: [],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'at-rule-empty-line-before': 'never', // @ 规则之前空行
    'at-rule-no-unknown': [true, { ignoreAtRules: ['extend', 'each', 'if', 'for', 'include', 'mixin'] }], // @rule 不允许不识别的 rule
    'block-no-empty': true, // 非空块
    'property-no-unknown': [true, { ignoreProperties: ['speak'] }], // 不识别的属性
    'comment-empty-line-before': 'never', // 评论之前空行
    'declaration-empty-line-before': 'never', // 声明之前空行
    'selector-type-no-unknown': [true, { ignore: ['custom-elements', 'default-namespace'] }], // 允许自定义元素选择器，如 app-
    'value-keyword-case': ['lower', { ignoreProperties: ['font-family', '$font-family-base', '$font-family-bold'] }], // 属性值小写
    'font-family-no-missing-generic-family-keyword': null, // font-family 不用列出通用 family
    'selector-pseudo-element-colon-notation': 'single', // 伪元素使用单冒号
    'no-descending-specificity': null, // CSS权重不能降序排列
    'selector-pseudo-element-no-unknown': [
      // 不使用不识别的伪元素
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
  },
};
