import { h, r as registerInstance, e as createEvent, f as Host } from './index-6b788f04.js';
import { R as ReplaySubject } from './index-b7be4d6b.js';
import './oec-nav-menu-action-5d15d702.js';
import './oec-user-icon-a8445c92.js';
import { O as Overlay } from './Overlay-643f6b2d.js';
import { t as tooltip, p as popover } from './middleware-fcc1c878.js';
import './index-55538d60.js';

const NotificationIcon = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 16", fill: "currentColor" }, attrs),
  h("path", { d: "M9.96,15.87c.98,.12,1.88-.58,2.01-1.56h-3.57c.1,.82,.74,1.46,1.56,1.56ZM14.73,6.61h0v-.05c-.01-.17-.02-.35-.02-.54v-.04c-.27-1.9-1.64-3.46-3.48-3.98,.24-.39,.25-.88,.02-1.28-.35-.59-1.1-.79-1.69-.44s-.79,1.1-.44,1.69c-1.91,.47-3.34,2.05-3.6,4,0,6.26-1.92,6.22-1.92,6.22v1.66h13.03v-1.66s-1.78,.04-1.91-5.58Z" })));

const BentoMenu = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 16", fill: "currentColor" }, attrs),
  h("path", { d: "M4.08,.18C2.77,.18,1.7,1.24,1.7,2.56s1.07,2.38,2.38,2.38,2.38-1.07,2.38-2.38S5.4,.18,4.08,.18Zm0,5.44c-1.32,0-2.38,1.07-2.38,2.38s1.07,2.38,2.38,2.38,2.38-1.07,2.38-2.38-1.07-2.38-2.38-2.38Zm0,5.44c-1.32,0-2.38,1.07-2.38,2.38s1.07,2.38,2.38,2.38,2.38-1.07,2.38-2.38-1.07-2.38-2.38-2.38Zm12.25-6.12c1.32,0,2.38-1.07,2.38-2.38S17.64,.18,16.33,.18s-2.38,1.07-2.38,2.38,1.07,2.38,2.38,2.38Zm0,.68c-1.32,0-2.38,1.07-2.38,2.38s1.07,2.38,2.38,2.38,2.38-1.07,2.38-2.38-1.07-2.38-2.38-2.38ZM10.2,.18c-1.32,0-2.38,1.07-2.38,2.38s1.07,2.38,2.38,2.38,2.38-1.07,2.38-2.38S11.52,.18,10.2,.18Zm0,10.88c-1.32,0-2.38,1.07-2.38,2.38s1.07,2.38,2.38,2.38,2.38-1.07,2.38-2.38-1.07-2.38-2.38-2.38Zm6.12,0c-1.32,0-2.38,1.07-2.38,2.38s1.07,2.38,2.38,2.38,2.38-1.07,2.38-2.38-1.07-2.38-2.38-2.38Zm-6.12-5.44c-1.32,0-2.38,1.07-2.38,2.38s1.07,2.38,2.38,2.38,2.38-1.07,2.38-2.38-1.07-2.38-2.38-2.38Z" })));

const AlertsIcon = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 16" }, attrs),
  h("path", { d: "M16.3,12.29c.94-1.31,1.44-2.88,1.44-4.49,0-4.26-3.45-7.71-7.71-7.71-1.13,0-2.25,.25-3.28,.73C2.9,2.63,1.24,7.23,3.05,11.08s6.41,5.51,10.26,3.7l3.53,.99,.38,.11-.1-.38-.82-3.21Zm-5.7-.59c-.16,.14-.37,.22-.58,.21-.21,0-.41-.08-.57-.22h0c-.17-.15-.26-.37-.24-.6,0-.22,.08-.42,.24-.57,.15-.15,.36-.24,.58-.24,.45,0,.81,.35,.81,.8h0c.01,.24-.08,.46-.25,.61Zm.2-5.95l-.17,2.6c-.01,.26-.07,.51-.16,.75h0c-.07,.16-.23,.26-.41,.24-.18,0-.34-.09-.41-.25-.1-.23-.15-.48-.16-.73l-.23-2.68c-.03-.24-.04-.48-.04-.73-.02-.32,.04-.64,.16-.93,.12-.23,.37-.35,.62-.32,.23,0,.46,.08,.62,.25,.17,.19,.25,.45,.24,.7,0,.22-.02,.58-.05,1.09Z" })));

const OecLogo = (attrs) => (h("svg", Object.assign({ viewBox: "0 0 134 28", xmlns: "http://www.w3.org/2000/svg" }, attrs),
  h("path", { d: "M64.427 14.004c0-6.353-4.536-9.328-10.56-9.328-6.026 0-10.563 2.975-10.563 9.328 0 7.477 5.626 9.51 10.562 9.51 4.935 0 10.561-2.033 10.561-9.51M53.867.248C65.48.248 69.58 7.07 69.58 14.294c0 5.479-3.23 13.647-15.715 13.647S38.15 19.773 38.15 14.294C38.15 7.071 42.252.248 53.866.248M72.404.901h23.664v4.428H77.557v6.134H93.49v4.428H77.557v6.969h18.946v4.427h-24.1zM127.124 17.887c-.51 2.94-2.614 10.054-14.736 10.054-8.348 0-14.917-4.646-14.917-14.264 0-7.694 4.827-13.43 15.316-13.43 11.796 0 13.538 7.659 13.938 9.075h-5.155c-.29-.907-2.323-4.646-8.494-4.646-7.294 0-10.343 4.101-10.343 9.582 0 6.061 4.392 9.256 10.054 9.256 6.024 0 8.674-3.595 9.182-5.627h5.155ZM130.28 2.717c.433 0 .82-.03.82-.55 0-.418-.38-.495-.734-.495h-.698v1.045h.612Zm-.612 1.896h-.51V1.238h1.285c.797 0 1.192.295 1.192.96 0 .604-.38.867-.875.93l.96 1.485h-.574l-.889-1.462h-.589v1.462Zm.62.751c1.324 0 2.368-1.037 2.368-2.446 0-1.385-1.044-2.43-2.368-2.43-1.34 0-2.383 1.045-2.383 2.43 0 1.409 1.043 2.446 2.383 2.446Zm-2.973-2.446c0-1.68 1.362-2.918 2.973-2.918 1.595 0 2.958 1.238 2.958 2.918 0 1.695-1.363 2.934-2.958 2.934-1.61 0-2.973-1.239-2.973-2.934Z", fill: "#003B71" }),
  h("path", { d: "M17.755 4.814a4.306 4.306 0 1 1-8.614 0 4.306 4.306 0 0 1 8.614 0M26.897 14.004a4.306 4.306 0 0 1-4.307 4.305 4.306 4.306 0 1 1 0-8.613 4.307 4.307 0 0 1 4.307 4.308M17.755 23.11a4.306 4.306 0 1 1-8.613 0 4.307 4.307 0 1 1 8.613 0", fill: "#55565A" }),
  h("path", { d: "M8.613 14.001a4.307 4.307 0 1 1-8.614 0 4.307 4.307 0 0 1 8.614 0", fill: "#003B71" })));

const SupportIcon = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 25", fill: "currentColor" }, attrs),
  h("g", { transform: "translate(-1535 -17)", "data-name": "Group 843" },
    h("g", { transform: "translate(51.25 -2.75)", fill: "#003a6f", "data-name": "Group 127" },
      h("path", { transform: "translate(1469 4.995)", d: "M27.255,39.51A12.255,12.255,0,1,1,39.51,27.255,12.268,12.268,0,0,1,27.255,39.51Zm0-22.409a10.172,10.172,0,1,0,10.19,10.154A10.169,10.169,0,0,0,27.255,17.1Z", "data-name": "Path 292" }),
      h("path", { transform: "translate(1469 5)", d: "m27.25 39.75a12.5 12.5 0 1 1 12.5-12.5 12.514 12.514 0 0 1-12.5 12.5zm0-24.51a12.01 12.01 0 1 0 12.01 12.01 12.023 12.023 0 0 0-12.01-12.01zm0 22.445a10.447 10.447 0 0 1-10.435-10.435 10.44 10.44 0 1 1 10.435 10.435zm0-20.344a9.97 9.97 0 1 0 7.009 2.9 9.9 9.9 0 0 0-7.009-2.9z", "data-name": "Path 292 - Outline" })),
    h("g", { transform: "translate(51.25 -2.662)", "data-name": "Group 126" },
      h("g", { transform: "translate(1491.8 25.247)", fill: "#004a7b" },
        h("path", { transform: "translate(-37.301 -30)", d: "M41.433,40.4a1.053,1.053,0,0,1-1.05-1.05,3.612,3.612,0,0,1,2.556-3.466,1.507,1.507,0,0,0,1.086-1.506,2.311,2.311,0,1,0-4.623,0,1.05,1.05,0,0,1-2.1,0A4.485,4.485,0,0,1,41.748,30a4.379,4.379,0,0,1,4.377,4.377,3.612,3.612,0,0,1-2.556,3.466,1.507,1.507,0,0,0-1.086,1.506,1.075,1.075,0,0,1-1.049,1.05Z", "data-name": "Path 290" }),
        h("path", { transform: "translate(-42.629 -50.991)", d: "m48.021 63.56a1.26 1.26 0 1 1-2.521 0 1.26 1.26 0 0 1 2.521 0", "data-name": "Path 291" }))))));

const oecNavCss = ":host{display:flex;flex:1;justify-content:space-between;padding:0;background-color:white;color:#00507d;height:44px;--oec-nav-menu-action-margin:0.5rem;}:host div.button{margin:0 3px}:host .left{display:flex;justify-content:flex-start;align-items:center;padding-left:0.5rem;padding-right:0.5rem}:host .left svg{width:22px;height:22px}:host .right{display:flex;justify-content:flex-end;align-items:center;position:relative}:host .right svg{width:22px;height:22px}:host .vertical-divider{display:block;width:1px;height:42px;background-color:lightslategray;opacity:0.3;margin:0 15px}:host oec-nav-locate{margin-right:-4px}:host .help,:host .notifications,:host .messages,:host oec-nav-search,:host .user-info{width:30px;height:30px}:host .bento{height:30px}:host .bento-content{display:flex;flex-flow:row nowrap;align-items:center}:host .bento-content svg:first-child{margin-right:var(--oec-nav-menu-action-margin)}:host .bento-content svg:last-child{margin:0 var(--oec-nav-menu-action-margin);align-items:center}";

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
    this.userId = "";
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
        template: el.dataset.tooltip || "",
        panelClass: "nav-tooltip-panel",
        hasArrow: true,
        middleware: [tooltip()]
      }));
      if (el.classList.contains("bento")) {
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
          template: () => h("oec-notifications", { class: "notifications-popover-content", enabledApps: this.enabledApps }),
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
    /* const shared = interval(1000).pipe(
      shareReplay({
        bufferSize: 1,
        refCount: true
      })
    );

    shared.pipe(takeUntil(this.destroy$)).subscribe(x => {
      this.missedNotifications = x;
    });

    shared
      .pipe(
        scan((acc, value) => (value % 3 === 0 && value !== 0 ? acc + 1 : acc), 0), // every 3 seconds
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(x => {
        this.missedMessages = x;
      }); */
  }
  disconnectedCallback() {
    for (const overlay of this.overlayRefs) {
      overlay.dispose();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  getChangedValue(event) {
    this.missedNotifications = event.detail;
  }
  render() {
    const styles1 = { width: "22px", height: "22px" };
    const styles2 = { width: "25px", height: "25px" };
    const oecIconStyles = { width: "60px" };
    return (h(Host, null, h("div", { class: "left" }, h("slot", { name: "brand" })), h("div", { class: "right" }, h("oec-nav-menu-action", { class: "search", isClickable: false, "data-tooltip": "Parts Locator", ref: this.attachMenuItemBehaviors }, h("oec-nav-locate", { slot: "icon" })), h("oec-nav-menu-action", { class: "help", "data-tooltip": "Support", onClick: this.onHelpClick, ref: this.attachMenuItemBehaviors }, h(SupportIcon, { slot: "icon", style: styles1 })), h("oec-nav-menu-action", { class: "notifications", "data-tooltip": "Notifications", badgeTotal: this.missedNotifications, onClick: this.onNotificationsClicked, ref: this.attachMenuItemBehaviors }, h(NotificationIcon, { slot: "icon", style: styles2 })), h("oec-nav-menu-action", { class: "messages", "data-tooltip": "Alerts", badgeTotal: this.missedMessages, onClick: this.onMessagesClicked, ref: this.attachMenuItemBehaviors }, h(AlertsIcon, { slot: "icon", style: styles2 })), h("oec-nav-menu-action", { class: "user-info", "data-tooltip": "User Info", isClickable: false, ref: this.attachMenuItemBehaviors }, h("oec-user-icon", { slot: "icon", style: styles2, userId: this.userId })), h("div", { class: "vertical-divider" }), h("oec-nav-menu-action", { class: "bento", onClick: this.onBentoClicked, "data-tooltip": "App Launcher", ref: this.attachMenuItemBehaviors }, h("div", { slot: "icon", class: "bento-content" }, h(OecLogo, { focusable: "false", style: oecIconStyles }), h(BentoMenu, { focusable: "false", style: styles1 }))))));
  }
};
OecNav.style = oecNavCss;

export { OecNav as oec_nav };
