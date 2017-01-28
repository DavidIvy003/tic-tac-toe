require('jsdom-global')();

require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});