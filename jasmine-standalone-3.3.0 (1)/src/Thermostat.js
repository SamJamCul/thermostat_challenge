function Thermostat() {
	this.current_temp = 20;
	this.power_saving_mode = true;
	this.energy_usage = "medium";
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
	this.set_energy_usage(this.current_temp);
};

Thermostat.prototype.decrease_temp = function() {
	if(this.current_temp > 10)
	{
		this.current_temp -= 1;
	}
	this.set_energy_usage(this.current_temp);
};

Thermostat.prototype.reset = function() {
	this.current_temp = 20;
	this.power_saving_mode = true;
	this.set_energy_usage(this.current_temp);
};

Thermostat.prototype.set_energy_usage = function(temperature) {
	switch(true)
	{
		case (temperature <= 18):
			this.energy_usage = "low";
			break;
		case ((temperature <= 25) && (temperature > 18)):
			this.energy_usage = "medium";
			break;
		case (temperature > 25):
			this.energy_usage = "high";
			break;
		default:
	}
};

Thermostat.prototype.toggle_power_saving = function() {
	this.power_saving_mode = !this.power_saving_mode;
};
