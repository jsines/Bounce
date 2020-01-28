var gravity = 2;
var panSpeed = 0;
var player;

function setup() {
	window.canvas = createCanvas(800,1600);
 	player = new Player(canvas.width / 2, canvas.height / 2);	
}

function draw() {
	background(135, 206, 250);
	player.update();
	player.show();
}

function mouseClicked(){
	if(player.alive){
		player.velY -= 50;
	}else{
		delete(player);
		player = new Player(canvas.width / 2, canvas.height / 2);	
	}
}