class Superghost extends BaseClass {
  constructor(x,y){
    super(x,y,100,100);
    this.image = loadImage("sprites/superghost.gif");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
  
  }
}
