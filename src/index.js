module.exports = function getZerosCount(number, base) {
  // your implementation
  var multiplier = 2, simple = [], simple1 = [], balance, zeros = 0, zeroNum = [];
  while(multiplier <= base){
    balance = base % multiplier;
    if(!balance){
      simple.push(multiplier);
      base /= multiplier;
    }
    else multiplier++;
  } 
  for(var i = 0; i < simple.length; i++){
    var number1 = number;
    zeroNum[i] = 0;
    while(number1){
      number1 = Math.floor(number1/simple[i]);
      zeroNum[i] += number1;
    }
  }
  return Math.min.apply(null, zeroNum);
}