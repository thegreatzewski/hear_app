var mic;
function setup() {
    window = windowWidth;

    mic = new p5.AudioIn();
    mic.start();
    frameRate(2);
    createCanvas(1000, 1000);
    textSize(200);

}
function draw() {
    background('#33333 ')
    var vol = mic.getLevel();
    // send vol to the server every frame. The framerate is 2 fps so this is every 500ms.
    // If you increrase the framerate, maybe you should use setTimeout instead
    
    
    background(220);
    textSize(16);
    fill(color('Green'));
    textAlign(CENTER);
    text("do you allow microphone permissions?", 600, 300);
    ellipse(mouseX, mouseY, vol*1000, vol*1000);
    
  

    console.log(vol);
    d = {
        "volume": vol
    }

    $.get("/publish", data=d, crossdomain=false)
    //also using jquery for requests is like using an elephant gun to kill gophers

    
}
