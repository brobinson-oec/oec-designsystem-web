import { r as registerInstance, h, f as Host } from './index-c5f39227.js';
import { R as ReplaySubject, S as Subject, h as debounceTime, s as switchMap, o as of, j as from, t as takeUntil } from './index-c55aa8a2.js';
import './index-f1c6839d.js';

class UserProfileService {
  getInfo(uid) {
    return Promise.resolve({
      id: uid,
      displayName: "Leblanc Meneses"
    });
  }
}

const oecUserIconCss = ":host{--oec-user-icon-color:white;display:flex;border-radius:50%;background-color:currentColor;align-items:center;justify-content:center}:host span{font-weight:bolder;font-family:Arial, Helvetica, sans-serif;font-size:8px;color:var(--oec-user-icon-color)}";

const OecUserIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.destroy$ = new ReplaySubject(1);
    this.userId$ = new Subject();
    this.userProfileService = new UserProfileService();
    this.userId = '';
  }
  watchPropertyUserId(newValue) {
    this.userId$.next(newValue);
  }
  componentWillLoad() {
    this.watchPropertyUserId(this.userId);
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
      this.userInfo = x ? x : undefined;
      this.initials = x ? x.displayName.split(/\s+/)
        .map(x => x.trim())
        .filter(x => x !== '').slice(0, 2)
        .reduce((accumulator, current) => {
        accumulator += current.slice(0, 1).toLocaleUpperCase();
        return accumulator;
      }, '') : '';
    });
  }
  disconnectedCallback() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  render() {
    return (h(Host, null, h("span", null, this.initials ? this.initials : '')));
  }
  static get watchers() { return {
    "userId": ["watchPropertyUserId"]
  }; }
};
OecUserIcon.style = oecUserIconCss;

export { OecUserIcon as O };
