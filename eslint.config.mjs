import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default [
  // {
  //   files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  //   rules: {
  //     'no-console': [
  //       'error',
  //       {
  //         allow: ['error', 'info', 'warn'],
  //       },
  //     ],
  //   },
  // },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    settings: {
      react: {
        version: '18',
      },
    },
    ...reactPlugin.configs.flat.recommended,
  },
  reactPlugin.configs.flat['jsx-runtime'],
  tseslint.configs.recommended,
  prettierPluginRecommended,
]
