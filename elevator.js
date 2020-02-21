//design an elevtor system for a building
// first 5floors 1 elevator
//second 2 elevators
// third 50 floors and 

$(document).ready(function() {
  let elevator = $("#my-elevator");
  let speed = 100;
    $( document ).keydown(function(e) {   

      var left = parseInt(elevator.css('left'));
      var top = parseInt(elevator.css('top'));
      if (e.which == 37){
        elevator.css('left', (left - speed) + "px");
      } else if (e.which == 38){
        elevator.css('top', (top - speed) + "px");
      } else if (e.which == 39){
        elevator.css('left', (left + speed) + "px");
      } else if (e.which == 40){
        elevator.css('top', (top + speed) + "px");
      }
 });
    $(".click-me").click(function(e){
        let floorHeight =($(this).data().floor)*100; elevator.css({top: floorHeight + "px"});
    
    })
    $(".click").click(function(e){
        let floorHeight =($(this).data().floor)*100; elevator.css({top: floorHeight + "px"});
    
    })
});