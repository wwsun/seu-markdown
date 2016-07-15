'use strict';

const _ = require('lodash');
const md = require('./markdown');
const option = require('./util/option');
const log = require('./util/log');

exports.md = md;
exports.parse = parseContent;
exports.parseToc = parseToc;

/**
 * parse content
 */
function parseContent(content) {
    const lines = content.split(/\r\n|\r|\n/);
    let header = [];
    let body = [];
    let recording = true;
    lines.forEach(function (line) {
        if (recording && line.slice(0, 3) === '---') {
            recording = false;
        } else if (recording) {
            header.push(line);
        } else {
            body.push(line);
        }
    });
    const meta = parseMeta(header.join('\n'));
    if (!meta.title) {
        log.debug('post', 'title is missing');
    }
    return { title: meta.title, meta: meta, body: body.join('\n') };
}

function parseMeta(content) {
    md.markdown.setOptions({
        gfm: false
    });
    let html = md.markdown(content);
    const m = html.match(/<h1 id=\"(.*?)\">(.*?)<\/h1>/);
    let meta = {};
    if (!m) {
        meta.title = null;
    } else {
        meta.title = m[2];
    }
    let items = [];
    const metaListRegex = /<ul>([\s\S]*?)<\/ul>([\s\S]*)$/g;
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
        items.forEach(function (item) {
            const splits = item.split(':');
            const key = splits[0].trim();
            const value = splits.slice(1).join(':').trim();
            meta[key] = value;
        });
    }
    return meta;
}

function parseToc(content) {
    let toc = md.toc(content, option.get('tocLevel'));
    if (_.isEmpty(toc)) return '';
    let html = '<ul>';
    let begin, last;
    toc.forEach(function (item) {
        if (!begin) {
            begin = item.level;
            last = item.level;
        }
        if (item.level < begin) return;
        if (Math.abs(item.level - last) > 1) return;
        // equal
        if (item.level === last) {
            html += format('<li><a href="#%s">%s</a></li>', item.id, item.text);
        }
        // indent
        if (item.level > last) {
            html = html.slice(0, -5);
            html += format('<ul><li><a href="#%s">%s</a></li>', item.id, item.text);
        }
        // unident
        if (item.level < last) {
            html += format(
                '</ul></li><li><a href="#%s">%s</a></li>', item.id, item.text
            );
        }
        last = item.level;
    });
    _(last - begin + 1).times(function () {
        html += '</ul>';
    });
    return html;
}