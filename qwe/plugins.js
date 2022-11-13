plugins = ["bgchanger", "2", "3", "chooser", "tag adder"]

let program = document.createElement('div');
program.className = "program"
program.style.display = "none"
// https://asdafasdgfdas.netlify.app/
programs = `

  <link href="1.css" rel="stylesheet">
  <div class="script"></div>
  <div class="plugins"></div>
`
program.innerHTML = programs

// https://github.com/hammerjs/hammer.js/blob/master/hammer.js
// https://raw.githubusercontent.com/hammerjs/hammer.js/master/hammer.js
// https://raw.githubusercontent.com/hammerjs/hammer.js/master/hammer.js

document.querySelector("body").append(program)

function $(selector) {
  return document.querySelector(selector)
}

function create(m, name, win) {
  console.log($(`.plugin.${name.replaceAll(" ", "_")}`))
  if (m == "window" && $(`.plugin.${name.replaceAll(" ", "_")}`) == null) {
    name = name.replaceAll(" ", "_")
    let div = document.createElement('div');
    div.innerHTML = win
    div.className = `plugin ${name}`
    document.querySelector(".plugins").append(div)
  }

}

document.addEventListener("keyup", switcher)

function switcher(e) {
  if (e.code = "Insert") {
    a = $(".program").style
    if (a.display == "") {
      a.display = "none"
    } else {
      a.display = ""
    }
  }

}

// <link href="1.css" rel="stylesheet" class="test">
// let link = document.createElement('link');
// link.href = "https://asdafasdgfdas.netlify.app/1.css"
// link.rel = "stylesheet"
// document.querySelector("head").append(link)

function load_plugin(name) {
  if ($(`.plugin.${name.replaceAll(" ", "_")}`) == null) {
    let script = document.createElement('script');
    // script.src = `https://asdafasdgfdas.netlify.app/plugins/${name}.js`
    script.src = `plugins/${name}.js`
    name = name.replaceAll(" ", "_")
    script.className = name
    document.querySelector(".script").append(script)
  }

}

function load_plugin_from_url(name) {
  //if ($(`.plugin.${name.replaceAll(" ", "_")}`) == null) {
    let script = document.createElement('script');
    // script.src = `https://asdafasdgfdas.netlify.app/plugins/${name}.js`
    url = name.replace("github", "raw.githubusercontent").replace("blob/", "")
    console.log(url)
    script.src = url
    //name = name.replaceAll(" ", "_")
    //script.className = name
    document.querySelector(".script").append(script)
  //}

}

for (let i = 0;i < plugins.length;i++) {
  p = document.createElement("p")
  p.innerText = plugins[i]
  // p.draggable = true
  $(".plugins").append(p)
}

function load() {
  $(".plugins").onclick = e => {
    if (e.target.tagName == "P") {
      load_plugin(e.target.innerText)
    }
  }
  // keys = Object.keys(win);
  // let link = document.createElement('link');
  // link.href = "https://asdafasdgfdas.netlify.app/1.css"
  // link.rel = "stylesheet"
  // document.querySelector("head").append(link)


}

document.addEventListener("DOMContentLoaded", load);
