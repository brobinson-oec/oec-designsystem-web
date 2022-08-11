import { r as registerInstance, h, f as Host } from './index-35f2b048.js';

const oecNavMenuActionCss = ":host{--oec-nav-menu-action-padding-left:.5rem;--oec-nav-menu-action-padding-right:.5rem;display:flex;flex:1;justify-content:center;padding-left:var(--oec-nav-menu-action-padding-left);padding-right:var(--oec-nav-menu-action-padding-right);position:relative}:host div.button{display:flex;flex:1;padding:0;margin:0;border:0;align-items:center;justify-content:center;background-color:transparent}:host span.button-focus-overlay{position:absolute;top:0;right:0;left:0;bottom:0;opacity:0;background-color:black;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1) 0.0717249ms, background-color 0s cubic-bezier(0.35, 0, 0.25, 1)}:host .badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform 0.2s ease-in-out;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none;border:2px solid #fff;transform:scale(0.6);width:22px;height:22px;line-height:22px;font-weight:600;font-size:12px;font-family:Roboto, Helvetica Neue, sans-serif}:host .badge-warn{color:#fff;background:#f44336}:host .badge-above{top:-6px}:host .badge-after{right:-4px}:host.clickable div.button,:host.clickable span.button-focus-overlay{cursor:pointer}:host(:hover) span.button-focus-overlay{opacity:0.04}";

const OecNavMenuAction = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isClickable = true;
    this.badgeTotal = 0;
  }
  render() {
    return (h(Host, { class: {
        'clickable': this.isClickable
      } }, this.isClickable && h("span", { class: 'button-focus-overlay' }), h("div", { class: "button" }, h("slot", { name: "icon" })), (this.badgeTotal > 0) && h("span", { "aria-hidden": "true", class: "badge-content badge-warn badge-above badge-after" }, Math.min(Math.max(this.badgeTotal, 0), 99))));
  }
};
OecNavMenuAction.style = oecNavMenuActionCss;

export { OecNavMenuAction as O };
