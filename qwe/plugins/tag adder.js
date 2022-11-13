create("window", "tag adder", `

<input>

  `)
function addel(a) {
  console.log(a)
   let div = document.createElement(a);
   //div.innerHTML = win
   //div.className = "plugin"
   document.querySelector("body").append(div)
  }

//createw(win["tag adder"])
// <input class="in" onchange="addel(document.querySelector('.in').value)">
