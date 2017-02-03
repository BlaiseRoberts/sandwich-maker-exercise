"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = ((maker) => {

  // Private variable to store the different meat prices
  var condPrices = {
  	mustard: 0.30,
  	mayo: 0.40
  };

  //Augment the original object with another method
  maker.addCond = (cond) => {
    return condPrices[cond];
  };

  // Return the new, augmented object with the new method on it
  return maker;
  
})(SandwichMaker);