create("window", "bg", `

  <input onchange="bg(this)" >

  `)

function bg(a) {
  b = document.createElement("img")
  b.src = a.value
  document.body.append(b)
  b = document.createElement("style")
  b.innerHTML = `

  img {
    z-index:-1000000;
    width: 100vw;
    height: 100vh;
    position: fixed;
  }

  `
  document.body.append(b)
}
