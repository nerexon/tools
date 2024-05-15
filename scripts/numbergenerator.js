let submitButton = document.getElementById("submit")
submitButton.onclick = () => {
  let min = document.getElementById("min").value
  let max = document.getElementById("max").value
  let amount = document.getElementById("amount").value
  let text = document.getElementById("text")
  text.value = ""
  if(amount > 99999){
    return alert("You exceeded the maximum amount of numbers to generate. Please try again. The limit is 99999.")
  }
  for(let i = 0; i < amount; i++){
    let number = Math.floor(Math.random() * (max - min)) + parseInt(min)
    text.value += `${number}\n`
  }
}