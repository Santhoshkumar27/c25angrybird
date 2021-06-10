class Paper {
    constructor(x, y) {
        var options = {
             isStatic:false,
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y,100,70, options);
        this.width = 100;
        this.height = 100;
        
        this.image=loadImage("paper.png");
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
  
      
       
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        

        
      }
  };