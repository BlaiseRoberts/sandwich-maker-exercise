"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = ((maker) => {

  // Private variable to store the different meat prices
  var veggiePrices = {
  	lettuce: 0.50,
  	tomato: 0.50,
  	onion: 0.25
  };

  //Augment the original object with another method
  maker.addVeggies = (veggie) => {
    return veggiePrices[veggie];
  };

  // Return the new, augmented object with the new method on it
  return maker;
  
})(SandwichMaker);