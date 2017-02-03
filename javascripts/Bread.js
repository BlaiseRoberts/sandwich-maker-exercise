"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = ((maker) => {

  // Private variable to store the different meat prices
  var breadPrices = {
  	white: 3,
  	wheat: 2,
  	rye: 4,
  	sourdough: 3
  };

  //Augment the original object with another method
  maker.addBread = (bread) => {
    return breadPrices[bread];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);