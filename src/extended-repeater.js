const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/* str, options */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
  


const CustomError = require("../extensions/custom-error");
module.exports = function repeater(str, { repeatTimes = 0 , separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = ''}) { 
  let res = '';
  res += str;
  for(let i = 0; i < repeatTimes; i++)
  {    
    for(let j = 0; j < additionRepeatTimes; j++)
    {
      if(additionRepeatTimes - j == 1)
        res += addition;
      else {
        res += addition + additionSeparator;   
     }   
   }
    if(repeatTimes - i == 1)
      continue;
    else{
      res += separator + str;   
    }   
  }
  if(repeatTimes === 0){
    return res + addition;
  }
  return res;
  
};
