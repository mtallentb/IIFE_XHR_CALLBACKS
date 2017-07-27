var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        showCarnivores(carnivores);
      });

      loader.open("GET", "carnivores.json");
      loader.send();

    },

 	loadHerbivores: function (callbackToInvoke) {
 	  var herbLoader = new XMLHttpRequest();

      herbLoader.addEventListener("load", function () {
        // Set the value of the private array
        herbivores = JSON.parse(this.responseText);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        showHerbivores(herbivores);
      });

      herbLoader.open("GET", "herbivores.json");
      herbLoader.send();
  	}
  }
})();
