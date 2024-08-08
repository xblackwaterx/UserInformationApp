module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: ['txt', 'png', 'jpg', 'jpeg', 'svg'],
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'svg'],
  },
};
