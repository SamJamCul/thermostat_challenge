function Thermostat() {
	this.current_temp = 20;
	this.power_saving_mode = true;
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