// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  pluginReactConfig,
  eslintConfigPrettier,
  {
    files: ['src/**/*', 'index.*'],
    ignores: ['node_modules/*', '*.js'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'max-len': [
        'warn',
        {
          code: 80,
          tabWidth: 2,
          ignoreStrings: true,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreComments: true,
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-console': [
        'error',
        {
          allow: [
            'info',
            'error',
            'warn',
            'groupCollapsed',
            'groupEnd',
            'table',
            'trace',
          ],
        },
      ],
      'no-debugger': 'error',
      'object-shorthand': ['error', 'properties'],
      'spaced-comment': ['error', 'always'],
      'capitalized-comments': [
        'warn',
        'always',
        {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
        },
      ],
      'no-invalid-this': 'off',
      'no-unused-expressions': ['error', { allowShortCircuit: true }],
      'no-fallthrough': 'error',
      'arrow-body-style': ['warn', 'as-needed'],
      'no-sequences': 'error',
      'prefer-template': 'error',
      'jsdoc/check-alignment': 'off',
      'jsdoc/require-param-name': 'off',
      'jsdoc/require-param-description': 'off',
      'react/no-deprecated': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
)
