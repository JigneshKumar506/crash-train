class Boggie {
    constructor (x,y) {

        var option = {
            isStatic : false 
        }
        
        this.body = Bodies.rectangle ( x,y , 50,50, option ) 
        World.add (myWorld, this.body)
        Matter.Body.setMass(this.body,this.body.mass*5);

        this.image = loadImage ("images/coach.png")
    }
 
    show () {

        imageMode (CENTER)
        image (this.image , this.body.position.x , this.body.position.y,  50,50)
    }
}