$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.current_temp + "\xB0C");
  showName();
  updateOutdoorTemp($('#current-city').val());

  function showName() {
  	$('#powersaving').text(thermostat.power_saving_mode === true ? "on" : "off");
  }

  function updateTemperature() {
  	$('#temperature').text(thermostat.current_temp + "\xB0C");
  	thermostat.set_energy_usage(thermostat.current_temp);
  	$('#temperature').attr('class', thermostat.energy_usage);
  }

  function updateOutdoorTemp(city) {
  	var url = 'http://api.openweathermap.org/data/2.5/weather?q='
  	var api = '&appid=8194a98a5ec3dd33445879c80f199595';
  	var units = '&units=metric';
    $.get(url + city + api + units, function(data) {
      $("#outside-temp").text(data.main.temp + "\xB0C");
    })
  }

  $('#current-city').change(function() {
  	updateOutdoorTemp($('#current-city').val());
  })

  $('#temperature-up').click(function() {
    if (thermostat.current_temp === 32) {
      window.location.replace("https://en.unesco.org/themes/addressing-climate-change/climate-change-education-and-awareness");
    }
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
