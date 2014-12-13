require.config({
  baseUrl: 'js',
  paths: {
    data: 'libs/data',
    zepto: 'libs/zepto',
    index: 'modules/index',
    almond: 'almond'
  },
  include: ['index'],
  out: '../dist/js/index.min.js',
  name: 'almond',
  removeCombined: true,
  preserveLicenseComments: false,
  wrap: true
});
