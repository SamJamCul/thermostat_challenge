function Thermostat() {
	this.current_temp = 20;
}

Thermostat.prototype.increase_temp = function() {
	this.current_temp += 1;
};

Thermostat.prototype.decrease_temp = function() {
	if(this.current_temp > 10)
	{
		this.current_temp -= 1;
	}
};