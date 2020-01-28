

class Player {
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.velX = panSpeed;
		this.velY = 0;
		this.size = 50;
		this.score = 0;
		this.alive = true;
	}

	show(){
		fill(255,255,0)
		ellipse(this.x, this.y, this.size)
		fill(0)
		textSize(32)
		text(this.score, 400, 30)
	}

	update(){
		if(this.alive){
			this.velY += gravity;
			this.y += this.velY;
			this.x += this.velX;
			this.score += 1;
			if(this.y > 1600 || this.y < 0){
				this.alive = false;
			}
		}else{
			text("You died!", 350, canvas.height / 2)
		}
	}
}