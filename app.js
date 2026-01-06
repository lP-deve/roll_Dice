

function rollDIce(){
  const numofDIce = document.querySelector("#num").value
  const diceresult = document.querySelector("#diceResult")
  const diceImg = document.querySelector("#dice");
  const values = [];
  const imgs = [];

 for(i = 0; i<numofDIce; i++){
     const value =Math.floor( Math.random()*6 )+1
     console.log(value)
     values.push(value);
     imgs.push(`<img src="imgs/${value}.jpg">`)
}
console.log(values)
diceresult.textContent = `dice: ${values.join(", ")}`
diceImg.innerHTML = imgs.join("")
}