
const clickBtn = document.getElementById("ClickBtn")
const resetBtn = document.getElementById("ResetBtn")
const countLabel = document.getElementById("countLabel")

let count = 0

clickBtn.onclick = function(){
    count++
    countLabel.textContent = count
}

resetBtn.onclick = function(){
    count = 0
    countLabel.textContent = count
}