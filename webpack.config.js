// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export(밖으로 내보내는 명령어)
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js', // webpack은 일반적으로 js파일을 진입점으로 사용함
  
  // 결과물(번들)을 반환하는 설정
  output: {
     path: path.resolve(__dirname, 'dist'), //resolve : __dirname + 'dist'를 합쳐서 반환, __dirname : 현재파일(webpack.config.js)이 있는 경로
     filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader' // 아래부터 순서대로 로딩
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
      new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}