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

$("#Total").html("rand");


$("#numWins").html("totalWins");


$("#numLosses").html("totalLosses");


$("#Sum").html("tally");

function addRubyValue (){
	tally = tally + rubyValue;
	$("#Sum").html("tally");
	if (tally > rand) {
	$("#numLosses").html("totalLosses");
		totalLosses++;
		
		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		$("#numWins").html("totalWins");
		resetCrystalCollector()
	}
	console.log(tally)
}

function addDiamondValue (){
	tally = tally + diamondValue;
	$("#Sum").html("tally");
	if (tally > rand) {
		totalLosses++;
		$("#numLosses").html("totalLosses");

		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		$("#numWins").html("totalWins");
		resetCrystalCollector()
	}
	console.log(tally)
}

function addAmberJewelValue (){
	tally = tally + amberJewelValue;
	$("#Sum").html("tally");
	if (tally > rand) {
		totalLosses++;
		$("#numLosses").html("totalLosses");
		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		$("#numWins").html("totalWins");
		resetCrystalCollector()
	}
	console.log(tally)
}

function addSaphireValue (){
	tally = tally + saphireValue;
	$("#Sum").html("tally");
	if (tally > rand) {
		totalLosses++;
		$("#numLosses").html("totalLosses");
		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		$("#numWins").html("totalWins");
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
	$("#Total").html("rand");
	tally = 0
	$("#Sum").html("tally");

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
