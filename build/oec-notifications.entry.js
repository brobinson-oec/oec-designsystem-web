import { h, r as registerInstance, i as getAssetPath, f as Host, g as getElement } from './index-13f33587.js';
import { s as sub } from './oec-notification-items-50d47242.js';
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
  getNotificationListing() {
    return Promise.resolve(NOTIFICATIONS);
  }
}

const MyIconChevronLeftSolid = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, attrs),
  h("path", { d: "M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" })));

const MyIconChevronRightSolid = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, attrs),
  h("path", { d: "M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" })));

const oecNotificationsCss = ":host{box-shadow:1px 1px 4px rgba(119, 136, 153, 0.4);display:flex;flex:1;flex-flow:column nowrap;font-family:Open Sans, sans-serif;overflow-y:hidden}:host .apps{border-top:1px solid #e2e2e2;display:flex}:host .title{background:#fff;text-transform:uppercase;font-size:1rem;padding:5px}:host .nav-tabs-wrapper{background-color:#ececec;display:flex;flex:96%;overflow:hidden}:host .nav.nav-tabs.nav-justified{display:flex;flex:96%;flex-flow:nowrap;list-style-type:none;margin:0;padding:0;background-color:#ececec;transition:transform 150ms ease-out;z-index:3}:host .nav-tabs.nav-justified>li{float:left}:host .nav-tabs.nav-justified>li:not(:last-child){border-right:1px solid #e2e2e2}:host .nav-tabs.nav-justified>li:hover{background-color:#fff;cursor:pointer}:host .nav-tabs.nav-justified>li.app-tab.active{background-color:#fff;border:none;border-radius:0}:host .nav-tabs.nav-justified>li>div{border-radius:0;color:#a7a7a7;display:inline-flex;font-size:14px;padding:10px;text-decoration:none;text-align:center;justify-content:center;transition:background-color 100ms ease-out}:host .nav-tabs.nav-justified>li>div>.app-logo{align-self:center;vertical-align:middle;transform:scale(0.75)}:host .nav-tabs.nav-justified>li>div>span.badge-content{background-color:#f44336;border:3px solid #f44336;border-radius:50%;color:#fff;display:inline-block;font-size:14px;font-weight:600;height:25px;line-height:25px;margin-left:5px;text-align:center;text-overflow:ellipsis;transform:scale(0.8);white-space:nowrap;width:25px;vertical-align:middle}:host .navigation-arrow-left,:host .navigation-arrow-right{flex:2%;text-align:center;background:#dddddd;border:none;border-bottom:1px solid #e2e2e2;transition:transform 150ms linear;z-index:30}:host .navigation-arrow-left:hover,:host .navigation-arrow-right:hover{background-color:#fff;cursor:pointer}:host .navigation-arrow-left:disabled,:host .navigation-arrow-right:disabled{background:#ececec;cursor:default}";

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
    this.destroy$ = new ReplaySubject(1);
    this.notificationService = new NotificationService();
    this.carouselOffset = 0;
    this.selectedApp = "";
    this.notifications = [];
    this.enabledApps = [];
    this.companyId = '';
    this.userId = '';
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
  }
  appTemplateRender(notification) {
    const unreadNotifications = notification.notifications.length;
    const isSelectedApp = notification.appName === this.selectedApp;
    const imgSrc = getAssetPath(`../assets/${notification.appName}-logo.png`);
    return (h("li", { class: isSelectedApp ? "app-tab active" : "app-tab", id: notification.appName, onClick: () => this.changeSelectedApp(notification.appName) }, h("div", null, h("img", { class: "app-logo", src: imgSrc, title: notification.appName, alt: notification.appName }), h("span", { class: "badge-content" }, unreadNotifications))));
  }
  connectedCallback() {
    from(this.notificationService.getNotificationListing())
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => {
      this.notifications = x;
      if (this.notifications) {
        const firstApp = this.notifications.sort(sortByMostUnread)[0];
        this.selectedApp = firstApp["appName"];
      }
    });
  }
  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  render() {
    const styles = { width: "15px", height: "15px" };
    const selectedApp = this.notifications.filter((x) => {
      return x.appName === this.selectedApp;
    })[0];
    let selectedAppNotifications = [];
    let selectedAppUrl = '';
    if (selectedApp) {
      selectedAppNotifications = selectedApp["notifications"];
      selectedAppUrl = selectedApp["url"];
    }
    return (h(Host, null, h("span", { class: "title" }, h("strong", null, "Global Order Notifications")), h("div", { class: "body" }, h("div", { class: "apps" }, h("button", { class: "navigation-arrow-left", onClick: this.moveLeft, disabled: this.atStartOfList() }, h(MyIconChevronLeftSolid, { style: styles })), h("div", { class: "nav-tabs-wrapper" }, h("ul", { class: "nav nav-tabs nav-justified", id: "ul-app", style: {
        transform: "translateX(" + this.carouselOffset + "px)"
      } }, this.notifications
      .sort(sortByMostUnread)
      .map(this.appTemplateRender.bind(this)))), h("button", { class: "navigation-arrow-right", onClick: this.moveRight, disabled: this.atEndOfList() }, h(MyIconChevronRightSolid, { style: styles }))), h("oec-notification-items", { notificationItems: selectedAppNotifications, appUrl: selectedAppUrl }))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
};
OecNotifications.style = oecNotificationsCss;

export { OecNotifications as oec_notifications };
