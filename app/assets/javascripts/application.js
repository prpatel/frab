//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require jquery-ui
//= require jquery-ui-timepicker-addon
//= require bootstrap-alerts
//= require bootstrap-dropdown
//= require bootstrap-modal
//= require bootstrap-twipsy
//= require bootstrap-popover
//= require bootstrap-scrollspy
//= require bootstrap-tabs
//= require bootstrap-buttons
//= require cocoon

$(function() {
  $('.topbar').dropdown();
  $('.alert-message').alert();
  $('a[data-original-title]').popover();
});
