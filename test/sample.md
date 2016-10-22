# 基本

- author: jingzhuang.sww
- order: 3

简单的图标展示。

---

````jsx

import Icon from 'next/lib/icon';
import 'next/lib/icon/index.scss';

ReactDOM.render(
    <div className="icon-list">
        <div className="cell"><Icon type="atm" /><span>atm</span></div>
    </div>
, mountNode);

````

````css
.icon-list .cell{
    display: inline-block;
    width: 160px;
    padding: 8px;
}

.icon-list .cell i{
    margin-right: 8px;
}
````
