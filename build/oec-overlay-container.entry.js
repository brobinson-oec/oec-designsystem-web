import { r as registerInstance, h, f as Host, g as getElement } from './index-1f24ee20.js';
import { S as Subject, l as firstValueFrom } from './index-7ddd6289.js';
import './oec-overlay-item-36b3f23c.js';
import './oec-overlay-backdrop-6a594359.js';
import './oec-overlay-pane-44f37420.js';
import './oec-overlay-arrow-042af49b.js';
import './oec-overlay-content-552479e3.js';

class OverlayRef {
  constructor(
  // eslint-disable-next-line no-undef
  _host, _overlayConfig) {
    this._host = _host;
    this._overlayConfig = _overlayConfig;
    this._destroyStarted = new Subject();
  }
  // eslint-disable-next-line no-undef
  async getItemElement() {
    return Array.from(this._host.querySelectorAll('oec-overlay-item')).filter(x => x.overlayConfig === this._overlayConfig)[0];
  }
  getConfig() {
    return this._overlayConfig;
  }
  destroyStarted() {
    return this._destroyStarted;
  }
  dispose() {
    this._destroyStarted.next();
    this._destroyStarted.complete();
    this._host.removeOverlay(this);
  }
}

const oecOverlayContainerCss = ".sc-oec-overlay-container-h{--oec-overlay-background:#222;--oec-overlay-color:#FFF;position:fixed;z-index:1000;pointer-events:none;top:0;left:0;height:100%;width:100%}.sc-oec-overlay-container-h:empty{display:none}";

const OecOverlayContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.render$ = new Subject();
    this.overlayRefs = [];
    this.hasModifierKey = (event) => {
      return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
    };
  }
  async addOverlay(overlayConfig) {
    const ref = new OverlayRef(this.host, overlayConfig);
    // Ensure all child dom elements have been generated before returning from addOverlay.
    await this.waitForNextRenderAfter(() => {
      this.overlayRefs = [...this.overlayRefs, ref];
    });
    return ref;
  }
  async removeOverlay(ref) {
    await this.waitForNextRenderAfter(() => {
      this.overlayRefs = [...this.overlayRefs.filter(x => x !== ref)];
    });
  }
  async waitForNextRenderAfter(causeARenderAction) {
    const p1 = firstValueFrom(this.render$);
    causeARenderAction();
    return p1;
  }
  componentDidRender() {
    this.render$.next();
  }
  async closeWithEscapeKey(event) {
    const items = Array.from(this.host.querySelectorAll('oec-overlay-item')).reverse();
    for (const item of items) {
      if ((await item.isShowing()) && event.key === 'Escape' && !item.overlayConfig.disableClose && !this.hasModifierKey(event)) {
        event.stopImmediatePropagation();
        await item.hide();
        break;
      }
    }
  }
  ;
  render() {
    return (h(Host, null, this.overlayRefs.map((x) => h("oec-overlay-item", { overlayConfig: x.getConfig() }))));
  }
  get host() { return getElement(this); }
};
OecOverlayContainer.style = oecOverlayContainerCss;

export { OecOverlayContainer as oec_overlay_container };
