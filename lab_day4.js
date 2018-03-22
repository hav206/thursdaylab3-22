const printGreeting = (name) => {
	return "Hello there. " + name;
}

console.log(printGreeting("Slimer"));


const reverseWordOrder = (word) => {
	word = word.split();
	return word.reverse();
}

//console.log(reverseWordOrder("Call me Ishmael"));
console.log(reverseWordOrder("I use Lancome on my comb |"));


const calculate = (numb1, numb2, operator) =>{
	if (operator === "add")
	{
		return numb1 + numb2;
	}
	if(operator === "sub" )
	{
		return numb1 - numb2;
	}

	if(operator === "mult")
	{
		return numb1 * numb2;
	}
	if(operator === "div")
	{
		return numb1 / numb2;
	}
	if(operator === "exp")
	{
		return Math.pow(numb1, numb2);
	}
}

console.log(calculate(4,3, "sub"));
console.log(calculate(4,3, "exp"));

const pandigital = (number) => {
	let array = [];
	for(let i = 0; i < 10; i++)
	{
		array.push(i);
	}

	for(let j = 0; j < array.length;j++)
	{
		if(number[j] !== array[j]){
			return false;
		}
	}
	return true;
}

var current = [0,1,2,3,4,9,6,7,8,9];
console.log(pandigital(current));