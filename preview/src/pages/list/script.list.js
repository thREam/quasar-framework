'use strict';

var html = require('raw!./view.list.html');

module.exports = {
  template: html,
  data: {
    radio: 'opt1',
    range: 2,
    toggle: false
  }
};
