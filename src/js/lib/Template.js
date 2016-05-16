import $ from 'jquery';
import Handlebars from 'handlebars';

import bookingLang from '../../../lang/booking.json';
import signupLang from '../../../lang/signup.json';

const i18n = [];
i18n.booking = bookingLang;
i18n.signup = signupLang;

if (! window.location.origin) {
  window.location.origin = `${window.location.protocol}//${window.location.hostname}`;
  window.location.origin += (window.location.port ? `:${window.location.port}` : '');
}

const defaults = {
  lang: 'es',
  src: `${window.location.origin}/bower_components/copaair-widgets/templates`,
  callback() {},
};

class Template
{
  constructor(widget, options) {
    this.options = $.extend({}, defaults, options);

    if (typeof Handlebars !== 'undefined' && Handlebars !== null) {
      $.ajax({
        url: `${this.options.src}/${widget}.hbs`,
        success: (tpl) => {
          this.options.data = $.extend({}, this.options, i18n[widget][this.options.lang]);
          const html = this.compile(widget, tpl);
          this.options.callback(html);
        },
      });
    } else {
      console.error('This plugin requires Handlebars.js');
    }
  }

  compile(widget, tpl) {
    const template = Handlebars.compile(tpl);
    const html = template(this.options.data);
    return html;
  }
}

export default Template;
