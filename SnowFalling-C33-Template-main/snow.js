class Snow{
    constructor(x,y,r){
        var option = {
            friction:0.1,
            density:1.0
        }
        this.image = loadImage("snow5.webp");
        this.body = Bodies.circle(x,y,r,option);
        this.r = r
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y, this.r ,this.r);
    }
}

