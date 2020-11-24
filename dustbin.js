class dustbin{
    constructor(x,y,width,height){
        var options={
            density:1.2,
            friction:0.8
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){
        var dustbinpos = this.body.position;

        push()
        translate(dustbinpos.x,dustbinpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        rect(0,0,20,100);
        pop()
    }
}