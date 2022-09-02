import { r as registerInstance, h, f as Host } from './index-b8de2da8.js';
import './oec-overlay-arrow-b9048a2b.js';
import './oec-overlay-content-76a01f16.js';

const oecOverlayPaneCss = ".sc-oec-overlay-pane-h{display:none;position:absolute;top:0;left:0;background:var(--oec-overlay-background);color:var(--oec-overlay-color);padding:5px;border-radius:4px;pointer-events:all;z-index:2}.mini-menu-panel.sc-oec-overlay-pane-h{padding:0;border:solid 1px #000;border-radius:0}.mini-tooltip-panel.sc-oec-overlay-pane-h{font-weight:normal;font-family:Arial, Helvetica, sans-serif;font-size:14px}";

const OecOverlayPane = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hide = async () => { };
  }
  handleClick(ev) {
    // prevents this getting to oec-overlay-backdrop.
    ev === null || ev === void 0 ? void 0 : ev.stopImmediatePropagation();
  }
  // eslint-disable-next-line no-undef
  async getArrowElement() {
    return this.arrowElement;
  }
  render() {
    return (h(Host, { class: this.overlayConfig.panelClass }, this.overlayConfig.hasArrow && h("oec-overlay-arrow", { ref: (el) => {
        // eslint-disable-next-line no-undef
        this.arrowElement = el;
      }, overlayConfig: this.overlayConfig }), h("oec-overlay-content", { overlayConfig: this.overlayConfig, hide: this.hide })));
  }
};
OecOverlayPane.style = oecOverlayPaneCss;

export { OecOverlayPane as O };
