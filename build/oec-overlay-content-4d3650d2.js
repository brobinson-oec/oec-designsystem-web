import { r as registerInstance, h, f as Host } from './index-c5f39227.js';

const oecOverlayContentCss = ".sc-oec-overlay-content-h{display:flex;flex:1;min-height:0;z-index:2}";

const OecOverlayContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hide = async () => { };
  }
  render() {
    return (h(Host, null, typeof this.overlayConfig.template === 'function' ? this.overlayConfig.template({ hide: this.hide }) : this.overlayConfig.template || ''));
  }
};
OecOverlayContent.style = oecOverlayContentCss;

export { OecOverlayContent as O };
