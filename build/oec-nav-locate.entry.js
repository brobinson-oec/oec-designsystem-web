import { r as registerInstance, e as createEvent, h, f as Host } from './index-1f24ee20.js';
import { R as ReplaySubject } from './index-73b9da7f.js';
import { S as SearchIcon } from './search-icon-c3a9e249.js';

const oecNavLocateCss = ":host{display:flex;flex:1;padding-right:0}:host .locate-wrapper{display:flex;flex-direction:row}:host .icon-wrapper{display:flex;align-items:center;justify-content:center;width:40px;padding:0 7px;border:1px solid rgba(119, 136, 153, 0.5);border-radius:3px 0 0 3px;border-right:none;background-color:transparent}:host .icon-wrapper.right{border:none;padding:0 5px 0 0;width:35px;justify-content:end;cursor:pointer}:host .base-input{font-family:var(--app-font-family);font-size:12px;line-height:2.2;padding:2px 7px;border:1px solid rgba(119, 136, 153, 0.5);border-radius:3px}:host .locate-box{width:380px;border-radius:0 3px 3px 0}:host .oem-select{margin-left:5px}";

const OecNavLocate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.locateClicked = createEvent(this, "locateClicked", 7);
    this.destroy$ = new ReplaySubject();
  }
  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  handleChange(evt) {
    this.locateParts = this.cleanLocateInput(evt.target.value);
  }
  handleKeyDown(evt) {
    if (evt.key === "Enter") {
      this.handleLocate();
    }
  }
  handleLocateClick(_evt) {
    this.handleLocate();
  }
  handleLocate() {
    var _a;
    this.locateParts =
      (_a = this.locateParts) !== null && _a !== void 0 ? _a : this.cleanLocateInput(this.locateInput.value);
    if (this.locateParts.length) {
      const locateCatalogId = parseInt(this.locateCatalog.value);
      const url = `?src=1&p=${this.locateParts}&cid=${locateCatalogId}`;
      this.locateClicked.emit(url);
    }
  }
  cleanLocateInput(value) {
    return value
      .replace("<", "")
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x !== "");
  }
  render() {
    var _a;
    const styles = { width: "26px", height: "26px" };
    return (h(Host, null, h("div", { class: "locate-wrapper" }, h("div", { class: "icon-wrapper" }, h(SearchIcon, { focusable: "false", style: styles })), h("input", { ref: elt => (this.locateInput = elt), class: "base-input locate-box", type: "text", id: "txtLocateParts", placeholder: "Search to locate part(s), separate multiples with a comma (,)",
      // eslint-disable-next-line react/jsx-no-bind
      onInput: (evt) => this.handleChange(evt) }), ((_a = this.locateOems) === null || _a === void 0 ? void 0 : _a.length) > 1 ? (h("select", { class: "base-input oem-select", ref: elt => (this.locateCatalog = elt) }, this.locateOems.map(oem => (h("option", { value: oem.oemId }, oem.oemName))))) : (""), h("button", { class: "icon-wrapper right",
      // eslint-disable-next-line react/jsx-no-bind
      onClick: (evt) => this.handleLocateClick(evt) }, h(SearchIcon, { style: styles })))));
  }
};
OecNavLocate.style = oecNavLocateCss;

export { OecNavLocate as oec_nav_locate };
