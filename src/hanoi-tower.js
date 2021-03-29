const CustomError = require("../extensions/custom-error");
let res = {
  turn: 0,
  second: 0
}
module.exports = function calculateHanoi( disksNum, turnsSpeed ) {
  res.turn = 2 ** disksNum - 1;
  res.second = Math.floor( 3600 / turnsSpeed  * res.turn );
  return res;
};
