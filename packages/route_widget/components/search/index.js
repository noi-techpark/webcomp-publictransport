import { html } from 'lit-html';
import { render__button } from '../generics/buttons/index';
import { render__departureTimePicker } from './components/departure-time-picker';
import { render__fromTo } from './components/from-to';

export function render__search() {
  this.render__fromTo = render__fromTo.bind(this);
  this.render__departureTimePicker = render__departureTimePicker.bind(this);

  return html`
    <div class="search">
      <div class="row">
        <div class="col-12">
          ${this.render__fromTo()}
        </div>
        <div class="col-12 mt-4 d-flex justify-content-between align-items-center flex-wrap">
          <div class="search__footer ${this.departure_time > 1 ? 'full_width' : ''}">
            ${this.render__departureTimePicker()}
          </div>
          <div class=${`${this.departure_time > 1 ? 'ml-auto mt-3' : ''}`}>
            ${render__button('Cambia percorso', () => console.log('default'), this.from ? '' : 'disabled')}
          </div>
        </div>
      </div>
    </div>
  `;
}
