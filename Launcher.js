class Launcher {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
           pointB:pointB,
            stiffness:0.004,
            length:10
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }


    display(){
       // var pointA=this.launcher.bodyA.position;
       // var pointB=this.pointB;
       strokeWeight(4);
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y);
    }

    fly(){
        this.launcher.bodyA=null;
      }
    attach(body){
        this.launcher.bodyA = body;
      }




}