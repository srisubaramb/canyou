// Inheritance & Advanced OOP

// - Class inheritance (extends keyword)

// - Super keyword

// - Static methods

// - Private fields (#)

// - Method overriding

// - Practice: Class hierarchies

 

class Driver{

    #earings = 0

    constructor(name,car){

      this.name=name;

      this.car=car;

    }

    startDrive(){

       console.log(`The Driver ${this.name} started the ride`)

    }

    endDrive(fair){

      this.#earings+=fair

      console.log(`The drive is completed and amount payed ${this.#earings} and fair is ${fair}`)

    }

    // static method 

    static companyPolicy(){

      console.log(`The product is returned or exchanged within 42 hrs`)

    }

}

//inheritance -extends 

class PremiumDriver extends Driver{

    constructor(name,car,serviceType,fair){

        super(name,car)

        this.serviceType=serviceType
		this.fair = fair
    }

    //method overriding

    endDrive(){

      console.log(`The drive is ended with ${this.serviceType} and driven by ${this.name}`)

       super.endDrive(this.fair)

    }

    DrivingJourney(){

       console.log('The journey is ended')

    }

}

const obj1=new PremiumDriver('Ashok','Audi','Premium Type', 900)

// console.log(obj1.#earings)

obj1.startDrive()

obj1.endDrive(4000)

Driver.companyPolicy()

obj1.DrivingJourney()




