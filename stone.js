class Stone{
    constructor(x, y, r) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }
        this.x =x;
        this.y=y;
        this.r=r;
        this.image = loadImage("images/stone.png");
        this.body = Bodies.circle(this.x, this.y,this.r/2, options);
       
        
  
        World.add(world, this.body);
      }
      display(){
        var stonepos = this.body.position;
        push();
        translate(stonepos.x,stonepos.y);
        
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}