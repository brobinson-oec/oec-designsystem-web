import { h, r as registerInstance, f as Host } from './index-1f24ee20.js';

const AlertSentIcon = (attrs) => (h("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 23.146 20.497" }, attrs),
  h("g", { id: "np_message_965435_000000", transform: "translate(-5 -10.2)" },
    h("path", { id: "Path_92", "data-name": "Path 92", d: "M49.645,49.573a.772.772,0,1,1-1.543,0,.772.772,0,0,1,1.543,0", transform: "translate(-32.017 -28.674)" }),
    h("path", { id: "Path_93", "data-name": "Path 93", d: "M36.242,49.573a.772.772,0,1,1-1.543,0,.772.772,0,0,1,1.543,0", transform: "translate(-22.061 -28.674)" }),
    h("path", { id: "Path_94", "data-name": "Path 94", d: "M22.844,49.573a.772.772,0,1,1-1.543,0,.772.772,0,0,1,1.543,0", transform: "translate(-12.109 -28.674)" }),
    h("path", { id: "Path_95", "data-name": "Path 95", d: "M7.829,27.2h5.195l5.864,3.5L18.6,27.225h.386A2.835,2.835,0,0,0,21.819,24.6l3.4,2.006-.283-3.472h.386a2.82,2.82,0,0,0,2.829-2.829V13.029A2.82,2.82,0,0,0,25.317,10.2H14.156a2.82,2.82,0,0,0-2.829,2.829v1.235h-3.5A2.837,2.837,0,0,0,5,17.092v7.278A2.821,2.821,0,0,0,7.829,27.2ZM12.38,13.029a1.778,1.778,0,0,1,1.774-1.774H25.316a1.778,1.778,0,0,1,1.774,1.774v7.278a1.778,1.778,0,0,1-1.774,1.774H23.8l.206,2.6-2.186-1.286v-6.3a2.82,2.82,0,0,0-2.829-2.829H12.38ZM6.055,17.092a1.778,1.778,0,0,1,1.774-1.774H18.989a1.778,1.778,0,0,1,1.774,1.774V24.37a1.778,1.778,0,0,1-1.774,1.774H17.473l.206,2.6-4.372-2.6H7.828A1.778,1.778,0,0,1,6.054,24.37Z" }))));

const oecAlertIconCss = ":host svg{width:20px}:host .Sent{fill:#5a83cb}:host .New{fill:#cb444a}:host .Closed{fill:#354962}:host .grey{fill:#c0c6ca}";

const OecAlertIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const svgClassName = this.eventName.split(' ')[0];
    return (h(Host, null, h(AlertSentIcon, { class: svgClassName })));
  }
};
OecAlertIcon.style = oecAlertIconCss;

export { OecAlertIcon as oec_alert_icon };
