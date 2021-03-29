const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, dept = 1, dCou = new Set()) {
    dCou.add(dept);
      for(let i in arr){
        if(Array.isArray(arr[i])){
          this.calculateDepth(arr[i], dept + 1, dCou);
        }
      }

    
      return Math.max(...dCou);
    }
};
