class Pin{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
		}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.image=loadImage("images/bowlingpin.png");
		this.body=Bodies.rectangle(x, y, w, h ,options);
 		World.add(world, this.body);

	}
	display()
	{
		var groundPos=this.body.position;		
		push()
		translate(groundPos.x, groundPos.y);
        imageMode(CENTER);
		fill(128,128,128);
		//rect(0,0,this.w, this.h);
        image(this.image, 0,0,this.w+40, this.h);
		pop()
			
	}
}