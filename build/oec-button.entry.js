import { r as registerInstance, h } from './index-13f33587.js';

const oecButtonCss = ".oec-btn{border-radius:4px;font-family:arial;font-weight:bold;font-size:0.9rem;box-shadow:none;transition:125ms ease-out;padding:8px 24px;margin:0;line-height:initial;cursor:pointer}.oec-btn-primary{background-color:#0078c9;color:#ffffff;border:1px solid #0078c9}.oec-btn-primary:hover{background-color:#1f5593}.oec-btn-primary:active{background-color:#112e51}.oec-btn:focus{box-shadow:0 0 0 2px #ffffff, 0 0 6px 3px #2491eb;outline:none}.oec-btn:disabled{pointer-events:none;background-color:#f2f2f2;border:1px solid #f2f2f2;color:#d5d6d8}.oec-btn-secondary{background-color:#fff;color:#0078c9;border:1px solid #0078c9}.oec-btn-secondary:hover{background-color:#daebfb;color:#1f5593;border:1px solid #1f5593}.oec-btn-secondary:active{background-color:#daebfb;color:#112e51;border:1px solid #112e51}.oec-btn-secondary:disabled{background-color:#ffffff;border:1px solid #d5d6d8}.oec-btn-tertiary{background-color:transparent;color:#0078c9;border:0px}.oec-btn-tertiary:hover{color:#1f5593}.oec-btn-tertiary:active{color:#112e51}.oec-btn-tertiary:disabled{pointer-events:none;color:#d5d6d8;background-color:initial;border:initial}.oec-btn-tertiary:focus{box-shadow:none;outline:none;text-decoration:underline;outline:none}";

const OecButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The type of button to display. Possible values are: primary, secondary, or tertiary
     */
    this.type = "primary";
    /**
     * This value sets whether the button should be disabled or not
     */
    this.disabled = false;
  }
  render() {
    // Wanted to use an enum here but Stencil doesn't support it yet: https://github.com/ionic-team/stencil/issues/1096
    let buttonSubClass = "primary";
    if (this.type === "secondary" || this.type === "tertiary") {
      buttonSubClass = this.type;
    }
    const className = "oec-btn oec-btn-" + buttonSubClass;
    return (h("button", { type: "button", class: className, disabled: this.disabled }, h("slot", null)));
  }
};
OecButton.style = oecButtonCss;

export { OecButton as oec_button };
