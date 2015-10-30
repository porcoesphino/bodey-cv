+function () {
  $('.no-javascript').hide();
  el_alert = $('.alert-dismissible');
  if (el_alert.length > 1) {
    console.error('The alert dismissing code assumes only one alert and this has changed.');
  }
  if (el_alert.children(':visible').length === 1) {
    el_alert.hide();
  }
  $('#intro-buttons').html('<input class="btn btn-primary btn-xs" type="button" id="expand-button">');
  var EXPAND_TEXT_ALL = "Expand all";
  var EXPAND_TEXT_NONE = "Collapse all";
  $('#expand-button')[0].value = EXPAND_TEXT_ALL;
  $('#expand-button').click(function() {
    switch($('#expand-button')[0].value) {
      case EXPAND_TEXT_ALL: {
        $('.collapse').collapse('show');
        $('#expand-button')[0].value = EXPAND_TEXT_NONE;
        break;
      }
      case EXPAND_TEXT_NONE: {
        $('.collapse').collapse('hide');
        $('#expand-button')[0].value = EXPAND_TEXT_ALL;
        break;
      }
    }
    $(this).blur();
  });
}();
