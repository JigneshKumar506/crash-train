class Rock {
    constructor (x,y) {

        var option = {
            isStatic : false 
        }
        
        this.body = Bodies.rectangle ( x,y , 100,100, option ) 
        World.add (myWorld, this.body)
       // Matter.Body.setMass(this.body,this.body.mass*5);

        this.image = loadImage ("images/rock.png")
    }
 
    show () {

        imageMode (CENTER)
        image (this.image , this.body.position.x , this.body.position.y,  100,100)
    }
}