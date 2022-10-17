import { r as registerInstance, h, f as Host } from './index-1f24ee20.js';

const oecAlertsCss = ":host{display:flex;flex:1;flex-flow:column nowrap;font-family:Open Sans, sans-serif;overflow-y:hidden}:host .header{background:#fff;display:block;border-bottom:1px solid #ededed}:host .title{font-weight:bold;text-transform:uppercase;font-size:0.9rem;padding:8px 10px 12px 10px;float:left}:host .dismiss-all{font-family:Open Sans, sans-serif;font-size:0.8rem;border:none;background-color:#fff;padding:5px 10px;margin:5px 5px 5px 0;float:right}:host .dismiss-all:hover{background-color:#ededed;border:0px solid #ededed;border-radius:5px;cursor:pointer;transition:all 240ms ease-out}:host .dismiss-all:disabled{border:none;background-color:#fff;cursor:default}:host .empty-body{text-align:center;display:grid;justify-content:center;align-items:center;padding:35px 80px 80px 80px}:host .empty-body p{font-size:0.8em;margin-bottom:1.4em}:host .empty-body .svg-icon-thumb{height:133px;width:132px;margin:auto;fill:#ddd}";

const OecAlertMessageDefault = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", null, h("div", null, h("b", null, this.alert.senderFullName), ". Event: ", this.alert.eventName, ". ", this.alert.roNum ? (h("span", null, "RO ", this.alert.roNum)) : ('')), h("div", { class: "comment" }, this.alert.comment))));
  }
};
OecAlertMessageDefault.style = oecAlertsCss;

export { OecAlertMessageDefault as oec_alert_message_default };
