import { h, r as registerInstance, e as createEvent, f as Host } from './index-1f24ee20.js';
import { R as ReplaySubject, f as from, t as takeUntil } from './index-6faee293.js';
import './index-c1978730.js';
import { m as myContainer, T as TYPES } from './inversify.config-74d84e0a.js';
import { O as Overlay } from './Overlay-bfc675f2.js';

const OecOecIcon = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 35 35" }, attrs),
  h("path", { d: "M22.91,6.38c0,2.93-2.37,5.3-5.3,5.3s-5.3-2.37-5.3-5.3S14.69,1.09,17.62,1.09s5.3,2.37,5.3,5.3Z", fill: "#54565a" }),
  h("path", { d: "M11.67,17.68c0,2.92-2.37,5.3-5.3,5.3s-5.3-2.37-5.3-5.3,2.37-5.3,5.3-5.3,5.3,2.37,5.3,5.3Z", fill: "#003b71" }),
  h("path", { d: "M34.16,17.69c0,2.92-2.37,5.29-5.3,5.29s-5.3-2.37-5.3-5.29,2.37-5.3,5.3-5.3,5.3,2.37,5.3,5.3Z", fill: "#54565a" }),
  h("path", { d: "M22.91,28.88c0,2.93-2.37,5.3-5.3,5.3s-5.3-2.37-5.3-5.3,2.37-5.3,5.3-5.3,5.3,2.37,5.3,5.3Z", fill: "#54565a" })));

const sty1 = { isolation: "isolate" };
const sty2 = { mixBlendMode: "darken" };
const sty3 = { mixBlendMode: "multiply", opacity: 0.57 };
const OecOpsIcon = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 38 38" }, attrs),
  h("defs", null,
    h("linearGradient", { id: "Degradado_sin_nombre_70", x1: "19", y1: "-15455.33", x2: "19", y2: "-15419", gradientTransform: "translate(0 -15418) scale(1 -1)", gradientUnits: "userSpaceOnUse" },
      h("stop", { offset: "0", "stop-color": "#fff" }),
      h("stop", { offset: "0", "stop-color": "#fff" }),
      h("stop", { offset: "0", "stop-color": "#dbdce0" }),
      h("stop", { offset: "1", "stop-color": "#747478" }))),
  h("g", Object.assign({}, sty1),
    h("g", { id: "Capa_1" },
      h("circle", { id: "grey-circle", cx: "19", cy: "19", r: "18", width: "38", height: "38", fill: "#8993A9" }),
      h("image", { id: "silver-coin", x: "1", y: "1", width: "35", height: "35", transform: "translate(1 1)", xlinkHref: "data:image/png;base64,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" }),
      h("path", { id: "outer-grad-circle", fill: "url(#Degradado_sin_nombre_70)", d: "M19,1.41c4.7,0,9.12,1.85,12.44,5.2,3.32,3.35,5.15,7.81,5.15,12.55s-1.83,9.2-5.15,12.55c-3.32,3.35-7.74,5.2-12.44,5.2s-9.12-1.85-12.44-5.2c-3.32-3.35-5.15-7.81-5.15-12.55S3.24,9.97,6.56,6.61C9.88,3.26,14.3,1.41,19,1.41m0-.41C9.06,1,1,9.13,1,19.16s8.06,18.16,18,18.16,18-8.13,18-18.16S28.94,1,19,1h0Z" }),
      h("g", Object.assign({}, sty2),
        h("path", { id: "inner-blur-circle1", fill: "#005787", d: "M19,3.05c4.27,0,8.29,1.69,11.31,4.77,3.02,3.08,4.69,7.17,4.69,11.52s-1.66,8.44-4.69,11.52c-3.02,3.08-7.04,4.77-11.31,4.77s-8.29-1.69-11.31-4.77c-3.02-3.08-4.69-7.17-4.69-11.52s1.66-8.44,4.69-11.52c3.02-3.08,7.04-4.77,11.31-4.77m0-.41C9.94,2.64,2.6,10.11,2.6,19.34s7.34,16.7,16.4,16.7,16.4-7.48,16.4-16.7S28.06,2.64,19,2.64h0Z" }),
        h("g", null,
          h("path", { id: "inner-blur-circle2", fill: "#14314f", opacity: "0.3", d: "M19,3.05c4.27,0,8.29,1.69,11.31,4.77,3.02,3.08,4.69,7.17,4.69,11.52s-1.66,8.44-4.69,11.52c-3.02,3.08-7.04,4.77-11.31,4.77s-8.29-1.69-11.31-4.77c-3.02-3.08-4.69-7.17-4.69-11.52s1.66-8.44,4.69-11.52c3.02-3.08,7.04-4.77,11.31-4.77m0-.41C9.94,2.64,2.6,10.11,2.6,19.34s7.34,16.7,16.4,16.7,16.4-7.48,16.4-16.7S28.06,2.64,19,2.64h0Z" }))),
      h("g", { id: "letters" },
        h("g", null,
          h("path", { fill: "#005787", d: "M8.56,15.66h4.42c.29,0,.55,.05,.79,.14,.24,.09,.41,.22,.52,.38,.18,.25,.16,.69-.07,1.31l-1.02,2.73c-.23,.62-.54,1.06-.91,1.31-.22,.16-.49,.28-.8,.38-.31,.09-.61,.14-.89,.14H6.18c-.29,0-.55-.05-.79-.14-.24-.09-.41-.22-.51-.38-.19-.25-.16-.69,.06-1.31l1.02-2.73c.24-.62,.54-1.06,.91-1.31,.22-.16,.49-.28,.8-.38,.31-.09,.6-.14,.89-.14m-.61,4.14c-.13,.4-.02,.75,.48,.75h1.03c.71,.02,.92-.44,1.04-.75l.77-2.08c.16-.44,.21-.8-.49-.8h-1.15c-.68,0-.9,.67-1.68,2.88" }),
          h("path", { fill: "#005787", d: "M18.17,19.76l-.5,1.33c-.14,.42-.15,.74-.03,.95h-3.48c.28-.22,.5-.54,.67-.95l1.67-4.49c.14-.41,.15-.72,.04-.94h6.19c1.47,0,1.78,.42,1.53,1.24l-.58,1.5c-.37,.83-.82,1.36-2.48,1.36h-3.04Zm.4-1.06h1.46c.7,0,.73-.1,.97-.6l.17-.44c.32-.73-.05-.73-.33-.73h-1.61l-.66,1.78Z" }),
          h("path", { fill: "#005787", d: "M33.51,15.66l-.6,1.41c-.18-.16-1.07-.15-.99-.15h-2.51c-.13,0-.41,0-.45,0-.2,0-.35,.08-.43,.25-.06,.14-.15,.38-.16,.41-.06,.16,.14,.2,.26,.2,.02,0,2.29,0,2.75,0,0,0,1.45,0,1,1.27l-.65,1.68c-.55,1.39-.86,1.31-1.97,1.31h-5.85l.61-1.58c.18,.1,.45,.19,.63,.22,.18,.03,.52,.04,1.02,.04h2.2c.35,0,.4,0,.48-.02,.13-.03,.18-.14,.2-.18,.02-.06,.17-.43,.2-.5,.09-.24-.15-.24-.29-.24h-2.14c-.54,0-.46,0-.76,0-.59,0-1.23-.01-.87-1.04l.7-1.76c.18-.44,.48-1.32,2.49-1.32h5.14Z" })),
        h("g", Object.assign({}, sty3),
          h("path", { fill: "#1a2848", d: "M8.56,15.66h4.42c.29,0,.55,.05,.79,.14,.24,.09,.41,.22,.52,.38,.18,.25,.16,.69-.07,1.31l-1.02,2.73c-.23,.62-.54,1.06-.91,1.31-.22,.16-.49,.28-.8,.38-.31,.09-.61,.14-.89,.14H6.18c-.29,0-.55-.05-.79-.14-.24-.09-.41-.22-.51-.38-.19-.25-.16-.69,.06-1.31l1.02-2.73c.24-.62,.54-1.06,.91-1.31,.22-.16,.49-.28,.8-.38,.31-.09,.6-.14,.89-.14m-.61,4.14c-.13,.4-.02,.75,.48,.75h1.03c.71,.02,.92-.44,1.04-.75l.77-2.08c.16-.44,.21-.8-.49-.8h-1.15c-.68,0-.9,.67-1.68,2.88" }),
          h("path", { fill: "#1a2848", d: "M18.17,19.76l-.5,1.33c-.14,.42-.15,.74-.03,.95h-3.48c.28-.22,.5-.54,.67-.95l1.67-4.49c.14-.41,.15-.72,.04-.94h6.19c1.47,0,1.78,.42,1.53,1.24l-.58,1.5c-.37,.83-.82,1.36-2.48,1.36h-3.04Zm.4-1.06h1.46c.7,0,.73-.1,.97-.6l.17-.44c.32-.73-.05-.73-.33-.73h-1.61l-.66,1.78Z" }),
          h("path", { fill: "#1a2848", d: "M33.51,15.66l-.6,1.41c-.18-.16-1.07-.15-.99-.15h-2.51c-.13,0-.41,0-.45,0-.2,0-.35,.08-.43,.25-.06,.14-.15,.38-.16,.41-.06,.16,.14,.2,.26,.2,.02,0,2.29,0,2.75,0,0,0,1.45,0,1,1.27l-.65,1.68c-.55,1.39-.86,1.31-1.97,1.31h-5.85l.61-1.58c.18,.1,.45,.19,.63,.22,.18,.03,.52,.04,1.02,.04h2.2c.35,0,.4,0,.48-.02,.13-.03,.18-.14,.2-.18,.02-.06,.17-.43,.2-.5,.09-.24-.15-.24-.29-.24h-2.14c-.54,0-.46,0-.76,0-.59,0-1.23-.01-.87-1.04l.7-1.76c.18-.44,.48-1.32,2.49-1.32h5.14Z" })))))));

const oecAppLauncherCss = ":host{display:block;font-family:var(--app-font-family);color:#000}:host *{box-sizing:border-box}:host .hidden{display:none}:host .launcher-component{max-width:430px;min-width:min-content;box-shadow:1px 1px 4px rgba(119, 136, 153, 0.4);background-color:#fff;border-radius:3px}:host .launcher-component.one-column{width:209px}:host .launcher-component .headWrapper{display:flex;width:100%;border-bottom:1px solid #cecece;padding-top:3px}:host .launcher-component .headWrapper header{text-align:center;width:50%;min-width:min-content;padding:3px;vertical-align:middle}:host .launcher-component .headWrapper header.one-column{width:100%}:host .launcher-component .appsWrapper{display:flex;font-size:12px;padding:6px 0;height:370px;overflow-y:auto;overflow-x:hidden}:host .launcher-component .appsWrapper::-webkit-scrollbar{width:6px;height:6px}:host .launcher-component .appsWrapper::-webkit-scrollbar-track{background:#f3f3f3}:host .launcher-component .appsWrapper::-webkit-scrollbar-thumb{background:#e1e1e1;border-radius:6px}:host .launcher-component .appsWrapper:hover::-webkit-scrollbar-thumb{background:#cecece}:host .launcher-component .appsWrapper .products-column{width:209px;min-width:min-content}:host .launcher-component .view-all{width:100%;border-top:1px solid #cecece;font-size:13.5px;padding:6px 0;color:#00507d;text-align:center}:host .launcher-component .view-all:hover{background-color:#e1e1e1;cursor:pointer}";

function sortOrder(a, b) {
  if (a.order > b.order) {
    return 1;
  }
  if (a.order < b.order) {
    return -1;
  }
  return 0;
}
const OecAppLauncher = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.appCardClicked = createEvent(this, "appCardClicked", 7);
    // keep there for story
    this.enabledApps = ["OPSTrax", "DeliveryTrax", "ValuTrax", "CollisionLink"];
    this.destroy$ = new ReplaySubject(1);
    this.viewAllVisible = false;
    this.hasOps = false;
    this.hasOec = false;
    this.oneColumn = false;
    this.iconStyleOps = { width: "35px", height: "35px" };
    this.iconStyleOec = { width: "33px", height: "33px" };
    this.onAppCardClicked = (url) => () => {
      this.appCardClicked.emit(url);
    };
    this.handleViewAll = async (ev) => {
      const ref = await Overlay.attach(ev.target, {
        template: ({ hide }) => (h("div", null, h("button", { onClick: hide }, "close"))),
        panelClass: "bento-viewall-dialog-panel",
        backdropClass: "dark-backdrop",
        hasBackdrop: true,
        hasArrow: false
      });
      const item = await ref.getItemElement();
      const onclose = () => {
        item.removeEventListener("closed", onclose);
        ref.dispose();
      };
      item.addEventListener("closed", onclose);
      item.show();
    };
    this.appService = myContainer.get(TYPES.IAppService);
  }
  connectedCallback() {
    from(this.appService.getAppListing())
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
      this.allowedApps$ = data;
      //
      this.hasOps = this.allowedApps$.filter(p => p.isOpsProduct && this.enabledApps.includes(p.name)).length > 0;
      this.hasOec = this.allowedApps$.filter(p => !p.isOpsProduct && this.enabledApps.includes(p.name)).length > 0;
      this.oneColumn = !(this.hasOps && this.hasOec);
      this.viewAllVisible = this.enabledApps.length !== this.allowedApps$.length;
    });
  }
  appTemplateRender(app) {
    return this.enabledApps.includes(app.name) ? h("oec-app-card", { onClick: this.onAppCardClicked(app.landingUrl), appDefinition: app }) : "";
  }
  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  render() {
    const getSortedItems = (columnFilter) => [
      ...this.allowedApps$
        .filter(columnFilter)
        .filter(x => this.enabledApps.includes(x.name))
        .sort(sortOrder),
      ...this.allowedApps$
        .filter(columnFilter)
        .filter(x => !this.enabledApps.includes(x.name))
        .sort(sortOrder)
    ];
    return (h(Host, null, h("div", { class: this.oneColumn ? "launcher-component one-column" : "launcher-component" }, h("div", { class: "headWrapper" }, this.hasOps ? (h("header", { class: this.oneColumn ? "one-column" : "" }, h(OecOpsIcon, { style: this.iconStyleOps }))) : (""), this.hasOec ? (h("header", { class: this.oneColumn ? "one-column" : "" }, h(OecOecIcon, { style: this.iconStyleOec }))) : ("")), h("div", { class: "appsWrapper" }, h("div", { class: this.hasOps ? "products-column" : "hidden" }, getSortedItems(x => x.isOpsProduct).map(this.appTemplateRender.bind(this))), h("div", { class: this.hasOec ? "products-column" : "hidden" }, getSortedItems(x => !x.isOpsProduct).map(this.appTemplateRender.bind(this)))), this.viewAllVisible ? (h("div", { class: "view-all", onClick: this.handleViewAll }, "View All")) : (""))));
  }
};
OecAppLauncher.style = oecAppLauncherCss;

export { OecAppLauncher as oec_app_launcher };
