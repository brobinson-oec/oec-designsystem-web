import { h, r as registerInstance, i as getAssetPath, f as Host } from './index-1f24ee20.js';
import { R as ReplaySubject, S as Subject, c as debounceTime, s as switchMap, o as of, f as from, t as takeUntil } from './index-73b9da7f.js';
import './index-b727d372.js';
import { U as UserProfileService } from './UserProfileService-ea1aea9c.js';
import { m as myContainer, T as TYPES } from './inversify.config-d47c16ff.js';

const PencilIcon = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, attrs),
  h("path", { d: "M421.7 220.3l-11.3 11.3-22.6 22.6-205 205c-6.6 6.6-14.8 11.5-23.8 14.1L30.8 511c-8.4 2.5-17.5 .2-23.7-6.1S-1.5 489.7 1 481.2L38.7 353.1c2.6-9 7.5-17.2 14.1-23.8l205-205 22.6-22.6 11.3-11.3 33.9 33.9 62.1 62.1 33.9 33.9zM96 353.9l-9.3 9.3c-.9 .9-1.6 2.1-2 3.4l-25.3 86 86-25.3c1.3-.4 2.5-1.1 3.4-2l9.3-9.3H112c-8.8 0-16-7.2-16-16V353.9zM453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-14.5 14.5-22.6 22.6-11.3 11.3-33.9-33.9-62.1-62.1L314.3 67.7l11.3-11.3 22.6-22.6 14.5-14.5c25-25 65.5-25 90.5 0z" })));

const oecUserInfoCss = ":host{display:block;font-family:var(--app-font-family)}.user{display:block}.profile-picture{display:inline-block;padding:10px;position:relative}.profile-picture:hover{cursor:pointer}.profile-picture:hover .user-icon{opacity:0.3}.profile-picture:hover .hover-edit{opacity:1}.user-icon{height:50px;width:50px;fill:#00507d;opacity:1;border-radius:500px;border:0;vertical-align:middle}.hover-edit{transition:0.1s ease;opacity:0;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);text-align:center}.edit{height:15px;width:15px;fill:#00507d;vertical-align:middle}.user-info{display:inline-block;vertical-align:middle;color:#00507d}.user-name{font-size:16;font-weight:600;text-align:left}.org-name{font-size:12;text-align:left}.divider{padding:1px;margin:2px 0;overflow:hidden;background-color:#e5e5e5;height:1px}.items{padding:10px 15px}.items:hover{background-color:#e1e1e1;cursor:pointer}.options{color:#00507d;border-radius:3px;margin:4px;text-align:left;cursor:pointer;font-size:14px}.shortcut{float:right;opacity:0.5;font-size:10px;padding-top:4px}";

const OecUserInfo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.destroy$ = new ReplaySubject(1);
    this.userId$ = new Subject();
    this.userProfileService = new UserProfileService();
    this.userId = "";
    this.currentApp = "";
    this.userName = "";
    this.orgName = "";
    this.profilePictureUrl = "";
    this.isOpsApp = true;
    this.appService = myContainer.get(TYPES.IAppService);
  }
  watchPropertyUserId(newValue) {
    this.userId$.next(newValue);
  }
  componentWillLoad() {
    this.watchPropertyUserId(this.userId);
  }
  componentShouldUpdate() {
    this.isOpsApp = this.allowedApps$.filter(p => p.isOpsProduct && p.name.toUpperCase() === this.currentApp.toUpperCase()).length > 0;
  }
  connectedCallback() {
    this.userId$.pipe(debounceTime(150), switchMap(userId => {
      if (!userId) {
        return of(undefined);
      }
      else {
        return from(this.userProfileService.getInfo(userId));
      }
    }), takeUntil(this.destroy$)).subscribe(x => {
      this.userName = x ? x.displayName : '';
      this.orgName = x ? x.orgName : '';
      this.profilePictureUrl = x ? x.profilePictureUri : '';
    });
    from(this.appService.getAppListing())
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
      this.allowedApps$ = data;
      this.isOpsApp = this.allowedApps$.filter(p => p.isOpsProduct && p.name.toUpperCase() === this.currentApp.toUpperCase()).length > 0;
    });
  }
  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getProfilePicture() {
    if (this.profilePictureUrl === "") {
      return getAssetPath(`../assets/profile-picture.png`);
    }
    return this.profilePictureUrl;
  }
  render() {
    return (h(Host, null, h("div", { class: "user" }, h("div", { class: "profile-picture" }, h("img", { class: "user-icon", src: this.getProfilePicture() }), h("div", { class: "hover-edit" }, h(PencilIcon, { class: "edit" }))), h("div", { class: "user-info" }, h("div", { class: "user-name" }, this.userName), h("small", { class: "org-name" }, this.orgName))), h("div", { class: "divider" }), !this.isOpsApp ? (h("div", null, h("div", { class: "items" }, h("a", { class: "options" }, h("span", null, "MY INFORMATION"))))) : (h("div", null, h("div", { class: "items" }, h("a", { class: "options" }, h("span", null, "SHORTCUTS"), h("small", { class: "shortcut" }, "ALT + H"))), h("div", { class: "items" }, h("a", { class: "options" }, h("span", null, "FULL SCREEN"), h("small", { class: "shortcut" }, "CTRL + F"))))), h("div", { class: "divider" }), h("div", { class: "items" }, h("a", { class: "options" }, h("span", null, "LOG OUT"), h("small", { class: "shortcut" }, "CTRL +  SHIFT + DEL")))));
  }
  static get watchers() { return {
    "userId": ["watchPropertyUserId"]
  }; }
};
OecUserInfo.style = oecUserInfoCss;

export { OecUserInfo as oec_user_info };
