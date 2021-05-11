class Snow {
    constructor(x, y) {

        var options ={
            
            restitution:0.4
        }
      
        this.body = Bodies.circle(x, y, 50,options); 
        this.r = 50;      
        this.image = loadImage ("snow4.webp")
      
        World.add(world,this.body);


    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        
        imageMode(CENTER);
        image(this.image,0, 0, this.r,this.r);
        pop();
    }
    updateY(){
        if(this.body.position.y>600){
            Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,100)})
        }
    }

};