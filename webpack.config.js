'use strict';

var glob = require('glob');
const webpack = require('webpack'),

         path = require('path');

let config = {
  entry: glob.sync('./source/javascript/*/**.js').reduce(function(obj, el){
    obj[path.parse(el).name] = el;
    return obj
 },{}),

  output: {

    path: __dirname + '/build',

    filename: 'bundle.js'
  },

};
module.exports = config;