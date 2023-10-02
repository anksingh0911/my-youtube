export const getNumber = (num) =>{ 
  var units = ["M","B","T","Q"]
  var unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
  var r = unit%3
  var x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2)
  console.log(x.toFixed(2), units[Math.floor(unit / 3) - 2])
  return x.toFixed(2)+''+ units[Math.floor(unit / 3) - 2]
}