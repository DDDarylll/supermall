const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//引入path模块
const path = require('path');
function resolve(dir) {
  //path.join(__dirname)设置绝对路径
  return path.join(__dirname, dir)
}

//别名
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('network', resolve('src/network'))
  }
}
