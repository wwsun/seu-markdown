'use strict';

/**
 * 解析 meta 信息
 * @param {string} html The html string
 * @return {object} The meta object
 */
exports.parseMeta = function(html) {
  const m = html.match(/<h1 id="(.*?)">(.*?)<\/h1>/); // find title
  const meta = {};
  if (!m) {
    meta.title = null;
  } else {
    meta.title = m[2];
  }

  const items = [];
  const metaListRegex = /<ul>([\s\S]*?)<\/ul>([\s\S]*)$/g; // find meta list
  const metaListMatch = metaListRegex.exec(html);
  let metaListHtml;
  if (metaListMatch) {
    metaListHtml = metaListMatch[1] || html;
    meta.description = metaListMatch[2] || '';
  } else {
    meta.description = html;
  }

  const regex = /<li>(.*?)<\/li>/g;
  let match = regex.exec(metaListHtml);
  while (match) {
    items.push(match[1]);
    match = regex.exec(metaListHtml);
  }

  if (items) {
    items.forEach(item => {
      const splits = item.split(':');
      const key = splits[0].trim();
      const value = splits.slice(1).join(':').trim();
      meta[key] = value;
    });
  }
  return meta;
};

/**
 * 解析 jsx/css 信息
 * @param {string} html The html string
 * @return {object} The code object { jsx, css }
 */
exports.parseCodes = function(html) {
  // console.log(html);

  const jsxRegex = /<p>````jsx(<\/p>)?([\s\S]*?)(<p>)?````<\/p>/g; // find jsx codes
  const jsxCodesMatch = jsxRegex.exec(html);
  let jsxCodes;
  if (jsxCodesMatch) {
    jsxCodes = jsxCodesMatch[0];
  }

  const cssRegex = /<p>````css(<\/p>)?([\s\S]*?)(<p>)?````<\/p>/g; // find css codes
  const cssCodesMatch = cssRegex.exec(html);

  let cssCodes;
  if (cssCodesMatch) {
    cssCodes = cssCodesMatch[0];
  }

  // console.log(jsxCodes);
  // console.log(cssCodes);

  return {
    jsx: jsxCodes,
    css: cssCodes,
  };
};
