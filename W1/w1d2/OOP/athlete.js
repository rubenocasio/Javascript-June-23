
//Athlete attributes: name, country, sport, energylevel, salary

class Athlete {
    constructor(nameInput, countryInput, sportInput, energyLevel = 100){
        this.name = nameInput;
        this.country = countryInput;
        this.sport = sportInput;
        this.energyLevel = energyLevel;
        this.salary = 10000 
    }

    sayName() {
        console.log("Hi my name is " + this.name)
    }
    displayInfo(){
        console.log(`Details: \n Name: ${this.name} \n Country: ${this.country} \n Sport: ${this.sport} \n Energy Level: ${this.energyLevel} \n Salary: ${this.salary}`)
    }

    playSport(){
        this.energyLevel -= 10;
        console.log("I'm flopping on the floor for no reason!!")
    }

    takeIceBath(){
        this.energyLevel += 10
        console.log("I'm freezing!!")
    }
}

let a1 = new Athlete("Steve Fontaine", "Poland" ,"Track & Field" + this.energyLevel)

// a1.sayName()
// a1.displayInfo()
// a1.playSport()
// a1.displayInfo()
// a1.takeIceBath()
// a1.displayInfo()

module.exports = Athlete;