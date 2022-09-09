import { r as registerInstance, h, f as Host } from './index-1f24ee20.js';
import { S as SearchIcon } from './search-icon-c3a9e249.js';

const oecNavLocateCss = ":host{display:flex;flex:1;padding-right:0}:host .locate-wrapper{display:flex;flex-direction:row}:host .icon-wrapper{display:flex;align-items:center;justify-content:center;width:40px;padding:0 7px;border:1px solid rgba(119, 136, 153, 0.5);border-radius:3px 0 0 3px;border-right:none}:host .icon-wrapper.initial{border:none;padding:0 5px 0 0;width:35px;justify-content:end}:host .base-input{font-family:var(--app-font-family);font-size:12px;line-height:2.2;padding:2px 7px;border:1px solid rgba(119, 136, 153, 0.5);border-radius:3px}:host .locate-box{width:380px;border-radius:0 3px 3px 0}:host .oem-select{margin-left:5px}";

const OecNavLocate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const styles = { width: "26px", height: "26px" };
    return (h(Host, null, h("div", { slot: "icon", class: "locate-wrapper" }, h("div", { class: "icon-wrapper" }, h(SearchIcon, { focusable: "false", style: styles })), h("input", { class: "base-input locate-box", type: "text", placeholder: "Search to locate part(s), separate multiples with a comma (,)" }), h("select", { class: "base-input oem-select" }, h("option", { value: "3" }, "GM"), h("option", { value: "4" }, "Ford"), h("option", { value: "1" }, "Chrysler")), h("div", { class: "icon-wrapper initial" }, h(SearchIcon, { focusable: "false", style: styles })))));
  }
};
OecNavLocate.style = oecNavLocateCss;

export { OecNavLocate as oec_nav_locate };
