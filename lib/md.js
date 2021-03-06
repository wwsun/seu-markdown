'use strict';

const md = require('marked');
const share = require('./share');

const renderer = new md.Renderer();
renderer.heading = share.header;
renderer.code = share.blockcode;

function hlMarkdown(src) {
  const opt = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: true,
    sanitize: false,
    smartLists: true,
    renderer,
  };
  return md(src, opt);
}

//
exports.markdown = md.parse;

// 渲染 markdown
exports.render = function(text) {
  return share.normalRender(text, hlMarkdown);
};
