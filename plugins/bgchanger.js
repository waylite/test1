create("window", "bgchanger", `

  <input type="color" oninput="bgchanger()" id=qwe>

  `)
//${selectelement}
function bgchanger() {
  document.querySelector(`body`).style.backgroundColor = document.querySelector("#qwe").value;
}

console.log(123455)
//createw(win["bgchanger"])
