module.exports = { // 객체데이터 내보내기
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime'] // 비동기처리
  ]
}