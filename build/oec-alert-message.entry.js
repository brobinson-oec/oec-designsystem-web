import { r as registerInstance, h, f as Host } from './index-1f24ee20.js';
import { f as formatDistance } from './index-2e45568f.js';

const oecAlertItemsCss = ":host{display:flex;flex:1;flex-flow:column nowrap;font-family:Open Sans, sans-serif}:host .alert{height:266px;overflow:auto}:host .alert-items-wrapper{position:relative}:host .alert-items-wrapper .alert-items{list-style-type:none;padding-inline-start:0px;margin-block-start:0;margin-block-end:0}:host .alert-items-wrapper ul{position:relative}:host .alert-items-wrapper .alert-items>li{position:relative;z-index:0;background-color:#fff;user-select:none;transition-duration:0.4s;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer}:host .alert-items-wrapper .alert-items>li:hover{position:relative;z-index:1;box-shadow:0px 3px 4px 0px rgba(0, 0, 0, 0.15)}:host .alert-items-wrapper .alert-items>li:not(:last-child){border-bottom:1px solid #e2e2e2}:host .alert-row{display:flex;padding:8px 3px;cursor:pointer}:host .alert-row .img-col{margin:0px 10px;padding-top:4px}:host .alert-row .content-col{font-size:0.8em}:host .view-all-wrapper{border-top:1px solid #ddd}:host .view-all-wrapper a{box-shadow:0 0 #0003, 0 0 #00000024, 0 0 #0000001f;border:none;padding:0 15px;line-height:50px;box-sizing:border-box;position:relative;user-select:none;cursor:pointer;outline:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;min-width:64px;overflow:visible;width:100%;color:#00507d;background:#fff;font-size:14px;font-weight:500}:host .view-all-wrapper a:hover{background:rgba(29, 33, 41, 0.08);transition:all 100ms ease-out}:host .dismiss-actions{visibility:hidden;position:absolute;right:10px;bottom:10px}:host .dismiss-actions a{color:#00507d;font-size:1.2em}:host .dismiss-actions a:hover{text-decoration:underline}:host li:hover .dismiss-actions{visibility:visible}";

const OecAlertMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const elapsedTime = formatDistance(new Date(this.alert.createdDate), new Date(), { addSuffix: true });
    return (h(Host, null, (() => {
      switch (this.alert.eventName) {
        case 'New Alert':
          return h("oec-alert-message-new", { alert: this.alert });
        case 'Sent Alert Message':
          return h("oec-alert-message-sent", { alert: this.alert });
        case 'Closed Alert':
          return h("oec-alert-message-closed", { alert: this.alert });
        default:
          return h("oec-alert-message-default", { alert: this.alert });
      }
    })(), h("small", null, elapsedTime), h("div", { class: "dismiss-actions" }, h("small", null, h("a", null, "Dismiss")))));
  }
};
OecAlertMessage.style = oecAlertItemsCss;

export { OecAlertMessage as oec_alert_message };
