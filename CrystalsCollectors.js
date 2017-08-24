var totalWins = 0;
var totalLosses=0;
var crystalValue
var rand = 0;
var rubyValue;
var diamondValue;
var amberJewelValue;
var saphireValue;
var tally=0

// Initially, setup entire game layout.
setupCrystalCollector ();


rubyValue = Math.floor(Math.random() * 25) + 1;
console.log(" rubyValue: " + rubyValue)

diamondValue = Math.floor(Math.random() * 25) + 1;
console.log(" diamondValue: " + diamondValue)	

amberJewelValue = Math.floor(Math.random() * 25) +1;
console.log(" amberJewelValue: " + amberJewelValue)

saphireValue = Math.floor(Math.random() * 25) +1;
console.log(" saphireValue: " + saphireValue)

document.getElementById("Total").innerHTML = rand;

document.getElementById("numWins").innerHTML = totalWins;

document.getElementById("numLosses").innerHTML = totalLosses;

document.getElementById("Sum").innerHTML = tally;

function addRubyValue (){
	tally = tally + rubyValue;
	document.getElementById("Sum").innerHTML = tally;
	if (tally > rand) {
		totalLosses++;
		document.getElementById("numLosses").innerHTML = totalLosses;
		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		document.getElementById("numWins").innerHTML = totalWins;
		resetCrystalCollector()
	}
	console.log(tally)
}

function addDiamondValue (){
	tally = tally + diamondValue;
	document.getElementById("Sum").innerHTML = tally;
	if (tally > rand) {
		totalLosses++;
		document.getElementById("numLosses").innerHTML = totalLosses;
		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		document.getElementById("numWins").innerHTML = totalWins;
		resetCrystalCollector()
	}
	console.log(tally)
}

function addAmberJewelValue (){
	tally = tally + amberJewelValue;
	document.getElementById("Sum").innerHTML = tally;
	if (tally > rand) {
		totalLosses++;
		document.getElementById("numLosses").innerHTML = totalLosses;
		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		document.getElementById("numWins").innerHTML = totalWins;
		resetCrystalCollector()
	}
	console.log(tally)
}

function addSaphireValue (){
	tally = tally + saphireValue;
	document.getElementById("Sum").innerHTML = tally;
	if (tally > rand) {
		totalLosses++;
		document.getElementById("numLosses").innerHTML = totalLosses;
		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		document.getElementById("numWins").innerHTML = totalWins;
		resetCrystalCollector()
	}
	console.log(tally)
}
    
function setupCrystalCollector () {
	// First generate a random number
	rand = Math.floor(Math.random() * 50) + 25;
	console.log("Game Value: " + rand);

	
}
	function resetCrystalCollector () {
	// reset random number
	rand = Math.floor(Math.random() * 50) + 25;
	document.getElementById("Total").innerHTML = rand;
	tally = 0
	document.getElementById("Sum").innerHTML = tally;

	rubyValue = Math.floor(Math.random() * 25) + 1;
		console.log(" rubyValue: " + rubyValue)

	diamondValue = Math.floor(Math.random() * 25) + 1;
		console.log(" diamondValue: " + diamondValue)	

	amberJewelValue = Math.floor(Math.random() * 25) +1;
		console.log(" amberJewelValue: " + amberJewelValue)

	saphireValue = Math.floor(Math.random() * 25) +1;
		console.log(" saphireValue: " + saphireValue)

	console.log("Game Value: " + rand);

}

