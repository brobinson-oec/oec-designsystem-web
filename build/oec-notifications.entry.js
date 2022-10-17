import { h, r as registerInstance, e as createEvent, i as getAssetPath, f as Host, g as getElement } from './index-1f24ee20.js';
import { s as sub } from './index-2e45568f.js';
import { R as ReplaySubject, f as from, t as takeUntil } from './index-73b9da7f.js';
import './index-b727d372.js';
import './oec-notification-items-6c903c3a.js';

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

const ChevronLeftIcon = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, attrs),
  h("path", { d: "M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" })));

const ChevronRightIcon = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, attrs),
  h("path", { d: "M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" })));

const GearIcon = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, attrs),
  h("path", { d: "M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" })));

const ThumbsUpIcon = (attrs) => (h("svg", Object.assign({ "data-name": "Layer 1", viewBox: "0 0 200 200", xmlns: "http://www.w3.org/2000/svg" }, attrs),
  h("path", { class: "cls-1", d: "m139.24 11.52c12.14 5.32 22.68 12.76 31.61 22.3 8.93 9.55 15.69 20.5 20.26 32.84 4.57 12.35 6.48 25.1 5.73 38.26-0.75 13.17-4.06 25.68-9.92 37.55-5.87 11.87-13.85 22.03-23.94 30.49-10.1 8.46-21.45 14.6-34.07 18.42s-25.47 4.98-38.57 3.48-25.37-5.52-36.83-12.07l-0.61-0.2-29.67 8.39c-1.91 0.54-3.82 0.58-5.73 0.1s-3.58-1.43-5.01-2.87c-1.43-1.43-2.39-3.1-2.86-5.01-0.48-1.91-0.38-3.82 0.31-5.73l8.39-29.46-0.2-0.61c-8.59-14.87-12.89-30.83-12.89-47.88s4.3-33.01 12.89-47.88 20.29-26.57 35.09-35.09 30.79-12.79 47.98-12.79c13.23 0 25.92 2.59 38.06 7.78zm-4.3 169.83c10.91-4.5 20.49-10.91 28.75-19.23 8.25-8.32 14.63-17.87 19.13-28.65 4.5-10.77 6.75-22.1 6.75-33.97s-2.42-24.08-7.26-35.4-11.77-21.21-20.77-29.67-19.34-14.73-31-18.83c-11.66-4.09-23.6-5.69-35.81-4.81-12.21 0.89-23.77 4.13-34.68 9.72-10.92 5.59-20.29 13.2-28.14 22.81-7.85 9.62-13.34 20.36-16.47 32.23-3.14 11.87-3.89 23.91-2.25 36.12s5.73 23.57 12.28 34.07l0.61 1.23-9.21 32.74c-0.41 1.23-0.14 2.32 0.82 3.27 0.95 0.95 2.05 1.23 3.27 0.82l32.94-9 1.23 0.82c12.14 7.23 25.24 11.36 39.29 12.38s27.55-1.2 40.51-6.65zm-53.41-90.85c1.36 1.23 2.05 2.8 2.05 4.71v24.55c0 1.91-0.65 3.51-1.94 4.81-1.3 1.3-2.9 1.94-4.81 1.94h-11.25v-38.06h11.25c1.91 0 3.48 0.68 4.71 2.05zm54.63 9c-0.68 0.96-1.57 1.57-2.66 1.84 0.95 1.23 1.43 2.59 1.43 4.09 0 1.09-0.31 2.12-0.92 3.07-0.61 0.96-1.47 1.64-2.56 2.05 0.95 1.09 1.4 2.39 1.33 3.89s-0.65 2.76-1.74 3.79c-1.09 1.02-2.45 1.53-4.09 1.53 0.68 0.82 1.06 1.74 1.13 2.76s-0.14 2.01-0.61 2.97c-0.48 0.96-1.13 1.74-1.94 2.35-0.82 0.61-1.77 0.92-2.86 0.92h-16.78c-2.32 0-4.57-0.34-6.75-1.02-1.64-0.82-3.21-1.7-4.71-2.66-2.05-1.23-4.23-2.25-6.55-3.07v-29.06l2.46-1.02c1.91-0.95 3.68-2.11 5.32-3.48 2.32-1.77 4.23-3.89 5.73-6.34 1.64-3.27 2.39-6.75 2.25-10.44 0-1.5 0.54-2.79 1.64-3.89 1.09-1.09 2.38-1.64 3.89-1.64s2.79 0.55 3.89 1.64c1.09 1.09 1.64 2.39 1.64 3.89l-0.2 5.73c-0.27 4.23-0.68 6.96-1.23 8.18-1.09 1.5-1.23 2.8-0.41 3.89 0.41 0.82 1.02 1.23 1.84 1.23h16.78c1.64-0.13 3 0.34 4.09 1.43s1.64 2.46 1.64 4.09c0 1.23-0.34 2.32-1.02 3.27z" })));

const oecNotificationsCss = ":host{display:flex;flex:1;flex-flow:column nowrap;font-family:Open Sans, sans-serif;overflow-y:hidden}:host .header{background:#fff;display:block}:host .title{text-transform:uppercase;font-size:1rem;padding:10px;float:left}:host .notification-settings-container{padding:5px;margin:5px 5px 5px 0;float:right}:host .notification-settings-container:hover{background-color:#dddddd;border:0px solid #dddddd;border-radius:4px;cursor:pointer;transition:all 100ms ease-out}:host .dismiss-all{font-family:Open Sans, sans-serif;font-size:0.8rem;border:none;background-color:#fff;padding:5px;margin:5px 5px 5px 0;float:right}:host .dismiss-all:hover{background-color:#dddddd;border:0px solid #dddddd;border-radius:4px;cursor:pointer;transition:all 100ms ease-out}:host .dismiss-all:disabled{border:none;background-color:#fff;cursor:default}:host .svg-icon{height:15px;width:15px}:host .svg-icon.gear{fill:#00507d}:host .empty-body{text-align:center;display:grid;justify-content:center;align-items:center;padding:80px}:host .svg-icon-thumb{height:100px;width:100px;margin:auto;fill:#ddd}:host .apps{border-top:1px solid #e2e2e2;display:flex}:host .nav-tabs-wrapper{background-color:#ececec;display:flex;flex:96%;overflow:hidden}:host .nav.nav-tabs.nav-justified{display:flex;flex:96%;flex-flow:nowrap;list-style-type:none;margin:0;padding:0;background-color:#ececec;transition:transform 150ms ease-out;z-index:3}:host .nav-tabs.nav-justified>li{float:left}:host .nav-tabs.nav-justified>li:not(:last-child){border-right:1px solid #e2e2e2}:host .nav-tabs.nav-justified>li:hover{background-color:#fff;cursor:pointer}:host .nav-tabs.nav-justified>li.app-tab.active{background-color:#fff;border:none;border-radius:0}:host .nav-tabs.nav-justified>li>div{border-radius:0;color:#a7a7a7;display:inline-flex;font-size:14px;padding:10px;text-decoration:none;text-align:center;justify-content:center;transition:background-color 100ms ease-out}:host .nav-tabs.nav-justified>li>div>.app-logo{align-self:center;vertical-align:middle}:host .nav-tabs.nav-justified>li>div>.app-logo:not(.opstrax){transform:scale(0.75)}:host .nav-tabs.nav-justified>li>div>span.badge-content{background-color:#f44336;border:3px solid #f44336;border-radius:50%;color:#fff;display:inline-block;font-size:14px;font-weight:600;height:25px;line-height:25px;margin-left:5px;text-align:center;text-overflow:ellipsis;transform:scale(0.8);white-space:nowrap;width:25px;vertical-align:middle}:host .navigation-arrow-left,:host .navigation-arrow-right{flex:2%;text-align:center;background:#dddddd;border:none;border-bottom:1px solid #e2e2e2;transition:transform 150ms linear;z-index:30}:host .navigation-arrow-left:hover,:host .navigation-arrow-right:hover{background-color:#fff;cursor:pointer}:host .navigation-arrow-left:disabled,:host .navigation-arrow-right:disabled{background:#ececec;cursor:default}";

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
    this.appListObserver = null;
    this.carouselOffset = 0;
    this.appListWidth = 0;
    this.selectedApp = "";
    this.notifications = [];
    this.enabledApps = [];
    this.companyId = '';
    this.userId = '';
    this.getTotalNotificationsCount = () => {
      let totalNotifications = 0;
      this.notifications.forEach(element => {
        totalNotifications += element.notifications.length;
      });
      return totalNotifications;
    };
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
  }
  appTemplateRender(notification) {
    const unreadNotifications = notification.notifications.length;
    const isSelectedApp = notification.appName === this.selectedApp;
    const imgSrc = getAssetPath(`../assets/${notification.appName}-logo.png`);
    return (h("li", { class: isSelectedApp ? "app-tab active" : "app-tab", id: notification.appName, onClick: () => this.changeSelectedApp(notification.appName) }, h("div", null, h("img", { class: "app-logo " + notification.appName.toLowerCase(), src: imgSrc, title: notification.appName, alt: notification.appName }), h("span", { class: "badge-content" }, unreadNotifications))));
  }
  connectedCallback() {
    from(this.notificationService.getAllNotificationsFromApps(this.enabledApps))
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => {
      this.notifications = x;
      if (this.notifications && this.notifications.length > 0) {
        this.totalNotificationsChanged.emit(this.getTotalNotificationsCount());
        const firstApp = this.notifications.sort(sortByMostUnread)[0];
        this.selectedApp = firstApp["appName"];
      }
    });
  }
  componentShouldUpdate() {
    from(this.notificationService.getAllNotificationsFromApps(this.enabledApps))
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => {
      this.notifications = x;
      if (this.notifications && this.notifications.length > 0) {
        this.totalNotificationsChanged.emit(this.getTotalNotificationsCount());
      }
    });
    return true;
  }
  disconnectedCallback() {
    if (this.appListObserver) {
      this.appListObserver.disconnect();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  getSelectedApp() {
    if (this.notifications.length === 0) {
      return "";
    }
    if (this.selectedApp && this.selectedApp !== "") {
      const isAppInList = this.notifications.filter((x) => {
        return x.appName === this.selectedApp;
      })[0];
      if (isAppInList) {
        return this.selectedApp;
      }
    }
    const firstApp = this.notifications.sort(sortByMostUnread)[0];
    this.selectedApp = firstApp["appName"];
    return this.selectedApp;
  }
  atStartOfList() {
    return this.carouselOffset === 0;
  }
  ;
  atEndOfList() {
    const maxComponentWidth = 540;
    let carouselWidth = this.notifications.length * 370;
    if (this.appListWidth > 0) {
      carouselWidth = this.appListWidth;
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
  }
  ;
  render() {
    const appList = this.el.shadowRoot.getElementById("ul-app");
    this.appListObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        this.appListWidth = entry.contentRect.width;
      }
    });
    if (appList) {
      this.appListObserver.observe(appList);
    }
    const selectedApp = this.getSelectedApp();
    const app = this.notifications.filter((x) => {
      return x.appName === selectedApp;
    })[0];
    let selectedAppNotifications = [];
    let selectedAppUrl = '';
    if (app) {
      selectedAppNotifications = app["notifications"];
      selectedAppUrl = app["url"];
    }
    return (h(Host, null, h("div", { class: "header" }, h("span", { class: "title" }, h("strong", null, "Global Order Notifications")), h("div", { class: "notification-settings-container", "data-tooltip": "Settings" }, h(GearIcon, { class: "svg-icon gear" })), h("div", { class: "dismiss-all-container" }, h("button", { class: "dismiss-all", onClick: this.onDismissAllClicked, disabled: this.notifications.length === 0 }, "Dismiss All"))), h("div", { class: "body" }, this.notifications.length > 0 ? (h("div", { class: "apps" }, h("button", { class: "navigation-arrow-left", onClick: this.moveLeft, disabled: this.atStartOfList() }, h(ChevronLeftIcon, { class: "svg-icon" })), h("div", { class: "nav-tabs-wrapper" }, h("ul", { class: "nav nav-tabs nav-justified", id: "ul-app", style: {
        transform: "translateX(" + this.carouselOffset + "px)"
      } }, this.notifications
      .sort(sortByMostUnread)
      .map(this.appTemplateRender.bind(this)))), h("button", { class: "navigation-arrow-right", onClick: this.moveRight, disabled: this.atEndOfList() }, h(ChevronRightIcon, { class: "svg-icon" })))) : (h("div", { class: "empty-body" }, h(ThumbsUpIcon, { class: "svg-icon-thumb" }), h("span", null, h("p", null, "Good job handling your notifications, ", h("br", null), "looks like you have no new notifications.")))), this.notifications.length > 0 ? (h("oec-notification-items", { notificationItems: selectedAppNotifications, appUrl: selectedAppUrl })) : (""))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
};
OecNotifications.style = oecNotificationsCss;

export { OecNotifications as oec_notifications };
