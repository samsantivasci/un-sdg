import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  // sets default variables 
  constructor() {
    super();
    this.goal = "circle";
    this.imgSrc = new URL(`../lib/svgs/circle.png`, import.meta.url).href;
    this.width = "254px";
    this.height = "254px";
    this.label = "";
    this.loading = "lazy";
    this.fetchPriority = "low";
    this.colorOnly = false;
    this.isImageVisible = true;
    this.color= ""
  }

  // sets variable types
  static get properties() {
    return {
      goal: { type: String, reflect: true},
      imgSrc: { type: String },
      width: { type: String },
      height: { type: String },
      label: { type: String },
      loading: { type: String, reflect: true},
      fetchPriority: { type: String, reflect: true},
      colorOnly: { type: Boolean },
      isImageVisible: { type: Boolean },
      color: {type: String}
    };
  }

  // sets styles including CSS properties
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block;
       // defined custom properties such as the color associated with each goal 
        --un-sdg-goal-1: rgb(235, 28, 44);
        --un-sdg-goal-2: rgb(210, 160, 42);
        --un-sdg-goal-3: rgb(44, 155, 72);
        --un-sdg-goal-4: rgb(194, 31, 51);
        --un-sdg-goal-5: rgb(239, 64, 42);
        --un-sdg-goal-6: rgb(0, 173, 216);
        --un-sdg-goal-7: rgb(253, 183, 19);
        --un-sdg-goal-8: rgb(143, 23, 55);
        --un-sdg-goal-9: rgb(243, 109, 36);
        --un-sdg-goal-10: rgb(224, 21, 131);
        --un-sdg-goal-11: rgb(249, 157, 37);
        --un-sdg-goal-12: rgb(207, 141, 42);
        --un-sdg-goal-13: rgb(72, 119, 61);
        --un-sdg-goal-14: rgb(0, 125, 187);
        --un-sdg-goal-15: rgb(63, 175, 73);
        --un-sdg-goal-16: rgb(1, 85, 138);
        --un-sdg-goal-17: rgb(25, 54, 103);
        // set the width and height of these properties 
        display: inline-block;
        width: var(--width, 254px);
        height: var(--height, 254px);
      }
      .svg-wrapper {
        width: var(--width, 254px);
        height: var(--height, 254px);
        padding: 0;
        margin: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `];
  }
// suppose to set a label to each goal but it is not working. 
updateLabel() {
  const label = {
      'circle': "Sustainable developments logo",
      'all': "Goal 1: No poverty, Goal 2: Zero hunger, Goal 3: Good health and well-being, Goal 4: Quality education, Goal 5: Gender equality, Goal 6: Clean water and sanitation, Goal 7: Affordable and clean energy, Goal 8: Decent work and economic growth, Goal 9: Industry, innovation and infrastructure, Goal 10: Reduced inequalities, Goal 11: Sustainable cities and communities, Goal 12: Responsible consumption and production, Goal 13: Climate action, Goal 14: Life below water, Goal 15: Life on land, Goal 16: Peace, justice and strong institutions, Goal 17: Partnerships for the goals",
      '1': "Goal 1: No poverty",
      '2': "Goal 2: Zero hunger",
      '3': "Goal 3: Good health and well-being",
      '4': "Goal 4: Quality education",
      '5': "Goal 5: Gender equality",
      '6': "Goal 6: Clean water and sanitation",
      '7': "Goal 7: Affordable and clean energy",
      '8': "Goal 8: Decent work and economic growth",
      '9': "Goal 9: Industry, innovation and infrastructure",
      '10':"Goal 10: Reduced inequalities",
      '11': "Goal 11: Sustainable cities and communities",
      '12': "Goal 12: Responsible consumption and production",
      '13': "Goal 13: Climate action",
      '14': "Goal 14: Life below water",
      '15': "Goal 15: Life on land",
      '16': "Goal 16: Peace, justice and strong institutions",
      '17': "Goal 17: Partnerships for the goals"
  };
  return label;
}
//returns the URL of the svg image file of the specific goal 
  render() {
    let imgSrc = new URL(`../lib/svgs/goal-${this.goal}.svg`,import.meta.url).href;
    // If the goal is all, set it to the all svg
    if (this.goal === 'all') {
      imgSrc = new URL(`../lib/svgs/${this.goal}.svg`, import.meta.url).href;
    }
    // If the goal is circle, set it to the circle image
    else if (this.goal === 'circle') {
      imgSrc = new URL(`../lib/svgs/${this.goal}.png`, import.meta.url).href;
    }
    return html`
      <div class="svg-wrapper" style="background-color: var(--un-sdg-goal-${this.goal})">
        <!-- Ternary. Only run <img/> if this.isImageVisible is true -->
        ${!this.colorOnly ? html `
          <img 
          src="${imgSrc}"
          alt="${this.label}"
          loading="${this.loading}"
          fetchpriority="${this.fetchPriority}"
          />
        ` : ``}
      </div>
    `;
  }
  //hello
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}
globalThis.customElements.define(unSdg.tag, unSdg);