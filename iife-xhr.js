function showCarnivores (carnivores) {
  console.log(carnivores);
  let predsDiv = document.getElementById("carnivores");
  predsDiv.innerHTML += carnivores.carnivores.join(" ");
}

function showHerbivores (herbivores) {
	console.log(herbivores);
	let preyDiv = document.getElementById("herbivores");
  	preyDiv.innerHTML += herbivores.herbivores.join(" ");
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);