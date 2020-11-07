class Box {
    constructor(x,y,w,h){
        var options = {
            restitution: 0.4,
            density: 0.1,
            friction:0.6
        }
        this.object = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.object);
    }

    display(){
         var pos = this.object.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.object.angle);
        rectMode(CENTER);   
        rect(0,0,this.w,this.h);
        pop();
    }
}