const evaluate = (marks) => {
  const marksLessThan35 = marks.filter((mark) => mark < 35).length
  const marksGreaterThan50 = marks.filter((mark) => mark > 50).length
  const marksGreaterThan75 = marks.filter((mark) => mark > 75).length

  if (marksGreaterThan75 > 0) {
    return "Distinction"
  } else if (marksGreaterThan50 === 3) {
    return "Pass"
  } else if (marksGreaterThan50 === 2 && marksLessThan35 === 1) {
    return "ATKT"
  } else if (marksLessThan35 === 3) {
    return "Failed"
  } else {
    return "N.A."
  }
}

const marks = [60, 55, 76]

console.log(evaluate(marks))
