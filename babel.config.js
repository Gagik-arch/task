module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ... other configs, if any
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@resources': './src/resources',
          '@components': './src/components',
          '@assets': './src/assets',
          '@containers': './src/containers',
          '@screens': './src/screens',
          '@core': './src/core',
          '@api': './src/api',
          '@types': './src/types.ts',
          '@navigation': './src/navigation',
          '@store': './src/store',
        },
      },
    ],

    // ... other configs, if any
  ],
};
