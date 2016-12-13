(function ($, Drupal, CKEDITOR) {
  'use strict';

  CKEDITOR.plugins.add('quotebox', {
    requires: 'widget',
    lang: 'en,fr',
    icons: 'quotebox', // %REMOVE_LINE_CORE%

    init: function (editor) {
      var lang = editor.lang.quotebox;
      editor.widgets.add('insertQuotebox', {
        button: 'Create a quotebox',
        template:
        '<div class="quotebox">' +
          '<blockquote class="quotebox-quote">' + lang.quote + '</blockquote>' +
          '<div class="quotebox-author">' + lang.author + '</div>' +
        '</div>',

        editables: {
          quote: {
            selector: '.quotebox-quote',
            allowedContent: 'p br strong em'
          },
          author: {
            selector: '.quotebox-author',
            allowedContent: 'p strong em'
          }
        },

        allowedContent: 'div(!quotebox); blockquote(!quotebox-quote); div(!quotebox-author)',
        requiredContent: 'div(quotebox)',

        upcast: function (element) {
          return element.name === 'div' && element.hasClass('quotebox');
        }
      });

      if (editor.ui.addButton) {
        editor.ui.addButton('quotebox', {
          label: 'Quotebox',
          command: 'insertQuotebox'
        });
      }
    }
  });

})(jQuery, Drupal, CKEDITOR);