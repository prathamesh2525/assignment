let list = [
  {
    name: "Milk",
    price: 50,
  },
  {
    name: "Bread",
    price: 30,
  },
  {
    name: "Eggs",
    price: 40,
  },
]
const budget = 200

const isWithinBudget = (list) => {
  let totalPrice = 0
  list.map((item) => {
    totalPrice += item.price
  })
  console.log(totalPrice)
  if (totalPrice < budget) {
    return true
  } else {
    return false
  }
}

const addItem = (itemName, itemPrice) => {
  let tempBudget = budget
  if (isWithinBudget(list) && tempBudget + itemPrice >= budget) {
    console.log("You are within the budget, adding item to the list..")
    list.push({ name: itemName, price: itemPrice })
    console.log(`${itemName} added to the list`)
  } else {
    console.log("Exceeded Budget...")
  }
}

addItem("Soap", 40)
