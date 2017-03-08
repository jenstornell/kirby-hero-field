(function($) {

  $.fn.hero = function() {

    return this.each(function() {

      var field = $(this);

      // avoid multiple init
      if(field.data('hero')) return true;
      field.data('hero', true);

      // Hero
      var root = field.find('.hero-image img').attr('data-root');
      var select = field.find('select');
      var selected = select.find('option:selected');
      var image = field.find('.hero-image');
      var img = field.find('.hero-image img');
      img.attr('src', root + '/' + selected.val());
      if(selected.val()) {
      	image.addClass('active');
      }
      select.change(function() {
        img.attr('src', root + '/' + $(this).val());

        if($(this).val()) {
          image.addClass('active');
        } else {
          image.removeClass('active');
        }
      });

      var select  = field.find('select');
      var preview = field.find('.input-preview figure');
      var link    = preview.parent('a');

      select.on('keydown change', function() {

        var option = select.find('option:selected');
        var url    = option.data('url');
        var thumb  = option.data('thumb');

        if(option.val() === '') {
          url = '#';
        }

        if(thumb) {
          preview.attr('style', 'background-image: url(' + thumb + ')');          
        } else {
          preview.attr('style', 'background-image: none');
        }

        link.attr('href', url);

      }).trigger('change');

      field.find('.input-preview').on('click', function() {
        if($(this).attr('href') == '#') {
          return false;
        }
      });

      field.find('.input').droppable({
        hoverClass: 'over',
        accept: $('.sidebar .draggable-file'),
        drop: function(e, ui) {
          $(this).find('select').val(ui.draggable.data('helper')).trigger('change');
        }
      });

    });

  };

})(jQuery);