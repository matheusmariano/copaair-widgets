import $ from 'jquery';
import i18n from '../../../lang/datepicker.json';

const defaults = {
  departureSelector: '.copaair-booking-datepicker-departure',
  returnSelector: '.copaair-booking-datepicker-return',
  dateRules: {
    today: new Date(),
    weekLater: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  },
  lang: 'es',
  beforeShow(input, isnt) {
    setTimeout(() => {
      isnt.dpDiv.position({
        my: 'left bottom',
        at: 'left top',
        of: input,
      });
    }, 0);
  },
};

/**
 * Datepicker module
 */
class Datepicker {

  constructor(options) {
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
  }

  /**
   * Render date picker inside the booking form
   * setups the defaults dates and language
   */
  render() {
    this.setLocale();
    this.setDefaultDates();
    this.events();
  }

  /**
   * Set defaults dates
   * this consist in set current date for departure
   * and one week later for return
   */
  setDefaultDates() {
    const dateRules = this.options.dateRules;
    const $departureField = $(this.options.departureSelector);
    const $returnField = $(this.options.returnSelector);

    this.options.minDate = new Date();

    $departureField.datepicker(this.options);
    $returnField.datepicker(this.options);

    $departureField.datepicker('setDate', dateRules.today);
    $returnField.datepicker('setDate', dateRules.weekLater);
  }

  events() {
    // const $departureField = $(this.options.departureSelector);
    // const $returnField = $(this.options.returnSelector);

    // $departureField.datepicker('option', 'onSelect', this.onSelectOutbound);
  }

  onSelectOutbound(dateText, inst) {
    const $returnField = $(this.options.returnSelector);
    const date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay);

    // this sets the inbound date picker to a week later of current selection
    const weeklater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    $returnField.datepicker('setDate', weeklater);
  }

  /**
   * Configure datepicker depending on the
   * localization
   */
  setLocale() {
    const regional = i18n[this.options.lang].regional;
    $.datepicker.setDefaults(regional);
  }

}

export default Datepicker;
