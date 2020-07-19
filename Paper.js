class Paper{
    constructor(x, y,diameter) {
      var options = {
          'restitution':0.3,
          'friction':0.3,
          'density':0.5
      }
      this.body = Matter.Bodies.circle(x, y ,diameter, options);
      this.diameter=diameter;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("pink");
      circle(pos.x,pos.y, this.diameter);
      
    }
  };