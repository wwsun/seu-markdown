'use strict';

const path = require('path');
const fs = require('fs');
const parser = require('../');

const file = path.join(__dirname, 'sample.md');
const data = fs.readFileSync(file, 'utf8');

const post = parser.parse(data);
post.html = parser.render(post.body);
console.log(post);

// const path = require('path');
// const fs = require('fs');
// const smd = require('../index');

// const file = path.join(__dirname, 'sample.md');
// const data = fs.readFileSync(file, 'utf8');

// const post = smd.parse(data);
// post.toc = smd.parseToc(post.body);
// post.html = smd.md.render(post.body);
// post.iframes = smd.md.iframes(post.body);

// console.log(post);
