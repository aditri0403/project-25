class dustbin {
constructor (x,y,width,height){
    var options = {
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.x=x;
    this.y=y;
    this.image = loadImage('pictures/dustbingreen.png');
    World.add(world,this.body);
}
display(){
    image(this.image,this.body.position.x,this.body.position.y,100,100);
    
}
};