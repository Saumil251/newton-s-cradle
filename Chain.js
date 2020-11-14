class Chain{
    constructor(pointA, bodyB){
        var options = {
            pointA:pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointA=pointA;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    
    display(){
        
        var pointA = this.pointA;
        var pointB = this.chain.bodyB.position;
        strokeWeight(6);
        stroke("black");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
   
   
}
