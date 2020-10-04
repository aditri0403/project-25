class Paper {
    constructor (x,y){
        var options ={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,55,options);
        this.image = loadImage('pictures/paper.png');
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
    display(){
        
        image(this.image,this.body.position.x,this.body.position.y,70,70);
        
    }
};