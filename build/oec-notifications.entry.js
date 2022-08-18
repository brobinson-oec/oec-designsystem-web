import { h, r as registerInstance, e as createEvent, i as getAssetPath, f as Host, g as getElement } from './index-13f33587.js';
import { s as sub } from './oec-notification-items-36a5dc68.js';
import { R as ReplaySubject, j as from, t as takeUntil } from './index-c55aa8a2.js';
import './index-f1c6839d.js';

const NOTIFICATIONS = [
  {
    appName: "OpsTrax",
    url: "https://notifications.opstrax.com/",
    notifications: [
      {
        notificationType: "New Order",
        notificationSource: "Demo Shop 1",
        transactionId: "OPS123",
        url: "https://notifications.opstrax.com/OPS123",
        createdOn: sub(new Date(), { days: 2 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Shop 1",
        transactionId: "OPS123",
        url: "https://notifications.opstrax.com/OPS123",
        createdOn: sub(new Date(), { hours: 7 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Shop 1",
        transactionId: "OPS123",
        url: "https://notifications.opstrax.com/OPS123",
        createdOn: sub(new Date(), { minutes: 3 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Shop 1",
        transactionId: "OPS123",
        url: "https://notifications.opstrax.com/OPS123",
        createdOn: sub(new Date(), { minutes: 24 })
      }
    ]
  },
  {
    appName: "CollisionLink",
    url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer",
    notifications: [
      {
        notificationType: "New Order",
        notificationSource: "OEC Training Shop",
        transactionId: "CLK123fdafd",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK123fdafd",
        createdOn: sub(new Date(), { days: 1 })
      },
      {
        notificationType: "New Quote Request",
        notificationSource: "Otto's Body Shop",
        transactionId: "CLK456wfdsafdsa",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK456wfdsafdsa",
        createdOn: sub(new Date(), { hours: 26 })
      },
      {
        notificationType: "New Quote Response",
        notificationSource: "OEC Training Shop",
        transactionId: "CLK789gfagdsagds",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK789gfagdsagds",
        createdOn: sub(new Date(), { days: 2 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Shop 2",
        transactionId: "CLK012gdagfdag",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK012gdagfdag",
        createdOn: sub(new Date(), { hours: 17 })
      },
      {
        notificationType: "New Order",
        notificationSource: "OEC Training Shop",
        transactionId: "CLK123werwfasfdsa",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK123werwfasfdsa",
        createdOn: sub(new Date(), { days: 3 })
      },
      {
        notificationType: "New Quote Request",
        notificationSource: "Otto's Body Shop",
        transactionId: "CLK456abvasdfa",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK456abvasdfa",
        createdOn: sub(new Date(), { days: 4 })
      },
      {
        notificationType: "New Quote Response",
        notificationSource: "OEC Training Shop",
        transactionId: "CLK789fshgd",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK789fshgd",
        createdOn: sub(new Date(), { minutes: 2 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Shop 2",
        transactionId: "CLK012hgrehgeh",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK012hgrehgeh",
        createdOn: sub(new Date(), { days: 5 })
      },
      {
        notificationType: "New Order",
        notificationSource: "OEC Training Shop",
        transactionId: "CLK123trthsgf",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK123trthsgf",
        createdOn: sub(new Date(), { minutes: 50 })
      },
      {
        notificationType: "New Quote Request",
        notificationSource: "Otto's Body Shop",
        transactionId: "CLK456gfdhgfdhg",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK456gfdhgfdhg",
        createdOn: sub(new Date(), { days: 6 })
      },
      {
        notificationType: "New Quote Response",
        notificationSource: "OEC Training Shop",
        transactionId: "CLK789hgfdhgfd",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK789hgfdhgfd",
        createdOn: sub(new Date(), { hours: 1 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Shop 2",
        transactionId: "CLK012trwetrew",
        url: "https://portal.oecdev.oeconnection.com/#/CollisionLinkDealer/CLK012trwetrew",
        createdOn: sub(new Date(), { days: 7 })
      }
    ]
  },
  {
    appName: "RepairLink",
    url: "https://portal.oecdev.oeconnection.com/#/RepairLinkDealer",
    notifications: [
      {
        notificationType: "New Order",
        notificationSource: "Repair Shop 1",
        transactionId: "RLK123",
        url: "https://portal.oecdev.oeconnection.com/#/RepairLinkDealer/RLK123",
        createdOn: sub(new Date(), { minutes: 45 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Repair Shop 22",
        transactionId: "RLK456",
        url: "https://portal.oecdev.oeconnection.com/#/RepairLinkDealer/RLK456",
        createdOn: sub(new Date(), { hours: 3 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Repair Shop 13",
        transactionId: "RLK789",
        url: "https://portal.oecdev.oeconnection.com/#/RepairLinkDealer/RLK789",
        createdOn: sub(new Date(), { minutes: 7 })
      }
    ]
  },
  {
    appName: "D2DLink",
    url: "https://portal.oecdev.oeconnection.com/#/D2DLinkDealer",
    notifications: [
      {
        notificationType: "New Order",
        notificationSource: "Demo Dealer 1",
        transactionId: "D2D432432",
        url: "https://portal.oecdev.oeconnection.com/#/D2DLinkDealer/D2D432432",
        createdOn: sub(new Date(), { minutes: 25 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Dealer 2",
        transactionId: "D2D97545643",
        url: "https://portal.oecdev.oeconnection.com/#/D2DLinkDealer/D2D97545643",
        createdOn: sub(new Date(), { minutes: 1 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Dealer 3",
        transactionId: "D2D543256",
        url: "https://portal.oecdev.oeconnection.com/#/D2DLinkDealer/D2D543256",
        createdOn: sub(new Date(), { hours: 2 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Dealer 4",
        transactionId: "D2D54354312",
        url: "https://portal.oecdev.oeconnection.com/#/D2DLinkDealer/D2D54354312",
        createdOn: sub(new Date(), { hours: 56 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Dealer 5",
        transactionId: "D2D765635",
        url: "https://portal.oecdev.oeconnection.com/#/D2DLinkDealer/D2D765635",
        createdOn: sub(new Date(), { days: 10 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Dealer 6",
        transactionId: "D2D65452432",
        url: "https://portal.oecdev.oeconnection.com/#/D2DLinkDealer/D2D65452432",
        createdOn: sub(new Date(), { days: 2 })
      }
    ]
  },
  {
    appName: "ConsumerLink",
    url: "https://portal.oecdev.oeconnection.com/#/ConsumerLinkDealer",
    notifications: [
      {
        notificationType: "New Order",
        notificationSource: "Demo Consumer 1",
        transactionId: "CSL73524",
        url: "https://portal.oecdev.oeconnection.com/#/ConsumerLinkDealer/CSL73524",
        createdOn: sub(new Date(), { days: 5 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Consumer 2",
        transactionId: "CSL84324324",
        url: "https://portal.oecdev.oeconnection.com/#/ConsumerLinkDealer/CSL84324324",
        createdOn: sub(new Date(), { minutes: 30 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Consumer 3",
        transactionId: "CSL1332123",
        url: "https://portal.oecdev.oeconnection.com/#/ConsumerLinkDealer/CSL1332123",
        createdOn: sub(new Date(), { hours: 11 })
      }
    ]
  },
  {
    appName: "MarketPlaceDirect",
    url: "https://portal.oecdev.oeconnection.com/#/MarketPlaceDirect",
    notifications: [
      {
        notificationType: "New Order",
        notificationSource: "Demo Market 1",
        transactionId: "CSL8567455",
        url: "https://portal.oecdev.oeconnection.com/#/MarketPlaceDirect/CSL8567455",
        createdOn: sub(new Date(), { days: 1 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Market 2",
        transactionId: "CSL324243",
        url: "https://portal.oecdev.oeconnection.com/#/MarketPlaceDirect/CSL324243",
        createdOn: sub(new Date(), { minutes: 27 })
      }
    ]
  },
  {
    appName: "PartsBrokerDirect",
    url: "https://portal.oecdev.oeconnection.com/#/PartsBrokerDirect",
    notifications: [
      {
        notificationType: "New Order",
        notificationSource: "Demo Market 1",
        transactionId: "PBD8567455",
        url: "https://portal.oecdev.oeconnection.com/#/PartsBrokerDirect/PBD8567455",
        createdOn: sub(new Date(), { hours: 10 })
      },
      {
        notificationType: "New Order",
        notificationSource: "Demo Market 2",
        transactionId: "PBD324243",
        url: "https://portal.oecdev.oeconnection.com/#/PartsBrokerDirect/PBD324243",
        createdOn: sub(new Date(), { minutes: 5 })
      }
    ]
  }
];
class NotificationService {
  getAllNotifications() {
    const results = Promise.resolve(NOTIFICATIONS);
    return results;
  }
  getAllNotificationsFromApps(enabledApps) {
    // get notifications based on enabledApps
    const enabledAppNotifications = enabledApps.map(x => this.getNotificationFor(x));
    // remove undefined or null results
    const filteredResults = enabledAppNotifications.filter(val => (val !== undefined) && (val !== null));
    return Promise.resolve(filteredResults);
  }
  // getNotificationListing(enabledApps: string[]): Observable<Notification[]> {
  //   const testList = enabledApps.map<Notification>(x => this.getNotificationFor(x));
  //   console.log("testList", testList);
  //   const results = mergeWith(enabledApps.map(x => this.getNotificationFor(x)));
  //   console.log("results", results);
  //   return results;
  // }
  getNotificationFor(appName) {
    return NOTIFICATIONS.filter(function (x) { return x.appName === appName; })[0];
  }
}

const MyIconChevronLeftSolid = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, attrs),
  h("path", { d: "M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" })));

const MyIconChevronRightSolid = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, attrs),
  h("path", { d: "M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" })));

const MyIconGearSolid = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, attrs),
  h("path", { d: "M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" })));

const MyIconThumbsUpRegular = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, attrs),
  h("path", { d: "M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z" })));

const oecNotificationsCss = ":host{display:flex;flex:1;flex-flow:column nowrap;font-family:Open Sans, sans-serif;overflow-y:hidden}:host .header{background:#fff;display:block}:host .title{text-transform:uppercase;font-size:1rem;padding:10px;float:left}:host .dismiss-all-container,:host .notification-settings-container{padding:5px;margin:5px 5px 5px 0;float:right}:host .dismiss-all-container:hover,:host .notification-settings-container:hover{background-color:#dddddd;border:0px solid #dddddd;border-radius:4px;cursor:pointer;transition:all 100ms ease-out}:host .dismiss-all{font-family:Open Sans, sans-serif;font-size:0.8rem}:host .svg-icon{height:15px;width:15px}:host .svg-icon.gear{fill:#00507d}:host .empty-body{text-align:center;display:grid;justify-content:center;align-items:center;padding:80px}:host .svg-icon-thumb{height:100px;width:100px;margin:auto;fill:#d3d3d3}:host .apps{border-top:1px solid #e2e2e2;display:flex}:host .nav-tabs-wrapper{background-color:#ececec;display:flex;flex:96%;overflow:hidden}:host .nav.nav-tabs.nav-justified{display:flex;flex:96%;flex-flow:nowrap;list-style-type:none;margin:0;padding:0;background-color:#ececec;transition:transform 150ms ease-out;z-index:3}:host .nav-tabs.nav-justified>li{float:left}:host .nav-tabs.nav-justified>li:not(:last-child){border-right:1px solid #e2e2e2}:host .nav-tabs.nav-justified>li:hover{background-color:#fff;cursor:pointer}:host .nav-tabs.nav-justified>li.app-tab.active{background-color:#fff;border:none;border-radius:0}:host .nav-tabs.nav-justified>li>div{border-radius:0;color:#a7a7a7;display:inline-flex;font-size:14px;padding:10px;text-decoration:none;text-align:center;justify-content:center;transition:background-color 100ms ease-out}:host .nav-tabs.nav-justified>li>div>.app-logo{align-self:center;vertical-align:middle}:host .nav-tabs.nav-justified>li>div>.app-logo:not(.opstrax){transform:scale(0.75)}:host .nav-tabs.nav-justified>li>div>span.badge-content{background-color:#f44336;border:3px solid #f44336;border-radius:50%;color:#fff;display:inline-block;font-size:14px;font-weight:600;height:25px;line-height:25px;margin-left:5px;text-align:center;text-overflow:ellipsis;transform:scale(0.8);white-space:nowrap;width:25px;vertical-align:middle}:host .navigation-arrow-left,:host .navigation-arrow-right{flex:2%;text-align:center;background:#dddddd;border:none;border-bottom:1px solid #e2e2e2;transition:transform 150ms linear;z-index:30}:host .navigation-arrow-left:hover,:host .navigation-arrow-right:hover{background-color:#fff;cursor:pointer}:host .navigation-arrow-left:disabled,:host .navigation-arrow-right:disabled{background:#ececec;cursor:default}";

function sortByMostUnread(a, b) {
  if (a.notifications.length > b.notifications.length) {
    return -1;
  }
  if (a.notifications.length < b.notifications.length) {
    return 1;
  }
  return 0;
}
const OecNotifications = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.totalNotificationsChanged = createEvent(this, "totalNotificationsChanged", 7);
    this.dismissAllClicked = createEvent(this, "dismissAllClicked", 7);
    this.settingsClicked = createEvent(this, "settingsClicked", 7);
    this.destroy$ = new ReplaySubject(1);
    this.notificationService = new NotificationService();
    this.carouselOffset = 0;
    this.selectedApp = "";
    this.notifications = [];
    this.enabledApps = ['CollisionLink'];
    this.companyId = '';
    this.userId = '';
    // private handleResize = (e) => {
    //   console.log("app list resized", e);
    //   //this.render();
    // }
    this.moveRight = () => {
      if (!this.carouselOffset) {
        this.carouselOffset = 0;
      }
      this.carouselOffset -= 250;
    };
    this.moveLeft = () => {
      if (!this.carouselOffset) {
        this.carouselOffset = 0;
      }
      this.carouselOffset += 250;
    };
    this.atStartOfList = () => {
      return this.carouselOffset === 0;
    };
    this.atEndOfList = () => {
      const maxComponentWidth = 600;
      let carouselWidth = this.notifications.length * 250;
      const appList = this.el.shadowRoot.getElementById("ul-app");
      if (appList) {
        carouselWidth = appList.offsetWidth;
      }
      // If the length of the tabs is less than the viewable screen, disable the button
      let isAtEndOfList = carouselWidth <= maxComponentWidth;
      if (isAtEndOfList) {
        return isAtEndOfList;
      }
      ;
      isAtEndOfList =
        Math.max(Math.abs(this.carouselOffset) + maxComponentWidth, maxComponentWidth) >= carouselWidth;
      return isAtEndOfList;
    };
    this.changeSelectedApp = (appName) => {
      if (this.selectedApp) {
        const oldTab = this.el.shadowRoot.getElementById(this.selectedApp);
        if (oldTab) {
          oldTab.classList.remove("active");
        }
      }
      const appTab = this.el.shadowRoot.getElementById(appName);
      if (appTab) {
        appTab.classList.add("active");
      }
      this.selectedApp = appName;
    };
    this.onDismissAllClicked = () => {
      this.dismissAllClicked.emit();
    };
    this.onSettingsClicked = () => {
      this.settingsClicked.emit();
    };
  }
  appTemplateRender(notification) {
    const unreadNotifications = notification.notifications.length;
    const isSelectedApp = notification.appName === this.selectedApp;
    const imgSrc = getAssetPath(`../assets/${notification.appName}-logo.png`);
    return (h("li", { class: isSelectedApp ? "app-tab active" : "app-tab", id: notification.appName, onClick: () => this.changeSelectedApp(notification.appName) }, h("div", null, h("img", { class: "app-logo " + notification.appName.toLowerCase(), src: imgSrc, title: notification.appName, alt: notification.appName }), h("span", { class: "badge-content" }, unreadNotifications))));
  }
  connectedCallback() {
    console.log("connectedCallback called");
    from(this.notificationService.getAllNotificationsFromApps(this.enabledApps))
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => {
      this.notifications = x;
      if (this.notifications && this.notifications.length > 0) {
        console.log("this.notifications.length", this.notifications.length);
        this.totalNotificationsChanged.emit(this.notifications.length);
        const firstApp = this.notifications.sort(sortByMostUnread)[0];
        this.selectedApp = firstApp["appName"];
      }
    });
  }
  // componentShouldUpdate() {
  //   const element = this.el.shadowRoot.getElementById("ul-app");
  //   console.log("appListElement", element);
  //   this.appListObserver = new ResizeObserver((e) => this.handleResize(e));
  //   this.appListObserver.observe(element);
  // }
  disconnectedCallback() {
    // if (this.appListObserver) {
    //   this.appListObserver.disconnect();
    // }
    this.destroy$.next();
    this.destroy$.complete();
  }
  render() {
    const selectedApp = this.notifications.filter((x) => {
      return x.appName === this.selectedApp;
    })[0];
    let selectedAppNotifications = [];
    let selectedAppUrl = '';
    if (selectedApp) {
      selectedAppNotifications = selectedApp["notifications"];
      selectedAppUrl = selectedApp["url"];
    }
    return (h(Host, null, h("div", { class: "header" }, h("span", { class: "title" }, h("strong", null, "Global Order Notifications")), h("div", { class: "notification-settings-container", onClick: this.onSettingsClicked }, h(MyIconGearSolid, { class: "svg-icon gear" })), h("div", { class: "dismiss-all-container", onClick: this.onDismissAllClicked }, h("span", { class: "dismiss-all" }, "Dismiss All"))), h("div", { class: "body" }, this.notifications.length > 0 ? (h("div", { class: "apps" }, h("button", { class: "navigation-arrow-left", onClick: this.moveLeft, disabled: this.atStartOfList() }, h(MyIconChevronLeftSolid, { class: "svg-icon" })), h("div", { class: "nav-tabs-wrapper" }, h("ul", { class: "nav nav-tabs nav-justified", id: "ul-app", style: {
        transform: "translateX(" + this.carouselOffset + "px)"
      } }, this.notifications
      .sort(sortByMostUnread)
      .map(this.appTemplateRender.bind(this)))), h("button", { class: "navigation-arrow-right", onClick: this.moveRight, disabled: this.atEndOfList() }, h(MyIconChevronRightSolid, { class: "svg-icon" })))) : (h("div", { class: "empty-body" }, h(MyIconThumbsUpRegular, { class: "svg-icon-thumb" }), h("span", null, h("p", null, "Good job handling your notifications, ", h("br", null), "looks like you have no new notifications.")))), this.notifications.length > 0 ? (h("oec-notification-items", { notificationItems: selectedAppNotifications, appUrl: selectedAppUrl })) : (""))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
};
OecNotifications.style = oecNotificationsCss;

export { OecNotifications as oec_notifications };
