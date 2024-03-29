const path = require('path');

//引入自定义配置文件
const { title } = require('./src/config/index');

const resolve = dir => {
  return path.join(__dirname, dir);
};

//development：开发环境    production：生产环境
//项目部署的基础路径
const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/';

// 配置文件会被自动加载
module.exports = {
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部，
  // 比如 https://www.my-app.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如，如果你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 `/my-app/`
  // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  publicPath: BASE_URL,

  // 将构建好的文件输出到哪里
  // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  // outputDir: 'dist',

  // 放置静态资源的地方 (js/css/img/font/...)
  // 放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  // assetsDir: '',

  // 指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  // indexPath: 'index.html',

  // pages: {
  //   //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
  //   index: {
  //     //除了 entry 之外都是可选的
  //     entry: 'src/index/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
  //     template: 'public/index.html', // 模板来源
  //     filename: 'index.html', // 在 dist/index.html 的输出
  //     title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
  //     chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
  //   },
  //   subpage: 'src/subpage/main.js' //官方解释：当使用只有入口的字符串格式时,模板会被推导为'public/subpage.html',若找不到就回退到'public/index.html',输出文件名会被推导为'subpage.html'
  // },

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: false,

  // 使用带有浏览器内编译器的完整构建版本
  // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
  // compiler: false,

  // babel-loader 默认会跳过 node_modules 依赖。
  // 通过这个选项可以显式转译一个依赖。
  // transpileDependencies: [/* string or regex */],

  // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  productionSourceMap: false,

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  configureWebpack: config => {
    config.name = title;
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('_r', resolve('')) // _r：表示当前项目的根目录 /vuedemo
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'));
  },

  // CSS 相关选项
  // css: {
  //   // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
  //   // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
  //   extract: true,

  //   // 是否开启 CSS source map？
  //   sourceMap: false,

  //   // 为预处理器的 loader 传递自定义选项。比如传递给
  //   // sass-loader 时，使用 `{ sass: { ... } }`。
  //   loaderOptions: {},

  //   // 为所有的 CSS 及其预处理文件开启 CSS Modules。
  //   // 这个选项不会影响 `*.vue` 文件。
  //   modules: false
  // },

  // // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // // 在多核机器下会默认开启。
  // parallel: require('os').cpus().length > 1,

  // // PWA 插件的选项。
  // // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
  // pwa: {},

  // 配置 webpack-dev-server 行为。
  devServer: {
    open: true, //当open选项被设置为true时，dev server将直接打开浏览器
    host: 'localhost', //设置服务器的主机号，默认是localhost，但是可以自己进行设置。 此时，localhost:9000和192.168.0.25:9000都能访问成功
    port: 1002, //默认端口为8080，可以指定端口
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    // string | Object
    // proxy: {
    //   //输入/api 让其去访问http://localhost:3000/api
    //   '/api': {
    //     //设置调用的接口域名和端口号 ( 设置代理目标)
    //     target: 'http://192.168.6.213:63698/',
    //     //开启代理，在本地创建一个虚拟服务端，然后发送请求的数据，并同时接受请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题了。
    //     changeOrigin: true,
    //     //路径重写
    //     pathRewrite: {
    //       //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://140.143.237.11:9093/api/test/hello，直接写‘/api/test/hello’即可
    //       // '^/api': ''   //这种表示，路径中没有api，需要在target追加上/api类似于这种：http://140.143.237.11:9093/api/，配置出来是这样：http://140.143.237.11:9093/api/test/hello
    //       '^/api': '/api'
    //     }
    //   }
    // },
    before: app => {}
  },

  // 三方插件的选项
  pluginOptions: {}
};
