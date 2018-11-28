function Thermostat() {
	this.current_temp = 20;
	this.power_saving_mode = true;
	this.energy_usage = "Black";
};

Thermostat.prototype.increase_temp = function() {
	if (this.power_saving_mode) {
		if (this.current_temp < 25) {
		this.current_temp += 1;
		}
	}
	else {
		 if (this.current_temp < 32) {
		 	this.current_temp += 1;
		 }	
	}
};

Thermostat.prototype.decrease_temp = function() {
	if(this.current_temp > 10)
	{
		this.current_temp -= 1;
	}
};

Thermostat.prototype.reset = function() {
	this.current_temp = 20;
};

Thermostat.prototype.set_energy_usage = function(temperature) {
	switch(true)
	{
		case (temperature <= 18):
			this.energy_usage = "Green";
			break;
		case ((temperature <= 25) && (temperature > 18)):
			this.energy_usage = "Black";
			break;
		case (temperature > 25):
			this.energy_usage = "Red";
			break;
		default:
	}	
};

Thermostat.prototype.toggle_power_saving = function() {
	this.power_saving_mode = !this.power_saving_mode;
};
