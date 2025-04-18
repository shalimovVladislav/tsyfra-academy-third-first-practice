import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import parser from '@typescript-eslint/parser';
import eslintPluginTS from '@typescript-eslint/eslint-plugin';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import eslintPluginNext from '@next/eslint-plugin-next';
import eslintPluginCssModules from 'eslint-plugin-css-modules';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      '.husky/**',
      '.cache/**',
      'public/**',
    ],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTS,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      prettier: eslintPluginPrettier,
      next: eslintPluginNext,
      'css-modules': eslintPluginCssModules,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json', // Указываем путь к tsconfig.json
        },
      },
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',

      // React
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Prettier
      'prettier/prettier': 'error',

      // CSS Modules
      //'css-modules/no-unused-class': ['warn', { camelCase: true }],
      //'css-modules/no-undef-class': ['error', { camelCase: true }],
    },
  },
  // Apply Prettier config to disable conflicting ESLint rules
  configPrettier,
];
