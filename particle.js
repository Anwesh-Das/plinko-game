class Particle{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.4,
        }
            
      this.r=r;
      this.body = Bodies.circle(x,y,this.r,options);
      this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);
      
   }
     display(){
      var plinkopos=this.body.position;
      var angle = this.body.angle;
      push();
      translate(plinkopos.x,plinkopos.y);
      rotate(angle);
      noStroke();
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
    }
}