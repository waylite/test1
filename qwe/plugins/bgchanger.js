create("window", "bgchanger", `

  <input type="color" oninput="a()" id=qwe>

  `)
//${selectelement}
function a() {
  document.querySelector(`body`).style.backgroundColor = document.querySelector("#qwe").value;
}

console.log(123455)
createw(win["bgchanger"])
