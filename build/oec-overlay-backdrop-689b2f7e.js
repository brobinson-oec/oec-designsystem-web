import { r as registerInstance, h, f as Host, g as getElement } from './index-13f33587.js';

const oecOverlayBackdropCss = ".sc-oec-overlay-backdrop-h{display:block;position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);z-index:1}";

const OecOverlayBackdrop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hide = async () => { };
    this.isShowing = async () => false;
  }
  async close() {
    await this.hide();
  }
  render() {
    return (h(Host, { class: this.overlayConfig.backdropClass }));
  }
  get host() { return getElement(this); }
};
OecOverlayBackdrop.style = oecOverlayBackdropCss;

export { OecOverlayBackdrop as O };
