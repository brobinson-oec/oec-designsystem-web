import { r as registerInstance, h, f as Host } from './index-1f24ee20.js';
import { R as ReplaySubject, S as Subject, t as takeUntil, s as switchMap, o as of, b as distinctUntilChanged } from './index-73b9da7f.js';
import { S as SearchIcon } from './search-icon-c3a9e249.js';

const oecAppViewAllCss = ":host{display:block;font-family:var(--app-font-family);color:#000}:host a:any-link.prod-card{display:flex;flex-direction:row;align-items:center;padding:3px 3px 3px 10px;border-radius:3px;text-decoration:none}:host a:any-link.prod-card:hover{background-color:#e1e1e1;cursor:pointer}:host a:any-link.prod-card .prod-name{display:flex;flex-direction:column;color:#00507d;font-size:14px;line-height:17px;font-weight:600}:host a:any-link.prod-card .prod-name .prod-desc{color:initial;font-size:12px;line-height:17px;font-weight:400;white-space:nowrap}:host .app-launcher-modal-container{max-width:1140px;width:1140px;background-color:#fff;transition:all 0.3s cubic-bezier(0, 0, 0.3, 1)}:host .app-launcher-modal-container .app-launcher-modal-header{border-bottom:1px solid #ddd;padding:0.6em 1.5em}:host .app-launcher-modal-container .app-launcher-modal-header .row{display:flex;justify-content:space-between;align-items:center}:host .app-launcher-modal-container .app-launcher-modal-header .row .col{flex:0 0 33%}:host .app-launcher-modal-container .app-launcher-modal-body{padding:0.6em 1.5em 1.6em 1.5em}:host .col.search-content{text-align:center}:host .col.search-content .input-wrapper{position:relative}:host .col.search-content .input-wrapper .icon{position:absolute;top:5px;left:5px}:host .col.search-content .input-wrapper .icon svg{width:20px;fill:#929292}:host .col.search-content .input-wrapper input{width:100%;border:1px solid #ddd;padding:7px 28px;border-radius:4px;font-size:0.75em;color:#000;transition:all 0.3s cubic-bezier(0, 0, 0.3, 1)}:host .col.search-content .input-wrapper input:focus-visible{outline:none;border-color:#03a9f4;box-shadow:0 3px 5px #00000029;transition:all 0.3s cubic-bezier(0, 0, 0.3, 1)}:host .title-box{display:flex;align-items:baseline;margin-top:1em;margin-bottom:1em}:host .title-box p{margin:0;margin-right:10px;font-size:0.9em}:host .title-box p:after{content:\"\";display:block;width:54px;height:3px;margin-top:6px;background-color:#00507d}:host .title-box .results-label{font-size:0.8em;color:#747474;margin:0}:host .title-content h4{font-size:0.85em;margin:0;font-weight:normal;color:#9f9f9f}:host .grid-container{display:flex;flex-wrap:wrap;padding:1em 1em}:host .grid-container .grid-child{flex-basis:25%}:host .scroll{height:235px;overflow:auto;transition:all 0.3s cubic-bezier(0, 0, 0.3, 1);background:#f7f7f7;border-radius:4px;padding:1em 1em}:host .scroll::-webkit-scrollbar{width:0.4em}:host .scroll::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0, 0, 0, 0.3)}:host .scroll::-webkit-scrollbar-thumb{background-color:#b5c3ca;outline:none}:host .selected-app-container{display:flex;justify-content:space-between;align-items:center;padding:1.6em 3em;position:relative}:host .selected-app-container .description-wrapper{position:relative;z-index:99}:host .selected-app-container .description-wrapper .description{display:flex;align-items:flex-start;flex-direction:column}:host .selected-app-container .description-wrapper .description .logo-img{width:auto;height:60px;max-height:60px}:host .selected-app-container .description-wrapper .description p{font-size:0.9em;font-weight:bold;margin:0;margin-left:4px}:host .selected-app-container .detail-wrapper{position:relative;z-index:99}:host .selected-app-container .detail-wrapper a{background:#00507d;color:white;border-radius:4px;padding:3px 35px;text-decoration:none;border:none;margin-right:2em;transition:all 0.3s cubic-bezier(0, 0, 0.3, 1)}:host .selected-app-container .detail-wrapper a:hover{background:#002f4a}:host .selected-app-container .bg-image{width:103%;opacity:0.15}:host .selected-app-container .bg-image img{max-width:100%}:host .selected-app-container .bg-image.z-9{position:absolute;z-index:9;bottom:-4px;right:-27px}:host .no-orders-found-container{display:flex;flex-direction:column;align-items:center}:host .no-orders-found-container img{mix-blend-mode:multiply;width:8em}:host .no-orders-found-container h3{font-size:1em;color:#6e6d6d;margin:0.5em 0 1em 0}:host .no-orders-found-container .results-description{font-size:0.8em;margin:0}";

const OecAppViewAll = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.destroy$ = new ReplaySubject(1);
    this.unsubscribedApps$ = new Subject();
    this.key$ = new Subject();
    this.rowApp = [];
    this.unsubscribedAppsLength = 0;
    this.itemsByRow = 4;
  }
  watchPropertyUnsubscribedApps(newValue) {
    this.unsubscribedApps$.next(newValue);
  }
  getAppSelectionChanged(event) {
    this.selectedUnsubscribedApp = this.unsubscribedApps[event.detail - 1];
  }
  componentWillLoad() {
    this.watchPropertyUnsubscribedApps(this.unsubscribedApps);
  }
  connectedCallback() {
    this.unsubscribedApps$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.setShowedApps(this.unsubscribedApps);
    });
    this.key$
      .pipe(switchMap(() => { var _a; return of((((_a = this.searchInput) === null || _a === void 0 ? void 0 : _a.value) || "").trim()); }), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(() => {
      const toDisplay = this.unsubscribedApps.filter(x => x.name.toLocaleLowerCase().indexOf(this.searchInput.value.toLocaleLowerCase()) > -1);
      this.setShowedApps(toDisplay);
    });
  }
  setShowedApps(toDisplay) {
    this.rowApp = [];
    let apps = [];
    this.unsubscribedAppsLength = toDisplay.length;
    toDisplay.forEach((app, index) => {
      apps.push(app);
      if (apps.length === this.itemsByRow) {
        this.rowApp.push({ apps });
        apps = [];
      }
      else {
        if (index === toDisplay.length - 1) {
          this.rowApp.push({ apps });
        }
      }
    });
  }
  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  handleKeyDown(ev) {
    this.key$.next(ev.key);
  }
  rowAppTemplateRender(row) {
    return (h("div", { class: "grid-container" }, row.apps.map(x => this.rowUnsubscribedAppTemplateRender(x))));
  }
  rowUnsubscribedAppTemplateRender(app) {
    return (h("div", { class: "grid-child" }, h("oec-app-card", { appDefinition: app })));
  }
  render() {
    var _a, _b;
    return (h(Host, null, h("div", { class: "app-launcher-modal-container" }, h("div", { class: "app-launcher-modal-header" }, h("div", { class: "row" }, h("div", { class: "col title-content" }, h("h4", null, "App Launcher")), h("div", { class: "col search-content" }, h("div", { class: "input-wrapper" }, h("i", { class: "icon" }, h(SearchIcon, null)), h("input", { placeholder: "Search all apps ...", class: "txtSearch", ref: el => (this.searchInput = el) }))), h("div", { class: "col" }))), h("div", { class: "app-launcher-modal-body" }, h("div", { class: "title-box" }, h("p", null, "Additional Apps"), ((_b = (_a = this.searchInput) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.length) > 0 ?
      (h("div", { class: "results-label" }, " Items found: ", this.unsubscribedAppsLength, " "))
      :
        ('')), h("div", { class: "scroll" }, this.rowApp.length > 0 ?
      (this.rowApp.map(this.rowAppTemplateRender.bind(this))) :
      (h("div", { class: "no-orders-found-container" }, h("img", { src: "https://assets.opstrax.com/img/shared/empty_result.jpg" }), h("h3", { class: "resultsTitle" }, "No products found!"), h("div", { class: "results-description" }, "There are no results matching your search. Try changing your filter criteria.")))), h("div", null, this.selectedUnsubscribedApp ?
      (h("div", { class: "selected-app-container" }, h("div", { class: "col description-wrapper" }, h("div", { class: "description" }, h("img", { src: this.selectedUnsubscribedApp.imageLogoUrl, class: "logo-img" }), h("div", null, h("p", null, this.selectedUnsubscribedApp.description)))), h("div", { class: "col detail-wrapper" }, h("a", { class: "btn-landing", href: this.selectedUnsubscribedApp.landingUrl }, "Details")), h("div", { class: "bg-image z-9" }, h("img", { src: "../../assets/app-launcher-bg.jpg" }))))
      :
        (''))))));
  }
  static get watchers() { return {
    "unsubscribedApps": ["watchPropertyUnsubscribedApps"]
  }; }
};
OecAppViewAll.style = oecAppViewAllCss;

export { OecAppViewAll as oec_app_view_all };
