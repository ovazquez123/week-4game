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


rubyValue = Math.floor(Math.random() * 12) + 1;
console.log(" rubyValue: " + rubyValue)

diamondValue = Math.floor(Math.random() * 12) + 1;
console.log(" diamondValue: " + diamondValue)	

amberJewelValue = Math.floor(Math.random() * 12) +1;
console.log(" amberJewelValue: " + amberJewelValue)

saphireValue = Math.floor(Math.random() * 12) +1;
console.log(" saphireValue: " + saphireValue)

$("#Total").html(rand);


$("#numWins").html(totalWins);


$("#numLosses").html(totalLosses);


$("#Sum").html(tally);

function addRubyValue ($addRubyValue){
	tally = tally + rubyValue;
	$("#Sum").html(tally);
	if (tally > rand) {
	$("#numLosses").html(totalLosses);
		totalLosses++;
		
		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		$("#numWins").html(totalWins);
		resetCrystalCollector()
	}
	console.log(tally)
}

function addDiamondValue ($addDiamondValue){
	tally = tally + diamondValue;
	$("#Sum").html(tally);
	if (tally > rand) {
		totalLosses++;
		$("#numLosses").html(totalLosses);

		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		$("#numWins").html(totalWins);
		resetCrystalCollector()
	}
	console.log(tally)
}

function addAmberJewelValue ($amberJewelValue){
	tally = tally + amberJewelValue;
	$("#Sum").html(tally);
	if (tally > rand) {
		totalLosses++;
		$("#numLosses").html(totalLosses);
		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		$("#numWins").html(totalWins);
		resetCrystalCollector()
	}
	console.log(tally)
}

function addSaphireValue ($addSaphireValue){
	tally = tally + saphireValue;
	$("#Sum").html(tally);
	if (tally > rand) {
		totalLosses++;
		$("#numLosses").html(totalLosses);
		resetCrystalCollector()
	}
		
	if (tally === rand){
		totalWins++;
		$("#numWins").html(totalWins);
		resetCrystalCollector()
	}
	console.log(tally)
}
    
function setupCrystalCollector ($setupCrystalCollector) {
	// First generate a random number
	rand = Math.floor(Math.random() * 50) + 25;
	console.log("Game Value: " + rand);

	
}
	function resetCrystalCollector ($resetCrystalCollector) {
	// reset random number
	rand = Math.floor(Math.random() * 102) + 19;
	$("#Total").html(rand);
	tally = 0
	$("#Sum").html(tally);

	rubyValue = Math.floor(Math.random() * 12) + 1;
		console.log(" rubyValue: " + rubyValue)

	diamondValue = Math.floor(Math.random() * 12) + 1;
		console.log(" diamondValue: " + diamondValue)	

	amberJewelValue = Math.floor(Math.random() * 12) +1;
		console.log(" amberJewelValue: " + amberJewelValue)

	saphireValue = Math.floor(Math.random() * 12) +1;
		console.log(" saphireValue: " + saphireValue)

	console.log("Game Value: " + rand);

}
