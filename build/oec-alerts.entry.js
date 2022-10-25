import { h, r as registerInstance, e as createEvent, f as Host, g as getElement } from './index-1f24ee20.js';
import { s as sub } from './index-2e45568f.js';
import { R as ReplaySubject, f as from, t as takeUntil } from './index-73b9da7f.js';
import './index-b727d372.js';
import './oec-alert-items-c1426c0e.js';

const ALERTS = [
  {
    createdDate: sub(new Date(), { days: 2 }),
    senderFullName: 'Jennifer',
    companyName: 'Caliber',
    eventName: 'Sent Alert Message',
    eventId: 5,
    isRead: false,
    roNum: '2829040834',
    alertDetailsId: 123523,
    comment: 'New order alert testing',
    activityLogId: 75129,
    userId: '848'
  },
  {
    createdDate: sub(new Date(), { days: 3 }),
    senderFullName: 'Breton, Enderle',
    companyName: 'Toyota',
    eventName: 'Closed Alert',
    eventId: 5,
    isRead: false,
    roNum: '55698321',
    alertDetailsId: 123523,
    comment: 'Were closing the alert because we are boring!',
    activityLogId: 75129,
    userId: '848'
  },
  {
    createdDate: sub(new Date(), { days: 5 }),
    senderFullName: 'Beta, Mus',
    companyName: 'Beta Shop',
    eventName: 'New Alert',
    eventId: 5,
    isRead: true,
    roNum: '9637458',
    alertDetailsId: 967432,
    comment: 'Task complete!',
    activityLogId: 95843,
    userId: '848'
  },
  {
    createdDate: sub(new Date(), { hours: 7 }),
    senderFullName: 'Beta, Dealer',
    companyName: 'Beta',
    eventName: 'New Alert',
    eventId: 5,
    isRead: true,
    roNum: '7436852',
    alertDetailsId: 123523,
    comment: 'We need some answers about this',
    activityLogId: 75129
  },
  {
    createdDate: sub(new Date(), { days: 2 }),
    senderFullName: 'Jennifer',
    companyName: 'Caliber',
    eventName: 'Sent Alert Message',
    eventId: 5,
    isRead: true,
    roNum: '2829040834',
    alertDetailsId: 123523,
    comment: 'New order alert testing',
    activityLogId: 75129
  },
  {
    createdDate: sub(new Date(), { days: 2 }),
    senderFullName: 'Jennifer',
    companyName: 'Caliber',
    eventName: 'Sent Alert Message',
    eventId: 5,
    isRead: false,
    roNum: '2829040834',
    alertDetailsId: 123523,
    comment: 'New order alert testing',
    activityLogId: 75129,
    userId: 'abc123'
  },
  {
    createdDate: sub(new Date(), { days: 2 }),
    senderFullName: 'Jennifer',
    companyName: 'Caliber',
    eventName: 'Close Alert',
    eventId: 5,
    isRead: true,
    roNum: '2829040834',
    alertDetailsId: 123523,
    comment: 'New order alert testing',
    activityLogId: 75129
  }
];
class AlertService {
  getUnreadAlerts(userId) {
    const results = Promise.resolve(ALERTS.filter(x => x.userId === userId && !x.isRead));
    return results;
  }
}

const NoAlertIcon = (attrs) => (h("svg", Object.assign({ "data-name": "Layer 1", viewBox: "0 0 200 200", xmlns: "http://www.w3.org/2000/svg" }, attrs),
  " ",
  h("path", { d: "m65.01 191.92c-10.23 0-19.8-2.43-28.72-7.28-3.67 2.49-7.67 4.26-12 5.31s-8.72 1.24-13.18 0.59c-1.45-0.13-2.69-0.72-3.74-1.77s-1.71-2.3-1.97-3.74-0.03-2.79 0.69-4.03c0.72-1.25 1.8-2.2 3.24-2.85 3.67-2.1 6.49-4.99 8.46-8.66-6.95-8.26-11.41-17.67-13.38-28.23-1.97-10.55-1.21-20.85 2.26-30.88s9.15-18.62 17.01-25.77c7.87-7.15 16.98-11.87 27.34-14.16s20.65-2 30.88 0.88c10.23 2.89 19.08 8.2 26.56 15.93 5.77 5.77 10.23 12.39 13.38 19.87 3.15 7.47 4.72 15.28 4.72 23.41s-1.57 15.93-4.72 23.41c-3.15 7.47-7.61 14.1-13.38 19.86-5.77 5.77-12.43 10.23-19.97 13.38s-15.37 4.72-23.5 4.72zm-26.36-15.74c8.13 4.85 16.91 7.28 26.36 7.28 6.95 0 13.67-1.38 20.16-4.13s12.16-6.62 17.01-11.61c4.85-4.98 8.66-10.69 11.41-17.11s4.13-13.11 4.13-20.06-1.35-13.67-4.03-20.16c-2.69-6.49-6.53-12.16-11.51-17.01-6.43-6.95-14.1-11.77-23.01-14.46-8.92-2.69-17.9-3.05-26.95-1.08-9.31 2.1-17.44 6.43-24.39 12.98-6.95 6.56-11.8 14.43-14.56 23.6-2.62 8.79-2.89 17.64-0.79 26.56 1.97 9.31 6.23 17.44 12.79 24.39l0.39 0.2c0.66 0.53 1.11 1.25 1.38 2.16 0.26 0.92 0.2 1.83-0.2 2.75-1.97 4.46-4.72 8.33-8.26 11.61 5.64-0.53 10.62-2.49 14.95-5.9 0.79-0.66 1.64-0.98 2.56-0.98s1.77 0.32 2.56 0.98zm0.79-38.75c-1.58 0-2.99-0.46-4.23-1.38-1.25-0.91-2.07-2.16-2.46-3.74s-0.3-3.08 0.3-4.53c0.59-1.44 1.57-2.52 2.95-3.24s2.85-0.98 4.43-0.79 2.95 0.92 4.13 2.16 1.8 2.82 1.87 4.72c0.06 1.9-0.59 3.51-1.97 4.82s-3.05 1.97-5.02 1.97zm25.57 0c-1.57 0-2.99-0.46-4.23-1.38-1.25-0.91-2.07-2.16-2.46-3.74s-0.29-3.08 0.3-4.53c0.59-1.44 1.57-2.52 2.95-3.24s2.85-0.98 4.43-0.79 2.95 0.92 4.13 2.16 1.8 2.82 1.87 4.72c0.06 1.9-0.59 3.51-1.97 4.82s-3.05 1.97-5.02 1.97zm126.28-20.85c-3.81-1.97-6.62-4.85-8.46-8.65 5.51-6.69 9.44-14.16 11.8-22.42s2.95-16.65 1.77-25.18c-1.18-8.52-4.07-16.42-8.66-23.7s-10.43-13.34-17.51-18.19-14.85-8.1-23.31-9.74-16.89-1.5-25.28 0.39c-8.39 1.9-16 5.45-22.82 10.62-6.82 5.18-12.36 11.51-16.62 18.98-4.26 7.48-6.79 15.54-7.57 24.2 2.88 0.39 5.7 0.98 8.46 1.77 0.52-6.16 2.1-12.06 4.72-17.7s6.16-10.69 10.62-15.15c6.42-7.08 14.23-11.93 23.41-14.56 8.78-2.49 17.64-2.76 26.55-0.79 9.31 2.1 17.44 6.39 24.39 12.88s11.8 14.23 14.56 23.21c2.75 8.98 3.05 18.03 0.88 27.15-2.16 9.12-6.46 17.14-12.88 24.09l-0.39 0.2c-0.79 0.66-1.25 1.45-1.38 2.36-0.13 0.92-0.07 1.77 0.2 2.56 1.97 4.46 4.72 8.33 8.26 11.61-5.64-0.52-10.62-2.49-14.95-5.9-0.79-0.65-1.64-0.98-2.56-0.98s-1.77 0.33-2.56 0.98c-8.13 4.85-16.98 7.28-26.55 7.28h-2.36c0.39 2.75 0.59 5.58 0.59 8.46h1.77c10.23 0.13 19.8-2.23 28.72-7.08 3.67 2.36 7.67 4.07 12 5.11 4.33 1.05 8.72 1.25 13.18 0.59 1.44-0.13 2.69-0.72 3.74-1.77s1.7-2.29 1.97-3.74c0.26-1.44 0.03-2.82-0.69-4.13s-1.74-2.23-3.05-2.76zm-100.71 20.85c-1.57 0-2.98-0.46-4.23-1.38-1.25-0.91-2.06-2.16-2.46-3.74s-0.3-3.08 0.29-4.53c0.59-1.44 1.57-2.52 2.95-3.24s2.85-0.98 4.43-0.79 2.95 0.92 4.13 2.16c1.18 1.25 1.8 2.82 1.87 4.72s-0.59 3.51-1.97 4.82-3.05 1.97-5.02 1.97zm32.07-81.24h-8.66v29.11h8.66c1.44 0 2.66-0.49 3.64-1.48s1.47-2.19 1.47-3.64v-18.88c0-1.44-0.49-2.65-1.47-3.64s-2.2-1.48-3.64-1.48zm46.03 5.9c0-1.18-0.39-2.2-1.18-3.05s-1.77-1.28-2.95-1.28h-12.98c-0.79 0-1.35-0.32-1.67-0.98-0.33-0.65-0.1-1.57 0.69-2.75 0.52-1.31 0.79-3.41 0.79-6.3l0.2-4.52c0.13-0.92 0.03-1.77-0.3-2.56s-0.86-1.44-1.57-1.97c-0.72-0.52-1.51-0.79-2.36-0.79s-1.64 0.27-2.36 0.79c-0.72 0.53-1.25 1.18-1.57 1.97s-0.43 1.64-0.29 2.56c0 2.75-0.59 5.38-1.77 7.87-1.05 1.97-2.43 3.67-4.13 5.11-1.31 1.05-2.69 1.97-4.13 2.75l-1.97 0.79v22.03c1.7 0.66 3.41 1.45 5.11 2.36 1.05 0.79 2.23 1.44 3.54 1.97 1.7 0.52 3.41 0.79 5.11 0.79h12.79c0.79 0 1.54-0.2 2.26-0.59s1.24-0.98 1.57-1.77c0.32-0.79 0.46-1.58 0.39-2.36-0.07-0.79-0.36-1.5-0.89-2.16 1.18 0 2.2-0.39 3.05-1.18s1.28-1.74 1.28-2.85-0.33-2.13-0.98-3.05c0.91-0.26 1.6-0.79 2.06-1.58s0.69-1.67 0.69-2.65-0.39-1.87-1.18-2.66c0.91-0.26 1.6-0.79 2.07-1.57 0.46-0.79 0.69-1.57 0.69-2.36z" })));

const oecAlertsCss = ":host{display:flex;flex:1;flex-flow:column nowrap;font-family:Open Sans, sans-serif;overflow-y:hidden}:host .header{background:#fff;display:block;border-bottom:1px solid #ededed}:host .title{font-weight:bold;text-transform:uppercase;font-size:0.9rem;padding:8px 10px 12px 10px;float:left}:host .dismiss-all{font-family:Open Sans, sans-serif;font-size:0.8rem;border:none;background-color:#fff;padding:5px 10px;margin:5px 5px 5px 0;float:right}:host .dismiss-all:hover{background-color:#ededed;border:0px solid #ededed;border-radius:5px;cursor:pointer;transition:all 240ms ease-out}:host .dismiss-all:disabled{border:none;background-color:#fff;cursor:default}:host .empty-body{text-align:center;display:grid;justify-content:center;align-items:center;padding:35px 80px 80px 80px}:host .empty-body p{font-size:0.8em;margin-bottom:1.4em}:host .empty-body .svg-icon-thumb{height:133px;width:132px;margin:auto;fill:#ddd}:host .empty-body .alert-inbox-btn{background-color:#00507d;padding:8px 60px;color:#ffffff;border-radius:4px;font-size:14px;user-select:none;cursor:pointer;transition:background-color 240ms ease-in-out}:host .empty-body .alert-inbox-btn:hover{background-color:#004064}";

const OecAlerts = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.totalAlertsChanged = createEvent(this, "totalAlertsChanged", 7);
    this.dismissAllClicked = createEvent(this, "dismissAllClicked", 7);
    this.destroy$ = new ReplaySubject(1);
    this.alertService = new AlertService();
    this.alerts = [];
    this.userId = '';
    this.onDismissAllClicked = () => {
      this.dismissAllClicked.emit();
    };
  }
  connectedCallback() {
    from(this.alertService.getUnreadAlerts(this.userId))
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => {
      this.alerts = x;
      this.totalAlertsChanged.emit(this.alerts.length);
    });
  }
  componentShouldUpdate() {
    from(this.alertService.getUnreadAlerts(this.userId))
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => {
      this.alerts = x;
      this.totalAlertsChanged.emit(this.alerts.length);
    });
    return true;
  }
  render() {
    return (h(Host, null, h("div", { class: "header" }, h("span", { class: "title" }, "Alerts"), h("div", { class: "dismiss-all-container" }, h("button", { class: "dismiss-all", onClick: this.onDismissAllClicked, disabled: this.alerts.length === 0 }, "Dismiss All"))), h("div", { class: "body" }, this.alerts.length > 0 ? (h("oec-alert-items", { alerts: this.alerts })) : (h("div", { class: "alert-items-wrapper" }, h("div", { class: "empty-body" }, h(NoAlertIcon, { class: "svg-icon-thumb" }), h("span", null, h("p", null, "Good job handling your alerts, ", h("br", null), "looks like you have no pending alerts.")), h("a", { class: "alert-inbox-btn", target: "_blank" }, "GO TO ALERTS INBOX")))))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return getElement(this); }
};
OecAlerts.style = oecAlertsCss;

export { OecAlerts as oec_alerts };
