function forLoop(array) {
  var theArray = [...array]
  for (var i = 0; i < 25; i++) {
    if (i == 1) {
      theArray = [...theArray, "I am 1 strange loop."]
    } else {
      theArray = [...theArray, `I am ${i} strange loops.`]
    }
  }
  return theArray
}

function whileLoop(n) {
  while (n >= 0) {
    console.log(n)
    n -= 1
    if (n == 0) {
      
    }
  }
}
