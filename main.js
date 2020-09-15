const answer = document.getElementById("answer")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const subtractBtn = document.getElementById("subtraction")
const multiplicationBtn = document.getElementById("multiply")
const divisionBtn = document.getElementById("divide")
const additionBtn = document.getElementById("addition")

multiplicationBtn.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = Number(num1.value) * Number(num2.value))
})

additionBtn.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = Number(num1.value) + Number(num2.value))
})

divisionBtn.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = num1.value / num2.value)
})

subtractBtn.addEventListener("click", function (e) {
  e.preventDefault()
  return (answer.innerHTML = num1.value - num2.value)
})
