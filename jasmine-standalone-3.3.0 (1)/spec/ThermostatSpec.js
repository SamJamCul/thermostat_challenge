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
});