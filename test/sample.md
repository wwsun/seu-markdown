# 基本

- order: 1

简单的图标展示。

---

````jsx

import Icon from 'next/lib/icon';
import 'next/lib/icon/index.scss';

ReactDOM.render(
    <div className="icon-list">
        <div className="cell"><Icon type="atm" /><span>atm</span></div>
        <div className="cell"><Icon type="clock" /><span>clock</span></div>
        <div className="cell"><Icon type="attachment" /><span>attachment</span></div>
        <div className="cell"><Icon type="3column" /><span>3column</span></div>
        <div className="cell"><Icon type="4column" /><span>4column</span></div>
        <div className="cell"><Icon type="discount" /><span>discount</span></div>
        <div className="cell"><Icon type="service" /><span>service</span></div>
        <div className="cell"><Icon type="print" /><span>print</span></div>
        <div className="cell"><Icon type="box" /><span>box</span></div>
        <div className="cell"><Icon type="process" /><span>process</span></div>
        <div className="cell"><Icon type="bags" /><span>bags</span></div>
        <div className="cell"><Icon type="electronics" /><span>electronics</span></div>
        <div className="cell"><Icon type="gifts" /><span>gifts</span></div>
        <div className="cell"><Icon type="lights" /><span>lights</span></div>
        <div className="cell"><Icon type="auto" /><span>auto</span></div>
        <div className="cell"><Icon type="browse" /><span>browse</span></div>
        <div className="cell"><Icon type="atm-away" /><span>atm-away</span></div>
        <div className="cell"><Icon type="scanning" /><span>scanning</span></div>
        <div className="cell"><Icon type="compare" /><span>compare</span></div>
        <div className="cell"><Icon type="filter" /><span>filter</span></div>
        <div className="cell"><Icon type="pin" /><span>pin</span></div>
        <div className="cell"><Icon type="history" /><span>history</span></div>
        <div className="cell"><Icon type="similar-product" /><span>similar-product</span></div>
        <div className="cell"><Icon type="link" /><span>link</span></div>
        <div className="cell"><Icon type="cut" /><span>cut</span></div>
        <div className="cell"><Icon type="table" /><span>table</span></div>
        <div className="cell"><Icon type="nav-list" /><span>nav-list</span></div>
        <div className="cell"><Icon type="image-text" /><span>image-text</span></div>
        <div className="cell"><Icon type="text" /><span>text</span></div>
        <div className="cell"><Icon type="move" /><span>move</span></div>
        <div className="cell"><Icon type="subtract" /><span>subtract</span></div>
        <div className="cell"><Icon type="dollar" /><span>dollar</span></div>
        <div className="cell"><Icon type="office" /><span>office</span></div>
        <div className="cell"><Icon type="operation" /><span>operation</span></div>
        <div className="cell"><Icon type="download" /><span>download</span></div>
        <div className="cell"><Icon type="map" /><span>map</span></div>
        <div className="cell"><Icon type="bad" /><span>bad</span></div>
        <div className="cell"><Icon type="good" /><span>good</span></div>
        <div className="cell"><Icon type="skip" /><span>skip</span></div>
        <div className="cell"><Icon type="play" /><span>play</span></div>
        <div className="cell"><Icon type="stop" /><span>stop</span></div>
        <div className="cell"><Icon type="compass" /><span>compass</span></div>
        <div className="cell"><Icon type="security" /><span>security</span></div>
        <div className="cell"><Icon type="share" /><span>share</span></div>
        <div className="cell"><Icon type="store" /><span>store</span></div>
        <div className="cell"><Icon type="phone" /><span>phone</span></div>
        <div className="cell"><Icon type="ellipsis" /><span>ellipsis</span></div>
        <div className="cell"><Icon type="email-filling" /><span>email-filling</span></div>
        <div className="cell"><Icon type="favorites-filling" /><span>favorites-filling</span></div>
        <div className="cell"><Icon type="account-filling" /><span>account-filling</span></div>
        <div className="cell"><Icon type="credit-level" /><span>credit-level</span></div>
        <div className="cell"><Icon type="credit-level-filling" /><span>credit-level-filling</span></div>
        <div className="cell"><Icon type="mobile-phone" /><span>mobile-phone</span></div>
        <div className="cell"><Icon type="smile" /><span>smile</span></div>
        <div className="cell"><Icon type="personal-center" /><span>personal-center</span></div>
        <div className="cell"><Icon type="arrow-up-filling" /><span>arrow-up-filling</span></div>
        <div className="cell"><Icon type="arrow-right" /><span>arrow-right</span></div>
    </div>
, mountNode);

````

<style>
.icon-list .cell{
    display: inline-block;
    width: 160px;
    padding: 8px;
}

.icon-list .cell i{
    margin-right: 8px;
}
</style>