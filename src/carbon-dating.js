const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleA) {
  if(isNaN(sampleA)){
    return false;
  }
  if( Number(sampleA) > MODERN_ACTIVITY | Number(sampleA) <= 0){
    return false;
  }
  if(typeof sampleA == "string"){
    let result = Math.ceil( - HALF_LIFE_PERIOD*Math.log( sampleA / MODERN_ACTIVITY) / Math.log(2) );
   return result;
  }
  else{ 
    return false;
  }
};
