import { r as registerInstance, e as createEvent, h, f as Host } from './index-1f24ee20.js';

const oecAppCardCss = ":host{display:block;font-family:var(--app-font-family);color:#000}:host a:any-link.prod-card{display:flex;flex-direction:row;align-items:center;padding:3px 3px 3px 10px;border-radius:3px;text-decoration:none}:host a:any-link.prod-card:hover{background-color:#e1e1e1;cursor:pointer}:host .prod-img{width:auto;height:27px;margin-right:0.7em}:host .prod-img img{max-width:100%;max-height:100%}:host .prod-name{display:flex;flex-direction:column;color:#00507d;font-size:14px;line-height:17px;font-weight:600;width:120px;max-width:120px}:host .prod-name .prod-desc{color:initial;font-size:12px;line-height:17px;font-weight:400}:host .unsubscribed-prod{display:flex;align-items:center}:host .unsubscribed-prod a{display:flex;align-items:center;cursor:pointer;background:transparent;padding:7px 10px;border-radius:4px;transition:all 0.3s cubic-bezier(0, 0, 0.3, 1)}:host .unsubscribed-prod a:hover{background:#ebebeb}:host .unsubscribed-prod a .name-label{color:#00507d;font-size:0.9em}:host .unsubscribed-prod a .prod-desc{font-size:0.7em;white-space:nowrap;width:120px;overflow:hidden;text-overflow:ellipsis}";

const OecAppCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.appSelectionChanged = createEvent(this, "appSelectionChanged", 7);
    this.cardClick = () => {
      this.appSelectionChanged.emit(this.appDefinition.order);
    };
  }
  render() {
    return (h(Host, null, this.appDefinition.isUnsubscribed ?
      (h("div", { class: "unsubscribed-prod" }, h("a", { onClick: this.cardClick, class: "prod-card", title: this.appDefinition.name }, h("div", { class: "prod-img" }, h("img", { src: this.appDefinition.imageLogoUrl })), h("div", { class: "prod-name" }, h("div", { class: "name-label" }, this.appDefinition.name), h("div", { class: "prod-desc" }, this.appDefinition.description)))))
      :
        (h("a", { href: this.appDefinition.landingUrl, class: "prod-card", title: this.appDefinition.name }, h("div", { class: "prod-name" }, h("div", null, this.appDefinition.name), h("div", { class: "prod-desc" }, this.appDefinition.description))))));
  }
};
OecAppCard.style = oecAppCardCss;

export { OecAppCard as oec_app_card };
