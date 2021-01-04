class Paper  {
    constructor(x,y,r)   {
        var options = {
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.radius = r;
        this.image = loadImage("paper.png")
       // this.image = 0.2
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image, 0, 0, this.radius, this.radius);
            pop();
        }

}