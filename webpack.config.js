'use strict';

const webpack = require('webpack'),

         path = require('path');

let config = {
  entry: "./content.js",

  output: {

    path: __dirname + '/build',

    filename: "bundle.js"
  },

};
module.exports = config;
