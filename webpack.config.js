module.exports = {
  entry: './src/test.ts',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [{ 
      test: /\.ts$/, 
      use: 'ts-loader' 
    }],
  },
  devtool: 'source-map'
};
