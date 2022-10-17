import { h, r as registerInstance, f as Host } from './index-1f24ee20.js';
import { f as formatDistance, a as format } from './index-2e45568f.js';

const BagIcon = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, attrs),
  h("path", { d: "M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z" })));

const oecNotificationItemsCss = ":host{display:flex;flex:1;flex-flow:column nowrap;font-family:Open Sans, sans-serif}:host .notification-items-wrapper{position:relative;height:273px}:host .notification-items{list-style-type:none;padding-inline-start:0px;margin-block-start:0;margin-block-end:0}:host .notification-items>li{border-bottom:1px solid #e2e2e2;background-color:#fff}:host .notification-items>li:hover{background-color:#dddddd}:host .notification-item-link{display:grid;grid-template-rows:[row1-start] auto [row1-end row2-start] auto [row2-end];grid-template-columns:[col1-start] auto [col1-end col2-start] 1fr [col2-end];column-gap:0.5rem;row-gap:0.3rem;text-decoration:none;margin-bottom:0.5rem;padding:0.5rem;border-radius:5px;color:black}:host .icon{grid-row:row1-start/row2-end;grid-column:col1-start/col1-end;width:25px;height:25px}:host .description{grid-row:row1-start/row1-end;grid-column:col2-start/col2-end;font-size:0.8rem}:host .elapsed-time{grid-row:row2-start/row2-end;grid-column:col2-start/col2-end;color:#0000008a;font-size:0.6rem}:host .view-all-wrapper{display:flex;flex:0 0 0;padding:0;width:100%;position:absolute;bottom:0}:host .view-all-wrapper a{box-shadow:0 0 #0003, 0 0 #00000024, 0 0 #0000001f;border:none;padding:0 15px;line-height:50px;box-sizing:border-box;position:relative;user-select:none;cursor:pointer;outline:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;min-width:64px;overflow:visible;width:100%;color:#00507d;background:#fff;font-size:14px;font-weight:500}:host .view-all-wrapper a:hover{background:#dddddd;transition:all 100ms ease-out}";

function sortByCreatedOn(a, b) {
  if (a.createdOn > b.createdOn) {
    return -1;
  }
  if (a.createdOn < b.createdOn) {
    return 1;
  }
  return 0;
}
const OecNotificationItems = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.notificationItems = [];
  }
  notificationTemplateRender(notificationItem) {
    const elapsedTime = formatDistance(new Date(notificationItem.createdOn), new Date(), { addSuffix: true });
    const localizedTime = format(new Date(notificationItem.createdOn), 'p');
    return (h("li", null, h("a", { href: notificationItem.url, class: "notification-item-link", target: "_blank" }, h(BagIcon, { class: "icon" }), h("span", { class: "description" }, notificationItem.notificationType, " from", " ", h("strong", null, notificationItem.notificationSource), " @", " ", localizedTime), h("span", { class: "elapsed-time" }, elapsedTime))));
  }
  render() {
    return (h(Host, null, h("div", { class: "notification-items-wrapper" }, h("div", { class: "notifications" }, h("ul", { class: "notification-items" }, this.notificationItems
      .sort(sortByCreatedOn)
      .slice(0, 4)
      .map(this.notificationTemplateRender.bind(this)))), h("div", { class: "view-all-wrapper" }, h("a", { href: this.appUrl, class: "view-all", target: "_blank" }, "View all notifications")))));
  }
};
OecNotificationItems.style = oecNotificationItemsCss;

export { OecNotificationItems as O };
