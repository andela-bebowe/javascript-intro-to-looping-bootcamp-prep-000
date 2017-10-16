function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i == 1) {
      array = [...array, "I am 1 strange loop."]
    }
  }
}
