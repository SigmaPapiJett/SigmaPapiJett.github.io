$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 650, 250, 20);
createPlatform(800, 550, 60, 20,);
createPlatform(1000, 500, 70, 20,);
createPlatform(800, 400, 70, 20,);
createPlatform(800, 550, 70, 20,);
createPlatform(500, 400, 70, 20,);
createPlatform(500, 300, 70, 20,);
createPlatform(700, 180, 200, 20,);


    // TODO 3 - Create Collectables
createCollectable("steve", 600, 200);
createCollectable("diamond", 800, 150);
createCollectable("diamond", 800, 500);



    
    // TODO 4 - Create Cannons
createCannon("top", 200, 1000);
createCannon("right", 300, 1000);
createCannon("left", 650, 900);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
