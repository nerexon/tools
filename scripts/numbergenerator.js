let submitButton = document.getElementById("submit")

submitButton.onclick = (event) => {
  event.preventDefault();
  
  let min = document.getElementById("min").value
  let max = document.getElementById("max").value
  let amount = document.getElementById("amount").value
  let text = document.getElementById("text")
  let baseText = ""
  
  if(amount > 150){
    return alert("You exceeded the maximum amount of numbers to generate. Please try again. The limit is 150.")
  }
  for(let i = 0; i < amount; i++){
    let number = Math.floor(Math.random() * (max - min + 1)) + parseInt(min)
    baseText += `${number}, `
  }
  text.style.display = 'block';
  text.innerHTML = baseText.slice(0, -2)
}