import { h, r as registerInstance, e as createEvent, f as Host } from './index-6b788f04.js';
import { R as ReplaySubject, S as Subject, p as debounce, q as timer, e as switchMap, o as of, f as filter, d as distinctUntilChanged, t as takeUntil } from './index-7ddd6289.js';
import './index-1afca086.js';

const MyIconMagnifyingGlassSolid = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", fill: "currentColor" }, attrs),
  h("path", { d: "M500.3 443.7 380.6 324c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723 99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9 53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0 15.606-15.64 15.606-41.04.006-56.64zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128-57.42 128-128 128-128-57.4-128-128z" })));

const MyIconXmarkSolid = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", fill: "currentColor" }, attrs),
  h("path", { d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25-6.2 6.25-14.4 9.35-22.6 9.35s-16.38-3.125-22.62-9.375L160 301.3 54.63 406.6C48.38 412.9 40.19 416 32 416s-16.37-3.1-22.625-9.4c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" })));

const oecNavSearchCss = ":host{--oec-nav-search-padding-right:0;display:flex;flex:1}:host svg{width:16px;height:16px}:host .search-box{display:flex;flex-flow:row nowrap;position:absolute;top:50%;left:calc(100% - var(--oec-nav-search-padding-right));transform:translate(-100%, -50%);background:transparent;border-radius:50px;padding:2px;transition:all 0.3s cubic-bezier(0.35, 0, 0.25, 1)}:host .search-box.expanded{background:currentColor}:host input{outline:none;border:none;background:none;width:0;padding:0;color:#fff;font-size:12px;transition:all 0.3s cubic-bezier(0.35, 0, 0.25, 1)}:host input::placeholder{color:#cfcfcf}:host button{display:flex;flex:1;color:currentColor;border:none;border-radius:50px;background:#fff;justify-content:center;align-items:center;text-decoration:none;transition:0.3s}:host input:focus,:host input:not(:placeholder-shown){width:140px;padding:0 6px}:host .search-box:hover>input,:host .search-box.expanded>input{width:140px;padding:0 6px}:host .search-box:hover>button,:host input:focus+button,:host input:not(:placeholder-shown)+button{background:#fff;color:currentColor;transform:rotate(360deg)}";

const NavSearch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.search = createEvent(this, "search", 7);
    this.isMouseOver = false;
    this.isForcedOpen = false; // Mobile devices where hover/mouse over events do not apply.
    this.isFocused = false;
    this.destroy$ = new ReplaySubject(1);
    this.key$ = new Subject();
    this.handleExitSearch = () => {
      this.searchInput.value = '';
      this.isForcedOpen = false;
      this.searchInput.blur();
    };
    this.onMagnifyingGlassSolidClicked = () => {
      this.isForcedOpen = true;
    };
    this.onSearchInputFocused = () => {
      this.isFocused = true;
    };
    this.onSearchInputBlurred = () => {
      this.isFocused = false;
    };
  }
  get isExpanded() {
    var _a;
    return !!((_a = this.searchInput) === null || _a === void 0 ? void 0 : _a.value) || this.isFocused || this.isMouseOver || this.isForcedOpen;
  }
  connectedCallback() {
    this.key$.pipe(debounce((key) => key === 'Enter' ? timer(0) : timer(3000)), switchMap(() => of((this.searchInput.value || '').trim())), filter(x => !!x && x.length > 3), // greater than 3 characters
    distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.search.emit(this.searchInput.value);
    });
  }
  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  handleMouseOver() {
    this.isMouseOver = true;
  }
  handleMouseOut() {
    this.isMouseOver = false;
  }
  handleKeyDown(ev) {
    this.key$.next(ev.key);
  }
  render() {
    return (h(Host, null, h("div", { class: {
        'search-box': true,
        'expanded': this.isExpanded
      } }, h("input", { type: "text", placeholder: "search...", ref: (el) => this.searchInput = el, onFocus: this.onSearchInputFocused, onBlur: this.onSearchInputBlurred }), h("button", null, (this.isExpanded || this.isFocused) ? h(MyIconXmarkSolid, { onClick: this.handleExitSearch }) : h(MyIconMagnifyingGlassSolid, { onClick: this.onMagnifyingGlassSolidClicked })))));
  }
};
NavSearch.style = oecNavSearchCss;

export { NavSearch as oec_nav_search };
