module.exports = function getZerosCount(number, base) {
  // your implementation
  var multiplier = 2, simpleMultipliers = [], balance, zeroNum = [], obj = {}, zeros = [];
  while(multiplier <= base){
    balance = base % multiplier;
    if(!balance){
      simpleMultipliers.push(multiplier);
      base /= multiplier;
    }
    else multiplier++;
  } 
  for(var i = 0; i < simpleMultipliers.length; i++){
    var number1 = number;
    zeroNum[i] = 0;
    while(number1){
      number1 = Math.floor(number1/simpleMultipliers[i]);
      zeroNum[i] += number1;
    }
  }
  zeroNum.forEach(function(a){
    if (obj[a] != undefined)
        obj[a]++;
    else
        obj[a] = 1;
  });
  for(var key in obj){
    zeros.push(Math.floor(+key/obj[key]));
  }
  return Math.min.apply(null, zeros);
}