import { html } from 'lit-html';
import chevronDownImage from '../../../img/chevron-down.svg';
import checkImage from '../../../img/check.svg';

export function render__picker(trigger, values, currentValue, action) {
  return html`
    <div class="ml-2 picker">
      <span
        @click=${e => {
          this[trigger] = true;
        }}
        >${values[currentValue]}</span
      >
      <img src=${chevronDownImage} alt="" />
      <div class=${`picker_box ${this[trigger] ? '' : 'hidden'}`}>
        ${Object.keys(values).map(key => {
          return html`
            <div class="picker_box_element" @click=${() => action(parseInt(key))}>
              ${currentValue === parseInt(key)
                ? html`
                    <img src=${checkImage} alt="" />
                  `
                : ``}
              ${values[key]}
            </div>
          `;
        })}
      </div>
    </div>
    ${this[trigger]
      ? html`
          <div
            @click=${e => {
              this[trigger] = false;
            }}
            class="picker_box__closing_underlay"
          ></div>
        `
      : ``}
  `;
}
