import { html } from 'lit-html';
import { render__button } from '../generics/buttons/index';
import { render__departureTimePicker } from './components/departure-time-picker';
import { render__fromTo } from './components/from-to';
import { render__resultsTab } from './components/results-tab';
import { render__resultsListElement } from './components/results-listElement';

export function render__search() {
  this.render__fromTo = render__fromTo.bind(this);
  this.render__departureTimePicker = render__departureTimePicker.bind(this);
  this.render__resultsListElement = render__resultsListElement.bind(this);
  this.render__resultsTab = render__resultsTab.bind(this);

  return html`
    <div class="search">
      <div class="search__search_container">
        <div class="row">
          <div class="col-12">
            ${this.render__fromTo()}
          </div>
          <div class="col-12 mt-md-4 d-flex justify-content-between align-items-center flex-wrap">
            <div class="search__footer ${this.departure_time > 1 ? 'full_width' : ''}">
              ${this.render__departureTimePicker()}
            </div>
            <div class=${`${this.departure_time > 1 ? 'ml-auto mt-3' : ''}`}>
              ${render__button('Cerca percorso', () => this.search(), this.from ? '' : 'disabled')}
            </div>
          </div>
        </div>
      </div>
      ${html`
        <div
          class=${`search__results`}
          style=${(this.search_results ? '' : `display: none; `) +
            (this.mobile_open
              ? `height: calc(100vh - ${this.search_results_height}px - 1rem - 26px);`
              : `height: calc(700px - ${this.search_results_height}px - 1rem - 16px);`)}
        >
          ${this.render__resultsTab()}
          <div class="search__results__list_container">
            ${this.search_results && this.search_results.map(this.render__resultsListElement)}
          </div>
        </div>
      `}
    </div>
  `;
}

// ${this.departure_time > 1 ? 'reduced_height' : ''}`
