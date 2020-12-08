// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
//VALIDATION
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required");
         event.preventDefault();
      } else if (isNaN(pilotNameInput.value) == false || isNaN(copilotNameInput.value) == false) {
         alert("Pilot and co-pilot names must be a string");
         event.preventDefault();
      } else if (isNaN(fuelLevelInput.value) == true || isNaN(cargoMassInput.value) == true) {
         alert("Fuel level and cargo mass values must be a number");
         event.preventDefault();
      }
      if (pilotNameInput.value && copilotNameInput.value) {
         //event.preventDefault();
         document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
         document.getElementById("launchStatus").style.color = 'green';
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} ready`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} ready`;
         document.getElementById("faultyItems").style.visibility = 'visisble';
      }
      if (fuelLevelInput.value < 10000) {
         event.preventDefault();
         document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = 'red';
         document.getElementById("faultyItems").style.visibility = 'visible';
      }
      if (cargoMassInput.value > 10000) {
         event.preventDefault();
         document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = 'red';
         document.getElementById("faultyItems").style.visibility = 'visible';
      }      
   });
});

//This block of code shows how to format the HTML once you fetch some planetary JSON!
{/* <h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}"> */}

// document.getElementById("missionTarget").innerHTML = "<h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}"></img>"