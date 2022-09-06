import { h, r as registerInstance, e as createEvent, f as Host } from './index-6b788f04.js';
import { R as ReplaySubject, S as Subject, i as debounce, j as timer, s as switchMap, o as of, g as filter, e as distinctUntilChanged, t as takeUntil } from './index-b7be4d6b.js';
import { S as SearchIcon } from './search-icon-745d2dd2.js';
import './index-55538d60.js';

const MyIconXmarkSolid = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", fill: "currentColor" }, attrs),
  h("path", { d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25-6.2 6.25-14.4 9.35-22.6 9.35s-16.38-3.125-22.62-9.375L160 301.3 54.63 406.6C48.38 412.9 40.19 416 32 416s-16.37-3.1-22.625-9.4c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" })));

const oecNavSearchCss = ":host{--oec-nav-search-padding-right:0;display:none;flex:1;background-color:crimson;border:1px dashed crimson}:host .search-box{display:flex;flex-flow:row nowrap;position:absolute;top:50%;left:calc(100% - var(--oec-nav-search-padding-right));transform:translate(-100%, -50%);background:transparent;border-radius:50px;padding:2px;transition:all 0.3s cubic-bezier(0.35, 0, 0.25, 1)}:host .search-box.expanded{background:currentColor}:host input{outline:none;border:none;background:none;width:0;padding:0;color:#fff;font-size:12px;transition:all 0.3s cubic-bezier(0.35, 0, 0.25, 1)}:host input::placeholder{color:#cfcfcf}:host button{display:flex;flex:1;color:currentColor;border:none;border-radius:50px;background:#fff;justify-content:center;align-items:center;text-decoration:none;transition:0.3s}:host input:focus,:host input:not(:placeholder-shown){width:140px;padding:0 6px}:host .search-box:hover>input,:host .search-box.expanded>input{width:140px;padding:0 6px}:host .search-box:hover>button,:host input:focus+button,:host input:not(:placeholder-shown)+button{background:#fff;color:currentColor;transform:rotate(360deg)}";

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
      this.searchInput.value = "";
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
    this.key$
      .pipe(debounce(key => (key === "Enter" ? timer(0) : timer(3000))), switchMap(() => of((this.searchInput.value || "").trim())), filter(x => !!x && x.length > 3), // greater than 3 characters
    distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(() => {
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
    const styles = { width: "26px", height: "26px" };
    return (h(Host, null, h("div", null, h(SearchIcon, { style: styles }), h("input", { type: "text", placeholder: "search...", ref: el => (this.searchInput = el), onFocus: this.onSearchInputFocused, onBlur: this.onSearchInputBlurred }), h("button", null, this.isExpanded || this.isFocused ? h(MyIconXmarkSolid, { onClick: this.handleExitSearch }) : h(SearchIcon, { style: styles, onClick: this.onMagnifyingGlassSolidClicked })))));
  }
};
NavSearch.style = oecNavSearchCss;

export { NavSearch as oec_nav_search };
