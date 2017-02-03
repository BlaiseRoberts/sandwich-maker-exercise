"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = ((maker) => {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	american: 1.00,
  	swiss: 1.00,
  	cheddar: 1.00
  };

  //Augment the original object with another method
  maker.addCheese = (cheese) => {
    return cheesePrices[cheese];
  };

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker);