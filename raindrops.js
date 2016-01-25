function Raindrops(){}

Raindrops.prototype.convert = function(number) {
  var result = '';
  number%3 === 0 && number%5 === 0 && number%7 === 0 ? result += 'PlingPlangPlong' : 
  number%3 === 0 && number%5 === 0 ? result += 'PlingPlang' :
  number%3 === 0 && number%7 === 0 ? result += 'PlingPlong' :
  number%5 === 0 && number%7 === 0 ? result += 'PlangPlong' :
  number%3 === 0 ? result += 'Pling' : 
  number%5 === 0 ? result += 'Plang' : 
  number%7 === 0 ? result += 'Plong' : 
  result = number.toString();
  return result;
};


module.exports = Raindrops;