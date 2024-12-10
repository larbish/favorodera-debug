import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 1,
      maxBOF: 0,
    }],
    'vue/multi-word-component-names': 'off',
    'vue/multiline-html-element-content-newline': ['error', {
      allowEmptyLines: true,
      ignores: ['pre', 'textarea'],
    }],
    'vue/max-len': ['error', {
      code: 120,
      template: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreHTMLAttributeValues: true,
      ignoreHTMLTextContents: true,
    }],
    'vue/block-tag-newline': ['error', {
      multiline: 'ignore',
      singleline: 'ignore',
    }],
  },
})
