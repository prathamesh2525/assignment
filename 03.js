const addWithCondition = (num1, num2) => {
  if (num1 <= 15) {
    num1 += 1
  }
  if (num2 <= 15) {
    num2 += 1
  }
  if (num1 > 20) {
    num1 += 2
  }
  if (num2 > 20) {
    num2 += 2
  }
  return [num1, num2]
}

console.log(addWithCondition(15, 21))
