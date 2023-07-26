const { getDefaultConfig } = require('metro-config');
const path = require('path');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    resolver: {
      extraNodeModules: {
        'react-native-vector-icons': require.resolve('react-native-vector-icons'),
      },
      assetExts: [...assetExts.filter((ext) => ext !== 'svg'), 'png'],
      sourceExts: [...sourceExts, 'svg'],
    },
    watchFolders: [
      // make sure to append the path to your project's node_modules
      path.resolve(__dirname, './node_modules'),
    ],
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
  };
})();