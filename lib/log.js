'use strict';

const util = require('util');
const color = require('colorful').color;

const levels = {
  debug: 1,
  info: 2,
  start: 2,
  end: 2,
  warn: 3,
  error: 4,
};

const log = module.exports = {};

log.quiet = false;

if (process.env.NICO_QUIET) {
  log.quiet = true;
}

log.level = 'info';

log.log = function(level, msg) {
  if (levels[level] >= levels[log.level] && log.quiet === false) {
    if (console[level]) {
      console[level](msg);
    } else {
      console.log(msg);
    }
  }
};

log.debug = function() {
  const category = arguments[0];
  const args = Array.prototype.slice.call(arguments).slice(1);
  const msg = util.format.apply(this, args);

  log.log('debug', getMsg(category, msg, color.blue));
};

log.info = function() {
  const category = arguments[0];
  const args = Array.prototype.slice.call(arguments).slice(1);
  const msg = util.format.apply(this, args);

  log.log('info', getMsg(category, msg, color.cyan));
};

log.warn = function() {
  const category = arguments[0];
  const args = Array.prototype.slice.call(arguments).slice(1);
  const msg = util.format.apply(this, args);

  log.log('warn', getMsg(category, msg, color.yellow));
};

log.error = function() {
  const category = arguments[0];
  const args = Array.prototype.slice.call(arguments).slice(1);
  const msg = util.format.apply(this, args);

  log.log('error', getMsg(category, msg, color.red));
  if (category === 'exit') {
    console.log();
  }
};

log.config = function(options) {
  if (options.verbose) {
    log.level = 'debug';
  }
  if (options.quiet) {
    log.level = 'warn';
  }
  if (!options.color) {
    require('colorful').disabled = true;
  }
};

function getMsg(category, msg, fn) {
  const w = 15;
  const len = Math.max(0, w - category.length);
  const pad = new Array(len + 1).join(' ');
  if (~msg.indexOf('\x1b[')) {
    msg = pad + fn(category) + ': ' + msg;
  } else {
    msg = msg.replace(process.cwd() + '/', '');
    msg = msg.replace(process.cwd() + '\\', '');
    msg = pad + fn(category) + ': ' + msg;
  }
  return msg;
}
