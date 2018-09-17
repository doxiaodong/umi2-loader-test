export default {
  urlLoaderExcludes: [/\.pug$/],
  chainWebpack(config) {
    config.module
      .rule('pug-template')
      .test(/\.pug$/)
      .use('pug')
      .loader('pug-loader');
  }
};
