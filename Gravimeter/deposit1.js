// SKETCH FOR THE THIRD PAGE

// -------------------------------variables used-------------------------------

// colors array
var colors = [];

// terrain density array
var matrixValues = [];

// anomalies array
var anomalies = [];

// volume per cell
var volume = 16;

// weight
let bob;

// bob reference point
let anchor;

// --- Motion Variables ---

// bob velocity
let velocity;

// force vector
let force;

// displacement
let displacement;

// ------------------------

// distance between the anchor and the bob
let restLength = 200.965;

// spring constant - kgs^{-2}
let k = 0.2;

// --- Gravity Related Constants ---

// gravity vector
let gravity;

// gravitational constant - m^3/kgs^{-2}
let G = 6.67384 * Math.pow(10, -11);

// total vector
let gravity_total_vector;

// gravity total
let gravity_total = 0;

// g anomaly
let anomaly;

// scaled values
let anomaly_scaled;
let gravity_total_scaled;

// ---------------------------------

// image variables
let img_spring, img_sphereWeight, img_springBase, img_logo, img_leftPanel;

let lim = 0;

// ------------colors---------------

  // soil = (134, 94, 77)
  // halite = (201, 192, 187)

// ----------------------------------------------------------------------------

// terrain object
function terrainObject(density, x, y, dimension){
    this.density = density;
    this.x = x;
    this.y = y;
    this.dimension = dimension;
}
  
// color object
function colorObject(r, g, b){
    this.r = r;
    this.g = g;
    this.b = b;
}

// function for getting a randomm number from min to max
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// change page to subduction zone
function changePageSZ() {
    location.replace("subduction.html");
}

// change page to soil deposit
function changePageSD1(){
    location.replace("deposit1.html");
}

// change page to gravimeter
function changePageGM(){
    location.replace("gravimeter.html");
}

// change page to welcome
function changePageW(){
    location.replace("index.html");
}

// function for reading the images
function readImages(){
    img_spring = loadImage('vector_items/spring.png');
    img_sphereWeight = loadImage('vector_items/sphere_weight.png');
    img_springBase = loadImage('vector_items/spring_base.png');
    img_leftPanel = loadImage('vector_items/left_panel.png');
}

// function for creating the vectors
function makeVectors(){
    bob = createVector(windowWidth/2, 0);
    anchor = createVector(windowWidth/2, 0);
    velocity = createVector(0, 0);
    gravity = createVector(0, 9.80665);
    gravity_total_vector = createVector(0, gravity_total);
}

// function for adding the buttons
function addButtons(){

    // subduction zone button
    button_link1 = createImg('vector_items/activity_2.png');
    button_link1.position(15*windowWidth/16, 3*windowHeight/8);
    button_link1.style('width', '100px');
    button_link1.style('height', '100px');
    button_link1.mousePressed(changePageSZ);

    // gravimeter button
    button_link2 = createImg('vector_items/activity_1.png');
    button_link2.position(15*windowWidth/16, 1*windowHeight/4);
    button_link2.style('width', '100px');
    button_link2.style('height', '100px');
    button_link2.mousePressed(changePageGM);

    // soil deposit 1 button
    button_link3 = createImg('vector_items/activity_3.png');
    button_link3.position(15*windowWidth/16, 5*windowHeight/10);
    button_link3.style('width', '100px');
    button_link3.style('height', '100px');
    button_link3.mousePressed(changePageSD1);

    button_link4 = createImg('vector_items/logo.png');
    button_link4.position(5, -1);
    button_link4.style('width', '400px');
    button_link4.style('height', '120px');
    button_link4.mousePressed(changePageW);
}

// function for button for graph
function addButtons_draw(){
    // Increment button
    button_add = createButton('>');
    button_add.position(70, 483);
    button_add.style('width', '25px');
    button_add.style('height', '30px');
    button_add.mousePressed(add); 
  
    // Decrement button
    button_subtract = createButton('<');
    button_subtract.position(40, 483);
    button_subtract.style('width', '25px');
    button_subtract.style('height', '30px');
    button_subtract.mousePressed(subtract);
  
    // Graph button
    button_graph = createButton("Graph");
    button_graph.position(100, 483);
    button_graph.style('width', '80px');
    button_graph.style('height', '30px');
    button_graph.mousePressed(add_continuous);
  
    button_clearGraph = createButton("Clear");
    button_clearGraph.position(550, 483);
    button_clearGraph.style('width', '80px');
    button_clearGraph.style('height', '30px');
    button_clearGraph.mousePressed(clear_graph);
  }

//setup terrain function
function setupTerrain(){
    for (var i = Math.floor(windowHeight/1.50); i < windowHeight; i+=10){
    
        colors[i] = [];

        for (var j = 0; j < windowWidth; j+=10){
            if (j > ((windowWidth/2))){
                // ------------ right side ----------------------------------------------------------//
                if (j > (windowWidth/2)+370){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)+10)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)+20)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)+30)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)+40)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)+50)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)+60)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)+70)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+140) && (j == (windowWidth/2)+80)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+150) && (j == (windowWidth/2)+90)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+150) && (j == (windowWidth/2)+100)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+150) && (j == (windowWidth/2)+110)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+160) && (j == (windowWidth/2)+120)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+170) && (j == (windowWidth/2)+130)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+170) && (j == (windowWidth/2)+140)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+170) && (j == (windowWidth/2)+150)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+180) && (j == (windowWidth/2)+160)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+180) && (j == (windowWidth/2)+170)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+180) && (j == (windowWidth/2)+180)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+190) && (j == (windowWidth/2)+190)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+200) && (j == (windowWidth/2)+200)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+210) && (j == (windowWidth/2)+210)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+210) && (j == (windowWidth/2)+220)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+210) && (j == (windowWidth/2)+230)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+220) && (j == (windowWidth/2)+240)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+230) && (j == (windowWidth/2)+250)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+230) && (j == (windowWidth/2)+260)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+230) && (j == (windowWidth/2)+270)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+240) && (j == (windowWidth/2)+280)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+250) && (j == (windowWidth/2)+290)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+250) && (j == (windowWidth/2)+300)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+250) && (j == (windowWidth/2)+310)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+260) && (j == (windowWidth/2)+320)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+270) && (j == (windowWidth/2)+330)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+270) && (j == (windowWidth/2)+340)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+280) && (j == (windowWidth/2)+350)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+290) && (j == (windowWidth/2)+360)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else if ((i <= (Math.floor(windowHeight/1.50))+300) && (j == (windowWidth/2)+370)){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else{
                    colors[i][j] = new colorObject(201, 192, 187);
                }
            }
            // --------------------- left side --------------------------------------------------//
            else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2))){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)-10)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)-20)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)-30)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)-40)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)-50)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+130) && (j == (windowWidth/2)-60)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+140) && (j == (windowWidth/2)-70)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+140) && (j == (windowWidth/2)-80)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+150) && (j == (windowWidth/2)-90)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+150) && (j == (windowWidth/2)-100)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+160) && (j == (windowWidth/2)-110)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+160) && (j == (windowWidth/2)-120)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+160) && (j == (windowWidth/2)-130)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+170) && (j == (windowWidth/2)-140)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+170) && (j == (windowWidth/2)-150)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+180) && (j == (windowWidth/2)-160)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+190) && (j == (windowWidth/2)-170)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+190) && (j == (windowWidth/2)-180)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+190) && (j == (windowWidth/2)-190)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+200) && (j == (windowWidth/2)-200)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+200) && (j == (windowWidth/2)-210)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+210) && (j == (windowWidth/2)-220)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+210) && (j == (windowWidth/2)-230)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+210) && (j == (windowWidth/2)-240)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+220) && (j == (windowWidth/2)-250)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+230) && (j == (windowWidth/2)-260)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+230) && (j == (windowWidth/2)-270)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+230) && (j == (windowWidth/2)-280)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+240) && (j == (windowWidth/2)-290)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+250) && (j == (windowWidth/2)-300)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+250) && (j == (windowWidth/2)-310)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+260) && (j == (windowWidth/2)-320)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+270) && (j == (windowWidth/2)-330)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+270) && (j == (windowWidth/2)-340)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+280) && (j == (windowWidth/2)-350)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+280) && (j == (windowWidth/2)-360)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+290) && (j == (windowWidth/2)-370)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else if ((i <= (Math.floor(windowHeight/1.50))+300) && (j == (windowWidth/2)-380)){
                colors[i][j] = new colorObject(134, 94, 77);
            }
            else{
                if (j < (windowWidth/2)-370){
                    colors[i][j] = new colorObject(134, 94, 77);
                }
                else{
                    colors[i][j] = new colorObject(201, 192, 187);
                }
            }
        }
    }
}

// compute for the anomaly per column
function computeAnomaly(){

    for (var i = Math.floor(windowHeight/1.50); i < windowHeight; i+=10){
        for (var j = 0; j < windowWidth; j+=10){
            var summation = 0;
            for (var k = 0; k < windowWidth; k+=10){
                summation = summation + (matrixValues[i][j].density * volume);
            }
            anomalies[j] = summation * G;
        }
    }
}

// generates the terrain
function generateTerrain(){
    // generates 2d matrix
    for (var i = Math.floor(windowHeight/1.50); i < windowHeight; i+=10){
        matrixValues[i] = []
        for (var j = 0; j < windowWidth; j+=10){
            if (colors[i][j].r == 134){
                matrixValues[i][j] = new terrainObject(getRandomArbitrary(1280, 1380), j, i, 10);
            }
            else{
                matrixValues[i][j] = new terrainObject(getRandomArbitrary(1980, 2170), j, i, 10);
            }
        }
    }
    computeAnomaly();
}

// draw and color terrain
function drawTerrain(){
    strokeWeight(0.1);
    for (var i = Math.floor(windowHeight/1.50); i < windowHeight; i+=10){
        for (var j = 0; j < windowWidth; j+=10){
            fill(colors[i][j].r, colors[i][j].g, colors[i][j].b);
            rect(j, i, 10, 10);
        }
    }
}

// add increment for graph
function add(){
    loop();
    if(lim < 0){
      lim += 10;
    }
    lim += 10;
  }
  
  // subtract increment for graph
  function subtract(){
    loop();
    if(lim < 10){
      return;
    }
    lim -= 10;
  }
  
  // graph
  function add_continuous(){
    loop();
    var i = 0;  
    lim = 0;
    var timer = setInterval(function(){
      lim += 10;
      i++;
      if(i >= anomalies.length / 10){ 
        clearInterval(timer);
      } else if (lim < 0){
        clearInterval(timer);
      }
    }, 100);
  }
  
  // clear graph
  function clear_graph(){
    noLoop();
    lim = -20;
  }

// setup function
function setup(){
    createCanvas(windowWidth, windowHeight);
    readImages();
    makeVectors();
    addButtons();
    setupTerrain();
    generateTerrain();
}

function draw(){
    background(237, 248, 250);
    textSize(30);

    addButtons_draw();

    drawTerrain();
    // drawGraph();

    fill(0, 0, 0);
    strokeWeight(0);

    // length in pixels
    spring_length = bob.y - anchor.y;

    // length in mm
    actual_length = spring_length/50;

    // images
    image(img_spring, windowWidth/2 - 27, 50, 54, spring_length-85);
    image(img_sphereWeight, windowWidth/2 - 39, bob.y-35, 78, 70);
    image(img_springBase, windowWidth/2 - 195, 0, 390, 52);
    image(img_leftPanel, windowWidth/2 - 950, 120, 640, 400);

    // graph background
  fill(255, 255, 255);
  rect(20, 130 , 620, 350);

   //lines
  fill(0, 0, 0);
  stroke(0);
  strokeWeight(1);
  textSize(16);

  // y-axis
  line(100, 450, 100, 150);
  line(630, 450, 630, 150);
  
  // x-axis 45.0
  line(100, 450, 630, 450);
  text('45.0', 66, 455);

  // x-axis 37.5
  line(100, 350, 630, 350);
  text('37.5', 66, 355);

  // x-axis 30.0
  line(100, 250, 630, 250);
  text('30.0', 66, 255);

  // x-axis 22.5
  line(100, 150, 630, 150);
  text('22.5', 66, 155);

  // y-axis label
  textSize(20);
  text('Δg', 50, 285);
  textSize(20);
  text('(mGal)', 30, 315);

  // x-axis label
  textSize(20);
  text('index (j)', 330, 470);

  // graph title
  textSize(20);
  text('Mineral Deposit Subduction Zone', 210, 505);
  
    // texts
    textSize(30);
    text('Spring length: ' + actual_length.toFixed(3) + ' mm', 790, 35);

    let count = 100;
    let px = count;
    let py = anomalies[0] * Math.pow(10, 5)+250;
  
    stroke(0);
    strokeWeight(1);
  
    for (var i = 0; i < lim; i+=10){
  
      force = p5.Vector.sub(bob, anchor);
  
      // displacement - change in length
      displacement = force.mag() - restLength;
      
      // normalize the force vector
      force.normalize();
      
      // spring force (F = -k(s - s0))
      force.mult(-1 * k * displacement);
  
      anomaly = anomalies[i];
      
      // scaled values (actual length and pixels)
      anomaly_scaled = Math.pow(10,5) * anomaly;
  
      // console.log(anomaly);
      gravity_total_scaled = gravity.y + anomaly_scaled;
  
      // moves the bob -> assumption: F = m*a (if m == 1kg)
      velocity.add(force);
      velocity.add(gravity_total_vector);
      bob.add(velocity);
  
      // damping
      velocity.mult(0.38);
  
      // adjust gravity total 
      gravity_total_vector.y = gravity_total_scaled;
      
      let x = count;
      let y = anomalies[i] * Math.pow(10, 5)*10;
      line(px, py-50, x, y-50);
      px = x;
      py = y;
      count += 2.765;
    }
}