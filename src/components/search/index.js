import { html } from 'lit-html';
import { CAR_TAB, PUBLIC_TRANSPORT_TAB } from '../../constants';
import { repeatHtml } from '../../utilities';
import { render__button } from '../generics/buttons/index';
import { render__options_panel } from '../options_panel';
import { render__departureTimePicker } from './components/departure-time-picker';
import { render__fromTo } from './components/from-to';
import { render__carListElement } from './components/results-carListElement';
import { render__resultsListElement } from './components/results-listElement';
import { render__resultsTab } from './components/results-tab';
import settingsIcon from '../../img/settings.svg';
import chevronDown from '../../img/chevron-down-green.svg';

export function render__search() {
  this.render__fromTo = render__fromTo.bind(this);
  this.render__departureTimePicker = render__departureTimePicker.bind(this);
  this.render__carListElement = render__carListElement.bind(this);
  this.render__resultsListElement = render__resultsListElement.bind(this);
  this.render__resultsTab = render__resultsTab.bind(this);
  this.render__options_panel = render__options_panel.bind(this);

  const loadingSkeleton = html`
    <div class="search__results__listElement">
      <div class="loading-skeleton small"><div></div></div>
      <div class="loading-skeleton big"><div></div></div>
    </div>
  `;

  const renderList = () => {
    switch (this.active_tab) {
      case CAR_TAB:
        if (this.is_fetching_here) {
          return repeatHtml(loadingSkeleton, 5);
        }
        return this.car_results
          ? this.car_results.route.map(this.render__carListElement)
          : html`
              <p class="no_results_message">${this.t('no_results_with_car')}</p>
            `;
      case PUBLIC_TRANSPORT_TAB:
        if (this.is_fetching_efa) {
          return repeatHtml(loadingSkeleton, 5);
        }
        return this.search_results
          ? this.search_results.map(this.render__resultsListElement)
          : html`
              <p class="no_results_message">${this.t('no_results_with_public_means')}</p>
            `;
      default:
        return '';
    }
  };

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
            <div class="search__options_button">
              ${render__button(
                html`
                  <img src="${settingsIcon}" /> ${this.t('options')} <img src="${chevronDown} " class="chevron" />
                `,
                this.toggle_options_panel,
                `flat green ${this.is_travel_options_panel_open ? 'open' : 'closed'}`
              )}
            </div>
          </div>
        </div>
      </div>
      <div class="search__search_results_container">
        ${this.render__options_panel()}

        <div class=${`search__results`} style=${this.getResultsStyle()}>
          ${this.render__resultsTab()}
          <div class="search__results__list_container">
            ${renderList()}
          </div>
        </div>
      </div>

      ${this.car_results || this.search_results
        ? html`
            <div class="search__data_provider_url">
              ${this.t('data_provided_by')}${' '}
              <a href="https://www.suedtirolmobil.info/" target="_blank">https://www.suedtirolmobil.info/</a>
            </div>
          `
        : ''}
    </div>
  `;
}

// ${this.departure_time > 1 ? 'reduced_height' : ''}`
