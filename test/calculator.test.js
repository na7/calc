function Calculator() {
	if(!(this instanceof Calculator)) {
		return new Calculator();
	}
	
	this.expression ='';  //���݂̌v�Z����\���v���O����
	
	this.getExpression = function() {
		return this.expression;
	}
	

	this.append = function(ch) {
		return this.expression += ch;
	}
	
	this.clearEntry = function() {
		var mes = this.expression;
		this.expression = mes.substring(0,mes.length-1);
	}
	
	this.clear = function() {
		this.expression = '';
	}
	
	this.calculate = function() {
		val str = this.append('�~');
		str.replace(
		if(equal(this.append('�~'),'�~') {
			this
			}else if(equal(this.append(
		this.expression = eval(this.expression);
	}
}