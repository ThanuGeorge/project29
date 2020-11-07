class Sling {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    detatch(){
        this.sling.bodyA = null;
    }
    display(){
        if (this.sling.bodyA){
        var pos = this.sling.bodyA.position;
        stroke("red");
        strokeWeight(7);
        line(pos.x,pos.y,this.pointB.x,this.pointB.y)  
        }
    }
}