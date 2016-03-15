(function($) {
  $.fn.herofield = function() {

    return this.each(function() {

      var field = $(this);

      // avoid multiple init
      if(field.data('herofield')) return true;
      field.data('herofield', true);

      var select  = field.find('select');
      var preview = field.find('.input-preview');
      var link    = preview.parent('a');

      select.on('keydown change', function() {

        var option = select.find('option:selected');
        var url    = option.data('url');
        var thumb  = option.data('thumb');

        if( thumb ) {
          preview.html('<img src="' + thumb + '">');
        } else {
          preview.html('');
        }
        link.attr('href', url);

      }).trigger('change');

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