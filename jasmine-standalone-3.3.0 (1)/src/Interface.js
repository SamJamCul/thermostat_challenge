$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.current_temp + "\xB0C");
  $('#powersaving').text(showName())

  function showName() {
  	thermostat.power_saving_mode === true ? "on" : "off";
  }

  function updateTemperature() {
  	$('#temperature').text(thermostat.current_temp + "\xB0C")
  }

  $('#temperature-up').click(function() {
  	thermostat.increase_temp();
  	updateTemperature();
  })

  $('#temperature-down').click(function() {
  	thermostat.decrease_temp();
  	updateTemperature();
  })

  $('#reset').click(function() {
  	thermostat.reset();
  	updateTemperature();
  })

  $('#power-saving-status').click(function() {
  	thermostat.toggle_power_saving();
  	updateTemperature();
  })
})