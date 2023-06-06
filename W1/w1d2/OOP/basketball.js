const Athlete = require('./athlete')

class Basketball extends Athlete {
    constructor(nameInput, countryInput, gameTimeInput){
        super(nameInput, countryInput)
        this.gameTime = gameTimeInput
    }
    threePointShot(){
        console.log("Ice in my veins!!")
        this.energyLevel += 50
    }
}
let b1 = new Basketball("Lebron James", "USA")
let b2 = new Basketball("Chris Paul", "USA")

b1.displayInfo()
b1.playSport()

b1.displayInfo()
b1.takeIceBath()
b1.displayInfo()

b1.threePointShot()
b1.displayInfo()