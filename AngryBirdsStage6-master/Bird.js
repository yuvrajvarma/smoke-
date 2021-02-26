class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage=loadImage("sprites/smoke.png");
    this.trajectory=[];
  }
    
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position); 
    super.display();
 for(var i=0;i<this.trajectory.length;i++){
    image(this.smokeimage,this.trajectory[i][0],this.trajectory[i][1]);

    }
  }
}
