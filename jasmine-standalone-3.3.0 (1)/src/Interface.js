$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.current_temp + "\xB0C");
  showName();
  updateOutdoorTemp();

  function showName() {
  	$('#powersaving').text(thermostat.power_saving_mode === true ? "on" : "off");
  }

  function updateTemperature() {
  	$('#temperature').text(thermostat.current_temp + "\xB0C");
  	thermostat.set_energy_usage(thermostat.current_temp);
  	$('#temperature').attr('class', thermostat.energy_usage);
  }

  function updateOutdoorTemp() {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8194a98a5ec3dd33445879c80f199595&units=metric', function(data) {
      $("#outside-temp").text(data.main.temp + "\xB0C");
    })
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
