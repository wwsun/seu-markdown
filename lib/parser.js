'use strict';

const Utils = require('./utils');
const md = require('./md');
const log = require('./log');

module.exports = {

  /**
   * 解析文档
   * @param {string} content - 格式化的文档内容
   * @return {object} 解析后到文档对象
   */
  parse(content) {
    const lines = content.split(/\r\n|\r|\n/);
    const header = [];
    const body = [];
    let recording = true;
    lines.forEach(line => {
      if (recording && line.slice(0, 3) === '---') {
        recording = false;
      } else if (recording) {
        header.push(line);
      } else {
        body.push(line);
      }
    });

    md.markdown.setOptions({ gfm: false });
    const html = md.markdown(content);

    const meta = Utils.parseMeta(html);
    const codes = Utils.parseCodes(html);

    if (!meta.title) {
      log.debug('post', 'title is missing');
    }
    return {
      title: meta.title,
      meta,
      codes,
      body: body.join('\n'),
    };
  },

  /**
   * 渲染 markdown 文件为 html
   */
  render: md.render,
};


