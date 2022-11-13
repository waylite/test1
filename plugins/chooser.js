win["chooser"] = `
<input type="input" oninput="choose()" id=b>
<button class=q onclick="console.log(document.querySelector('#b').value)">log</button>
<button onclick="createe()">paragraph</button>
`
function choose() {
  console.log(1)
  // if (selectelement != "") {
  //   document.querySelector(`.${selectelement}`).className.replaceAll(" selected", "")
  // }

  try {document.querySelector('.selected').className = document.querySelector('.selected').className.replaceAll(" selected", "")}
  catch{}
  selectelement = document.querySelector('#b').value
  try {document.querySelector(`.${selectelement}`).className += " selected"}
  catch{}

}

function createe() {
  a = document.createElement("p")
  a.contentEditable = true
  a.innerText = "new text"
  document.querySelector("body").appendChild(a)
}
