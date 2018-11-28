$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.current_temp + "\xB0C");
})