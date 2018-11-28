$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.current_temp + "\xB0C");
  showName();

  function showName() {
  	$('#powersaving').text(thermostat.power_saving_mode === true ? "on" : "off");
  }

  function updateTemperature() {
  	$('#temperature').text(thermostat.current_temp + "\xB0C");
  	thermostat.set_energy_usage(thermostat.current_temp);
  	$('#temperature').attr('class', thermostat.energy_usage);
  }

  $('#temperature-up').click(function() {
  	thermostat.increase_temp();
  	updateTemperature();
  })

  $('#temperature-down').click(function() {
  	thermostat.decrease_temp();
  	updateTemperature();
  })

  $('#temperature-reset').click(function() {
  	thermostat.reset();
  	updateTemperature();
    showName();
  })

  $('#powersaving').click(function() {
  	thermostat.toggle_power_saving();
  	updateTemperature();
    showName();
  })
})
