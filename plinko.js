class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
            
      this.r=r;
      this.body=Bodies.circle(x,y,this.r/2,options);
      World.add(world,this.body);
    
      
   }
     display(){
      var plinkopos=this.body.position;
      var angle = this.body.angle;
      push()
      translate(plinkopos.x,plinkopos.y);
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop()
    }
}