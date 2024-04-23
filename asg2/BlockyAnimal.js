<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>CSE 160: Assignment 2 - Blocky Animal</title>
  </head>

  <body onload="main()">
    <canvas id="webgl" width="400" height="400">
        Please use a browser that supports "canvas"
    </canvas>
    <p id="numdot"> xxx </p>
    <button type="button" id="green">x</button>
    <button type="button" id="red">x</button>
    <button type="button" id="blue">x</button>
    <br>
    <br>
    <button type="button" id="clearButton">x</button>
    <!-- <br>
    <br> -->
    <button type="button" id="pointButton">x</button>
    <button type="button" id="triButton">x</button>
    
    <p>
    x <input type="range" min="0" max="100" value="100" class="slider" id="redSlide">
    <p>
    Yellow <input type="range" min="0" max="90" value="5" class="slider" id="yellowSlide">
    Animation:
      <button type="button" id="animationYellowOnButton">ON</button></button>
      <button type="button" id="animationYellowOffButton">OFF</button></button>
    <p>
    Magenta <input type="range" min="0" max="90" value="5" class="slider" id="magentaSlide">
      Animation:
        <button type="button" id="animationMagentaOnButton">ON</button></button>
        <button type="button" id="animationMagentaOffButton">OFF</button></button>
      
    <p>
    Camera Angle <input type="range" min="0" max="90" value="5" class="slider" id="angleSlide">

    <script src="lib/webgl-utils.js"></script>
    <script src="lib/webgl-debug.js"></script>
    <script src="lib/cuon-utils.js"></script>
    <script src="lib/cuon-matrix-cse160.js"></script>
    <script src="Point.js"></script>
    <script src="Triangle.js"></script>
    <script src="Circle.js"></script>
    <script src="Cube.js"></script>
    <script src="BlockyAnimal.js"></script>
  </body>
</html>
