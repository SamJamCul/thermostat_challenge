describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20", function() {
    expect(thermostat.current_temp).toEqual(20);
  });

  it("current_temp can be increased", function(){
  	thermostat.increase_temp();
  	expect(thermostat.current_temp).toEqual(21);
  });

  it("current_temp can be decresed", function(){
  	thermostat.decrease_temp();
  	expect(thermostat.current_temp).toEqual(19);
  });
  it("current_temp cannot be decresed below 10", function(){
  	for(var i = 0; i < 11; i++)
  	{
  		thermostat.decrease_temp();
  	}
  	expect(thermostat.current_temp).toEqual(10);
  });

  it("responds power_saving_mode", function() {
  	expect(thermostat.power_saving_mode).toEqual(true);
  });

  it("current_temp cannot be increased past 25 when power saving mode is on", function() {
  	for(var i = 0; i < 6; i++) {
  		thermostat.increase_temp();
  	}
  	expect(thermostat.current_temp).toEqual(25);
  });

  it("current_temp cannot be increased past 32 when power saving mode is off", function() {
  	thermostat.power_saving_mode = false;
  	
  	for(var i = 0; i < 13; i++) {
  		thermostat.increase_temp();
  	}

  	expect(thermostat.current_temp).toEqual(32);
  });

  it("Temperature can be reset to 20", function() {
  	thermostat.increase_temp();
  	thermostat.reset();
  	expect(thermostat.current_temp).toEqual(20)
  });

  it("Energy usage is low if current_temp < 18", function(){
  	thermostat.current_temp = 17;
  	thermostat.set_energy_usage(thermostat.current_temp);
  	expect(thermostat.energy_usage).toEqual("Green");
  });
});