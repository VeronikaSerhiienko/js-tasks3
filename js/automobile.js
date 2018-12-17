var automobile = {
  brand : "toyota",
  yearRelease : "2015",
  mileage : "30000",
  color : "red",
  isIgnition : false,
  amountPetrol : 5,

  ignition: function() {
    this.isIgnition = true;
  },

  start: function() {
    if (this.isIgnition) {
      console.log(this.color.slice(0,1).toUpperCase() + this.color.slice(1).toLowerCase()  + " car " + this.brand +" has run!");
    } else {
      console.log("Turn on ignition first!");
    }
  },

  stop: function() {
    if (this.isIgnition) {
      this.isIgnition = false;
      console.log("Car has stopped");
    } else {
      console.log("Ignition was turned off");
    }
  },
  isPetrol: function() {
    if (this.amountPetrol > 0){ 
      this.ignition(); 
    } else {
      console.log("Petrol tank is empty");
    }
  },

  toTankUp: function() {
    this.amountPetrol = 10;
    console.log("Car is tanked up");
  }
};

automobile.ignition();
automobile.start();
automobile.stop();
automobile.isPetrol();
automobile.toTankUp();