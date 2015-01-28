// Takes in arguments form console and sums them

var numbers = process.argv.splice(2);
var sum = 0;

numbers.forEach(function(number) {
	sum += ~~number;
});

console.log(sum);
