import { r as registerInstance, e as createEvent, h, f as Host } from './index-6b788f04.js';

const oecNotificationsSettingsCss = ":host{display:flex;flex:1;flex-flow:column nowrap;font-family:Open Sans, sans-serif;overflow-y:hidden;color:#000;font-size:0.8rem;border:none}.settings-container{box-shadow:0 2px 4px #cdcdcd;background:#fff;display:block}.settings-container .settings-header{border-bottom:1px solid #a7a7a7;padding:10px 5px;text-align:center}.settings-container .settings-item{padding:10px 5px}.settings-container .settings-item:hover{background-color:#dddddd;border:0px solid #dddddd;border-radius:4px;cursor:pointer;transition:all 100ms ease-out}";

const OecNotificationsSettings = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.notifyAllClicked = createEvent(this, "notifyAllClicked", 7);
    this.muteSoundsClicked = createEvent(this, "muteSoundsClicked", 7);
    this.onNotifyAllClicked = () => {
      console.log("notify all toggled");
      this.notifyAllClicked.emit();
    };
    this.onMuteSounds = () => {
      console.log("mute sounds toggled");
      this.muteSoundsClicked.emit();
    };
  }
  render() {
    return (h(Host, null, h("div", { class: "settings-container" }, h("div", { class: "settings-header" }, h("span", null, "Notification Settings")), h("div", { class: "settings-item" }, h("label", null, h("input", { type: "checkbox", name: "select", onClick: this.onNotifyAllClicked }), h("span", null, "Notify me for all users"))), h("div", { class: "settings-item" }, h("label", null, h("input", { type: "checkbox", name: "select", onClick: this.onMuteSounds }), h("span", null, "Mute notification sounds"))))));
  }
};
OecNotificationsSettings.style = oecNotificationsSettingsCss;

export { OecNotificationsSettings as oec_notifications_settings };
