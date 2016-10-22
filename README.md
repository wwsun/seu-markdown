# seu-markdown

process markdown file via marked

## Usage

`seu-markdown` used to parse markdown documents with `jsx` and `css` codes,
which used to write react demos. The doucment format like:

```markdown
# this is page title            // 文档标题, 也可以写在元信息中: "- title: xxx"

- category: xxx                 // 分类，元信息分类
- ...                           // 其它的元信息

---                             // 元信息分隔线

xxx ooo                         // 文档正文
```

Install `seu-markdown`:

```bash
tnpm install seu-markdown --save
```

Use it to process your markdown file:

```javascript
const smd = require('seu-markdown');
```

## 1.0 API

### `.parse(rawContent)`

Parse documents to document object.

```json
{
  title,
  meta,
  codes,
}
```

### `.render(mdContent)`

Render markdown string to html string.

## 0.2.x API

### `.parse(content)`

解析 markdown 形式的文档。

### `.parseToc(content)`

tbd

### `.md.render`

tdb

### `.md.iframes`

tbd

