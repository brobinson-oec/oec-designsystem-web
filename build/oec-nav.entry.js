import { h, r as registerInstance, e as createEvent, f as Host } from './index-13f33587.js';
import { S as Subject, R as ReplaySubject, m as merge, a as map, s as switchMap, o as of, d as delay, b as distinctUntilChanged, t as takeUntil, i as interval, c as shareReplay, e as scan } from './index-c55aa8a2.js';
import './index-f1c6839d.js';
import './oec-nav-menu-action-f6c4cc1c.js';
import './oec-user-icon-1fc1f575.js';
import { O as Overlay } from './Overlay-f250d759.js';

const MyIconBellSolid = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", fill: "currentColor" }, attrs),
  h("path", { d: "M256 32v19.2c73 14.83 128 79.4 128 156.8v18.8c0 47.1 17.3 92.4 48.5 127.6l7.4 8.3c8.4 9.5 10.5 22.9 5.3 34.4S428.6 416 416 416H32c-12.6 0-24.029-7.4-29.191-18.9-5.162-11.5-3.097-24.9 5.275-34.4l7.416-8.3C46.74 319.2 64 273.9 64 226.8V208c0-77.4 54.1-141.97 128-156.8V32c0-17.67 14.3-32 32-32s32 14.33 32 32zm-32 480c-17 0-33.3-6.7-45.3-18.7S160 464.1 160 448h128c0 16.1-6.7 33.3-18.7 45.3S240.1 512 224 512z" })));

const MyIconBento = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "20", height: "16", fill: "currentColor" }, attrs),
  h("path", { d: "M4.08.18a2.38 2.38 0 1 0-.001 4.759A2.38 2.38 0 0 0 4.08.18Zm0 5.44a2.38 2.38 0 1 0-.001 4.759A2.38 2.38 0 0 0 4.08 5.62Zm0 5.44a2.38 2.38 0 1 0-.001 4.759 2.38 2.38 0 0 0 .001-4.759Zm12.25-6.12a2.38 2.38 0 1 0 .001-4.759 2.38 2.38 0 0 0-.001 4.759Zm0 .68a2.38 2.38 0 1 0-.001 4.759 2.38 2.38 0 0 0 .001-4.759ZM10.2.18a2.38 2.38 0 1 0-.001 4.759A2.38 2.38 0 0 0 10.2.18Zm0 10.88a2.38 2.38 0 1 0-.001 4.759 2.38 2.38 0 0 0 .001-4.759Zm6.12 0a2.38 2.38 0 1 0-.001 4.759 2.38 2.38 0 0 0 .001-4.759ZM10.2 5.62a2.38 2.38 0 1 0-.001 4.759A2.38 2.38 0 0 0 10.2 5.62Z", "data-name": "Layer 1" })));

const MyIconCommentDotsSolid = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", fill: "currentColor" }, attrs),
  h("path", { d: "M256 31.1C114.6 31.1.9 124.22.9 239.1c0 49.62 21.35 94.98 56.97 130.7-12.5 50.37-54.27 95.27-54.77 95.77-2.25 2.25-2.875 5.734-1.5 8.734 1.249 3 4.021 4.766 7.271 4.766 66.25 0 115.1-31.76 140.6-51.39 32.63 12.25 69.02 19.39 107.4 19.39 141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zm-128.9 240c-17.75 0-32-14.25-32-31.1s14.25-32 32-32 32 14.25 32 32-13.4 31.1-32 31.1zm128.9 0c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32 31.1 14.25 31.1 32-13.3 31.1-31.1 31.1zm127.1 0c-17.75 0-32-14.25-32-31.1s14.25-32 32-32 32 14.25 32 32-13.4 31.1-32 31.1z" })));

const MyIconOecLogo = (attrs) => (h("svg", Object.assign({ viewBox: "0 0 134 28", xmlns: "http://www.w3.org/2000/svg" }, attrs),
  h("path", { d: "M64.427 14.004c0-6.353-4.536-9.328-10.56-9.328-6.026 0-10.563 2.975-10.563 9.328 0 7.477 5.626 9.51 10.562 9.51 4.935 0 10.561-2.033 10.561-9.51M53.867.248C65.48.248 69.58 7.07 69.58 14.294c0 5.479-3.23 13.647-15.715 13.647S38.15 19.773 38.15 14.294C38.15 7.071 42.252.248 53.866.248M72.404.901h23.664v4.428H77.557v6.134H93.49v4.428H77.557v6.969h18.946v4.427h-24.1zM127.124 17.887c-.51 2.94-2.614 10.054-14.736 10.054-8.348 0-14.917-4.646-14.917-14.264 0-7.694 4.827-13.43 15.316-13.43 11.796 0 13.538 7.659 13.938 9.075h-5.155c-.29-.907-2.323-4.646-8.494-4.646-7.294 0-10.343 4.101-10.343 9.582 0 6.061 4.392 9.256 10.054 9.256 6.024 0 8.674-3.595 9.182-5.627h5.155ZM130.28 2.717c.433 0 .82-.03.82-.55 0-.418-.38-.495-.734-.495h-.698v1.045h.612Zm-.612 1.896h-.51V1.238h1.285c.797 0 1.192.295 1.192.96 0 .604-.38.867-.875.93l.96 1.485h-.574l-.889-1.462h-.589v1.462Zm.62.751c1.324 0 2.368-1.037 2.368-2.446 0-1.385-1.044-2.43-2.368-2.43-1.34 0-2.383 1.045-2.383 2.43 0 1.409 1.043 2.446 2.383 2.446Zm-2.973-2.446c0-1.68 1.362-2.918 2.973-2.918 1.595 0 2.958 1.238 2.958 2.918 0 1.695-1.363 2.934-2.958 2.934-1.61 0-2.973-1.239-2.973-2.934Z", fill: "#003B71" }),
  h("path", { d: "M17.755 4.814a4.306 4.306 0 1 1-8.614 0 4.306 4.306 0 0 1 8.614 0M26.897 14.004a4.306 4.306 0 0 1-4.307 4.305 4.306 4.306 0 1 1 0-8.613 4.307 4.307 0 0 1 4.307 4.308M17.755 23.11a4.306 4.306 0 1 1-8.613 0 4.307 4.307 0 1 1 8.613 0", fill: "#55565A" }),
  h("path", { d: "M8.613 14.001a4.307 4.307 0 1 1-8.614 0 4.307 4.307 0 0 1 8.614 0", fill: "#003B71" })));

const MyIconCircleQuestionRegular = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", fill: "currentColor" }, attrs),
  h("path", { d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm0-128c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32s-14.9-32-32-32zm33.1-208H238c-39 0-70 31-70 70 0 13 11 24 24 24s24-11 24-24c0-12 9.1-22 21.1-22h51.1c12.9 0 23.8 10 23.8 22 0 8-4 14.1-11 18.1L244 251c-8 5-12 13-12 21v16c0 13 11 24 24 24s24-11 24-24v-2l45.1-28c21-13 34-36 34-60 .9-39-30.1-70-70-70z" })));

function tooltip(configuration) {
  const defaultConfig = { showDelay: 1000, hideDelay: 0 };
  const config = Object.assign(Object.assign({}, defaultConfig), configuration);
  return {
    mergeOverlayConfig: { hasBackdrop: false },
    // eslint-disable-next-line no-undef
    register: (itemElement) => {
      const update$ = new Subject();
      const show$ = new Subject();
      const hide$ = new Subject();
      const destroy$ = new ReplaySubject(1);
      const showTooltip = async () => {
        show$.next();
      };
      const hideTooltip = async () => {
        hide$.next();
      };
      merge(show$.pipe(map(() => true)), hide$.pipe(map(() => false)))
        .pipe(switchMap(isExpectedToShow => of(isExpectedToShow).pipe(delay(isExpectedToShow ? config.showDelay : config.hideDelay))), distinctUntilChanged(), takeUntil(destroy$)).subscribe(async (isExpectedToShow) => {
        if (isExpectedToShow) {
          await itemElement.show();
          update$.next();
        }
        else {
          await itemElement.hide();
        }
      });
      const events = [
        ['mouseenter', showTooltip],
        ['mouseleave', hideTooltip],
        ['focus', showTooltip],
        ['blur', hideTooltip]
      ];
      return {
        update$,
        events,
        unsubscribe: () => {
          update$.complete();
          show$.complete();
          hide$.complete();
          destroy$.next();
          destroy$.complete();
        }
      };
    }
  };
}
function popover() {
  return {
    mergeOverlayConfig: { hasBackdrop: true },
    // eslint-disable-next-line no-undef
    register: (itemElement) => {
      const update$ = new Subject();
      const showPopover = async () => {
        await itemElement.show();
        update$.next();
      };
      const events = [
        ['click', showPopover]
      ];
      return {
        update$,
        events,
        unsubscribe: () => {
          update$.complete();
        }
      };
    }
  };
}

const oecNavCss = ":host{display:flex;flex:1;justify-content:space-between;padding:0;background-color:white;color:#003b71}:host .left{display:flex;justify-content:flex-start;align-items:center;padding-left:0.5rem;padding-right:0.5rem}:host .right{display:flex;justify-content:flex-end;align-items:center;position:relative}:host .vertical-divider{display:block;width:1px;height:30px;background-color:black;opacity:0.1}:host oec-nav-search{--oec-nav-search-padding-right:0rem;margin-right:-8px}:host .help,:host .notifications,:host .messages,:host oec-nav-search,:host .user-info{width:20px;height:30px}:host .bento{--oec-nav-menu-action-padding-left:1rem;height:30px}:host .bento-content{display:flex;flex-flow:row nowrap;align-items:center}:host .bento-content svg:first-child{height:30px;width:60px}:host .bento-content svg:last-child{margin-left:10px}";

const OecNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.notificationsClicked = createEvent(this, "notificationsClicked", 7);
    this.messagesClicked = createEvent(this, "messagesClicked", 7);
    this.helpClicked = createEvent(this, "helpClicked", 7);
    this.bentoClicked = createEvent(this, "bentoClicked", 7);
    this.overlayRefs = [];
    this.destroy$ = new ReplaySubject(1);
    this.missedNotifications = 0;
    this.missedMessages = 0;
    this.userId = '';
    this.enabledApps = []; // Doesn't support converters.
    this.onBentoClicked = async () => {
      this.bentoClicked.emit();
    };
    this.onHelpClick = () => {
      this.helpClicked.emit();
    };
    this.onNotificationsClicked = () => {
      this.notificationsClicked.emit();
    };
    this.onMessagesClicked = () => {
      this.messagesClicked.emit();
    };
    this.attachMenuItemBehaviors = async (el) => {
      this.overlayRefs.push(await Overlay.attach(el, {
        template: el.dataset.tooltip || '',
        panelClass: 'nav-tooltip-panel',
        hasArrow: true,
        middleware: [tooltip()]
      }));
      if (el.classList.contains('bento')) {
        this.overlayRefs.push(await Overlay.attach(el, {
          template: () => h("oec-app-launcher", { class: "bento-popover-content" }),
          panelClass: 'popover-panel',
          hasBackdrop: true,
          hasArrow: true,
          middleware: [popover()]
        }));
      }
      if (el.classList.contains('notifications')) {
        this.overlayRefs.push(await Overlay.attach(el, {
          template: () => h("oec-notifications", { class: "notifications-popover-content" }),
          panelClass: 'popover-panel',
          hasBackdrop: true,
          hasArrow: true,
          middleware: [popover()]
        }));
      }
    };
  }
  // Do not bind this with html attributes. Set with code.
  connectedCallback() {
    const shared = interval(1000).pipe(shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    shared.pipe(takeUntil(this.destroy$)).subscribe(x => {
      this.missedNotifications = x;
    });
    shared.pipe(scan((acc, value) => (value % 3) === 0 && value !== 0 ? (acc + 1) : acc, 0), // every 3 seconds
    distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(x => {
      this.missedMessages = x;
    });
  }
  disconnectedCallback() {
    for (const overlay of this.overlayRefs) {
      overlay.dispose();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  render() {
    const styles = { width: "15px", height: "15px" };
    return (h(Host, null, h("div", { class: "left" }, h("slot", { name: "brand" })), h("div", { class: "right" }, h("oec-nav-menu-action", { class: "search", isClickable: false, "data-tooltip": "Search", ref: this.attachMenuItemBehaviors }, h("oec-nav-search", { slot: "icon" })), h("oec-nav-menu-action", { class: "help", "data-tooltip": "Support", onClick: this.onHelpClick, ref: this.attachMenuItemBehaviors }, h(MyIconCircleQuestionRegular, { slot: "icon", style: styles })), h("oec-nav-menu-action", { class: "notifications", "data-tooltip": "Notifications", badgeTotal: this.missedNotifications, onClick: this.onNotificationsClicked, ref: this.attachMenuItemBehaviors }, h(MyIconBellSolid, { slot: "icon", style: styles })), h("oec-nav-menu-action", { class: "messages", "data-tooltip": "Alerts", badgeTotal: this.missedMessages, onClick: this.onMessagesClicked, ref: this.attachMenuItemBehaviors }, h(MyIconCommentDotsSolid, { slot: "icon", style: styles })), h("oec-nav-menu-action", { class: "user-info", "data-tooltip": "User Info", isClickable: false, ref: this.attachMenuItemBehaviors }, h("oec-user-icon", { slot: "icon", style: { width: "20px", height: "20px" }, userId: this.userId })), h("div", { class: "vertical-divider" }), h("oec-nav-menu-action", { class: "bento", onClick: this.onBentoClicked, "data-tooltip": "App Launcher", ref: this.attachMenuItemBehaviors }, h("div", { slot: "icon", class: "bento-content" }, h(MyIconOecLogo, { focusable: "false" }), h(MyIconBento, { focusable: "false" }))))));
  }
};
OecNav.style = oecNavCss;

export { OecNav as oec_nav };
