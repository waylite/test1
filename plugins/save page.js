// create("window", "save page", `
//
// <button onclick="download()">Download</button>
//
//   `)
//function download() {
  data = document.querySelector("*").cloneNode(true)
  data.querySelector(".program").remove()
  // data.querySelector(".program").remove()
  data = new Blob([data.innerHTML], {type: 'text/plain'});
  data = window.URL.createObjectURL(data);
  a = document.createElement("a");
  a.href = data
  a.download = "examplee.html"
  a.click()
//  download = undefined
//  }
//download()
