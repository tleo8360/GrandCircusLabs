
var outputTemp;

function convertTemp(temp, unit){
	
	
	if (unit==='F')	{
	
	outputTemp=(temp-32)*(5/9);
	console.log("The temperature is equal to " + outputTemp + " degrees Celsius");
}
	else if (unit==='C') {
	outputTemp=(temp* (9/5)+32);
	console.log("The temperature is equal to " + outputTemp + " degrees Fahrenheit.");

}
}

convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(-40, "F");



